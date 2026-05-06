'use server';

import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';

import { s3Client, S3_BUCKET_NAME } from '../s3-client';

/**
 * Generates a presigned URL for uploading a file to S3.
 * This should be called from the client side after authenticating the user.
 *
 * @param fileName - Original name of the file
 * @param contentType - MIME type of the file
 * @returns {Promise<{ uploadUrl: string, key: string }>}
 */
export async function getUploadUrl(fileName: string, contentType: string) {
  // Authentication check should be performed here
  // For now, we assume the user is logged in if they can reach this action
  // In a real app, you would verify the session/token

  if (!S3_BUCKET_NAME) {
    throw new Error('S3_BUCKET_NAME is not configured');
  }

  const fileExtension = fileName.split('.').pop();
  const key = `uploads/${uuidv4()}.${fileExtension}`;

  const command = new PutObjectCommand({
    Bucket: S3_BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  try {
    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    return { uploadUrl, key };
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
  const publicBaseUrl = process.env.S3_PUBLIC_URL || `${process.env.S3_ENDPOINT}/${S3_BUCKET_NAME}`;
  return `${publicBaseUrl}/${key}`;
}
