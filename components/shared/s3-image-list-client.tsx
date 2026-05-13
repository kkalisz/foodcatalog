/* eslint-disable promise/always-return */
'use client';

import { useEffect, useState } from 'react';

import { Trash2 } from 'lucide-react';
import Image from 'next/image';

import { listImages } from '@/lib/actions/s3';
import { cn } from '@/lib/utils';

interface Props {
  restaurantId?: string;
  logoOnly?: boolean;
  coverOnly?: boolean;
  dishImagesOnly?: boolean;
  className?: string;
  refreshKey?: number;
  latestUploadedUrl?: string;
}

export function S3ImageListClient({
  restaurantId,
  logoOnly,
  coverOnly,
  dishImagesOnly,
  className,
  refreshKey,
  latestUploadedUrl,
}: Props) {
  const [images, setImages] = useState<{ key: string; url: string; lastModified?: Date }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    listImages(restaurantId)
      .then(all => {
        if (logoOnly) {
          const logos = all
            .filter(img => img.key.includes('/logo/'))
            .sort((a, b) => (b.lastModified?.getTime() ?? 0) - (a.lastModified?.getTime() ?? 0));
          setImages(logos);
        } else if (coverOnly) {
          const covers = all
            .filter(img => img.key.includes('/cover/'))
            .sort((a, b) => (b.lastModified?.getTime() ?? 0) - (a.lastModified?.getTime() ?? 0));
          setImages(covers);
        } else if (dishImagesOnly) {
          setImages(all.filter(img => img.key.includes('/dish/')));
        } else {
          setImages(
            all.filter(
              img =>
                !img.key.includes('/logo/') &&
                !img.key.includes('/cover/') &&
                !img.key.includes('/dish/')
            )
          );
        }
      })
      .catch(err => setError(err instanceof Error ? err.message : 'Failed to load images'))
      .finally(() => setLoading(false));
  }, [restaurantId, logoOnly, coverOnly, dishImagesOnly, refreshKey]);

  if (error) {
    return <p className="text-xs text-destructive">{error}</p>;
  }

  if (coverOnly) {
    const displayUrl = latestUploadedUrl ?? images[0]?.url;
    if (loading && !displayUrl) {
      return (
        <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      );
    }
    return (
      <div className={cn('flex flex-col gap-2 w-full', className)}>
        {displayUrl ? (
          <div className="relative w-full h-40 rounded-xl overflow-hidden border bg-muted shadow-sm">
            <Image
              src={displayUrl}
              alt="Okładka restauracji"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-40 rounded-xl border border-dashed bg-muted/30">
            <p className="text-xs text-muted-foreground text-center px-2">Brak okładki</p>
          </div>
        )}
      </div>
    );
  }

  if (logoOnly) {
    const displayUrl = latestUploadedUrl ?? images[0]?.url;
    if (loading && !displayUrl) {
      return (
        <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      );
    }
    return (
      <div className={cn('flex flex-col gap-2', className)}>
        {displayUrl ? (
          <div className="relative w-32 h-32 rounded-xl overflow-hidden border bg-muted shadow-sm">
            <Image
              src={displayUrl}
              alt="Logo restauracji"
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-32 h-32 rounded-xl border border-dashed bg-muted/30">
            <p className="text-xs text-muted-foreground text-center px-2">Brak logo</p>
          </div>
        )}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-8 border border-dashed rounded-lg bg-muted/30 w-full">
        <p className="text-muted-foreground italic text-sm">Brak zdjęć w galerii</p>
      </div>
    );
  }

  const handleDelete = () => {};

  return (
    <div
      className={cn(
        'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full',
        className
      )}
    >
      {images.map(image => (
        <div
          key={image.key}
          className="group relative border rounded-lg overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-square relative bg-muted">
            <span
              className="absolute bg-orange-400 top-2 left-2 z-10 hover:bg-orange-500 text-white p-1 rounded-full cursor-pointer"
              onClick={() => handleDelete()}
            >
              <Trash2 className="w-5 h-5" />
            </span>
            <Image
              src={image.url}
              alt={image.key}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
          </div>
          <div className="p-2 bg-background/80 backdrop-blur-sm border-t" />
        </div>
      ))}
    </div>
  );
}
