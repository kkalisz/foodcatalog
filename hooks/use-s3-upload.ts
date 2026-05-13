'use client';

import { useState } from 'react';

import { getUploadUrl } from '@/lib/actions/s3';

export function useS3Upload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const uploadFile = async (
    file: File,
    restaurantId?: string,
    logo?: boolean,
    cover?: boolean,
    dishImagesOnly?: boolean
  ) => {
    setIsUploading(true);
    setError(null);
    setProgress(0);

    try {
      const { uploadUrl, key, publicUrl } = await getUploadUrl(
        file.name,
        file.type,
        restaurantId,
        logo,
        cover,
        dishImagesOnly
      );

      const xhr = new XMLHttpRequest();

      return new Promise<{ key: string; publicUrl: string }>((resolve, reject) => {
        xhr.upload.addEventListener('progress', event => {
          if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            setProgress(percentComplete);
          }
        });

        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            setIsUploading(false);
            resolve({ key, publicUrl });
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
        const effectiveContentType = file.type || 'application/octet-stream';
        xhr.setRequestHeader('Content-Type', effectiveContentType);
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
