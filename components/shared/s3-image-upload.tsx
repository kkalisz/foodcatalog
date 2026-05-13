'use client';

import React, { useRef, useState } from 'react';

import { Flex } from '@radix-ui/themes';
import { Timestamp } from 'firebase/firestore';
import { Loader2, Upload } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import type { ImageBucket } from '@/data/types/image';
import { useS3Upload } from '@/hooks/use-s3-upload';
import { addImage } from '@/lib/firebase/addImage';
import { useFirmId } from '@/lib/firebase/useFirmId';

import { S3ImageListClient } from './s3-image-list-client';

interface S3ImageUploadProps {
  onUploadComplete?: (url: string) => void;
  onUploadError?: (error: Error) => void;
  restaurantId?: string;
  logo?: boolean;
  cover?: boolean;
  dishImagesOnly?: boolean;
  selectedImageUrl?: string;
}

function getBucket(logo?: boolean, cover?: boolean, dishImagesOnly?: boolean): ImageBucket {
  if (logo) {
    return 'logo';
  }
  if (cover) {
    return 'background';
  }
  if (dishImagesOnly) {
    return 'dish';
  }
  return 'gallery';
}

export function S3ImageUpload({
  onUploadComplete,
  onUploadError,
  restaurantId,
  logo,
  cover,
  dishImagesOnly,
  selectedImageUrl,
}: S3ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadFile, isUploading, progress, error } = useS3Upload();
  const { firmId } = useFirmId();
  const [refreshKey, setRefreshKey] = useState(0);
  const [latestUploadedUrl, setLatestUploadedUrl] = useState<string | undefined>();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    try {
      const { publicUrl, key } = await uploadFile(file, restaurantId, logo, cover, dishImagesOnly);
      setLatestUploadedUrl(publicUrl);
      setRefreshKey(k => k + 1);
      if (firmId && restaurantId) {
        await addImage(firmId, restaurantId, getBucket(logo, cover, dishImagesOnly), {
          url: publicUrl,
          s3key: key,
          restaurantId: restaurantId,
          uploadedAt: Timestamp.now(),
          order: Date.now(),
        });
      }
      toast.success('Image uploaded successfully');
      if (onUploadComplete) {
        onUploadComplete(publicUrl);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Upload failed');
      if (onUploadError) {
        onUploadError(err instanceof Error ? err : new Error('Upload failed'));
      }
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <Flex direction="column" gap="2" width="100%">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        disabled={isUploading}
      />

      <Button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        variant="default"
        className="w-full max-w-sm"
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading... {Math.round(progress)}%
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            {logo
              ? 'Dodaj logo restauracji'
              : cover
                ? 'Dodaj zdjęcie okładki restauracji'
                : dishImagesOnly
                  ? 'Dodaj zdjęcie dania'
                  : 'Dodaj zdjęcie galerii głównej restauracji'}
          </>
        )}
      </Button>

      {isUploading && (
        <div className="w-full max-w-sm bg-secondary h-2 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {error && <p className="text-xs text-destructive">{error}</p>}

      {dishImagesOnly ? (
        (() => {
          const displayUrl = latestUploadedUrl ?? selectedImageUrl;
          if (!displayUrl) {
            return null;
          }
          return (
            <div className="relative w-32 h-32 rounded-xl overflow-hidden border bg-muted shadow-sm mt-2">
              <Image
                src={displayUrl}
                alt="Zdjęcie dania"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          );
        })()
      ) : (
        <S3ImageListClient
          restaurantId={restaurantId}
          logoOnly={logo}
          coverOnly={cover}
          dishImagesOnly={dishImagesOnly}
          refreshKey={refreshKey}
          latestUploadedUrl={latestUploadedUrl}
        />
      )}
    </Flex>
  );
}
