'use server';

import { PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';

import { s3Client, S3_BUCKET_NAME, S3_PUBLIC_URL } from '../s3-client';

/**
 * Generates a presigned URL for uploading a file to S3.
 * This should be called from the client side after authenticating the user.
 *
 * @param fileName - Original name of the file
 * @param contentType - MIME type of the file
 * @returns {Promise<{ uploadUrl: string, key: string }>}
 */
export async function getUploadUrl(
  fileName: string,
  contentType: string,
  restaurantId?: string,
  logo?: boolean,
  cover?: boolean,
  dishImagesOnly?: boolean | undefined
) {
  // Authentication check should be performed here
  // For now, we assume the user is logged in if they can reach this action
  // In a real app, you would verify the session/token

  if (!S3_BUCKET_NAME) {
    throw new Error('S3_BUCKET_NAME is not configured');
  }

  const fileExtension = fileName.split('.').pop();
  const baseFolder = restaurantId ? `uploads/${restaurantId}` : 'uploads';
  const folder = logo
    ? `${baseFolder}/logo`
    : cover
      ? `${baseFolder}/cover`
      : dishImagesOnly
        ? `${baseFolder}/dish`
        : baseFolder;
  const key = `${folder}/${uuidv4()}.${fileExtension}`;
  const effectiveContentType = contentType || 'application/octet-stream';

  const command = new PutObjectCommand({
    Bucket: S3_BUCKET_NAME,
    Key: key,
    ContentType: effectiveContentType,
  });

  // Explicitly remove flexible checksums middleware to prevent the SDK from adding
  // x-amz-checksum-crc32 query parameters to the presigned URL, which causes
  // BadDigest errors in SeaweedFS when no checksum is provided by the browser.
  if (command.middlewareStack && typeof command.middlewareStack.removeByTag === 'function') {
    command.middlewareStack.removeByTag('flexibleChecksums');
    command.middlewareStack.removeByTag('flexibleChecksumsMiddleware');
  }
  if (command.middlewareStack && typeof command.middlewareStack.remove === 'function') {
    command.middlewareStack.remove('flexibleChecksumsMiddleware');
    command.middlewareStack.remove('flexibleChecksums');
  }

  if (!S3_PUBLIC_URL) {
    throw new Error('S3_PUBLIC_URL is not configured');
  }

  try {
    const uploadUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
      signableHeaders: new Set(['host', 'content-type']),
    });
    const publicUrl = `${S3_PUBLIC_URL}/buckets/${S3_BUCKET_NAME}/${key}`;
    return { uploadUrl, key, publicUrl };
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    throw new Error('Failed to generate upload URL');
  }
}

/**
 * Generates the public URL for a file in S3.
 *
 * @param key - The key of the file in S3
 * @returns {string} - The public URL
 */
export async function getPublicUrl(key: string) {
  if (!S3_BUCKET_NAME) {
    throw new Error('S3_BUCKET_NAME is not configured');
  }

  if (!S3_PUBLIC_URL) {
    throw new Error('S3_PUBLIC_URL is not configured');
  }

  return `${S3_PUBLIC_URL}/buckets/${S3_BUCKET_NAME}/${key}`;
}

/**
 * Lists all objects in the S3 bucket.
 *
 * @returns {Promise<{ key: string, url: string }[]>}
 */
export async function listImages(restaurantId?: string) {
  if (!S3_BUCKET_NAME) {
    throw new Error('S3_BUCKET_NAME is not configured');
  }

  if (!S3_PUBLIC_URL) {
    throw new Error('S3_PUBLIC_URL is not configured');
  }

  const command = new ListObjectsV2Command({
    Bucket: S3_BUCKET_NAME,
    Prefix: restaurantId ? `uploads/${restaurantId}/` : undefined,
  });

  try {
    const response = await s3Client.send(command);
    const contents = response.Contents || [];

    return contents
      .filter(item => item.Key)
      .map(item => ({
        key: item.Key!,
        url: `${S3_PUBLIC_URL}/buckets/${S3_BUCKET_NAME}/${item.Key}`,
        lastModified: item.LastModified,
      }));
  } catch (error) {
    console.error('Error listing objects from S3:', error);
    throw new Error('Failed to list images');
  }
}
