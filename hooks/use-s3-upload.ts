'use client';

import { useState } from 'react';

import { getUploadUrl } from '@/lib/actions/s3';

export function useS3Upload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setError(null);
    setProgress(0);

    try {
      // 1. Get presigned URL from server action
      const { uploadUrl, key } = await getUploadUrl(file.name, file.type);

      // 2. Upload file directly to S3 using the presigned URL
      const xhr = new XMLHttpRequest();

      return new Promise<{ key: string }>((resolve, reject) => {
        xhr.upload.addEventListener('progress', event => {
          if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            setProgress(percentComplete);
          }
        });

        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            setIsUploading(false);
            resolve({ key });
          } else {
            const errorMsg = `Upload failed with status: ${xhr.status}`;
            setError(errorMsg);
            setIsUploading(false);
            reject(new Error(errorMsg));
          }
        });

        xhr.addEventListener('error', () => {
          const errorMsg = 'Network error during upload';
          setError(errorMsg);
          setIsUploading(false);
          reject(new Error(errorMsg));
        });

        xhr.open('PUT', uploadUrl);
        xhr.setRequestHeader('Content-Type', file.type);
        xhr.send(file);
      });
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to start upload';
      setError(errorMsg);
      setIsUploading(false);
      throw err;
    }
  };

  return {
    uploadFile,
    isUploading,
    error,
    progress,
  };
}
