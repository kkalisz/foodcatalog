import { S3Client } from '@aws-sdk/client-s3';

if (!process.env.S3_ACCESS_KEY_ID || !process.env.S3_SECRET_ACCESS_KEY) {
  // We don't throw error here to allow build to pass if variables are missing
  // but we should warn in development
  if (process.env.NODE_ENV === 'development') {
    console.warn('S3 environment variables are missing');
  }
}

export const s3Client = new S3Client({
  region: process.env.S3_REGION || 'us-east-1',
  endpoint: process.env.S3_ENDPOINT || undefined,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
  },
  forcePathStyle: true, // Needed for SeaweedFS and other S3-compatible storages
});

export const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;
export const S3_PUBLIC_URL = process.env.S3_PUBLIC_URL;
