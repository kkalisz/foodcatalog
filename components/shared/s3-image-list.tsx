import Image from 'next/image';

import { listImages } from '@/lib/actions/s3';
import { cn } from '@/lib/utils';

export async function S3ImageList({
  className,
  restaurantId,
  logoOnly,
}: {
  className?: string;
  restaurantId?: string;
  logoOnly?: boolean;
}) {
  let images = [];
  try {
    const all = await listImages(restaurantId);
    images = logoOnly
      ? all.filter(img => img.key.includes('/logo/'))
      : all.filter(img => !img.key.includes('/logo/'));
  } catch (error) {
    return (
      <div className="p-4 border border-destructive/50 bg-destructive/10 rounded-md">
        <p className="text-destructive text-sm font-medium">Failed to load images from S3</p>
        <p className="text-destructive/80 text-xs mt-1">
          {error instanceof Error ? error.message : 'Unknown error'}
        </p>
      </div>
    );
  }

  if (logoOnly) {
    const logo = images[images.length - 1];
    return (
      <div className={cn('flex flex-col gap-2', className)}>
        {logo ? (
          <div className="relative w-32 h-32 rounded-xl overflow-hidden border bg-muted shadow-sm">
            <Image
              src={logo.url}
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

  if (images.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed rounded-lg bg-muted/30 w-full">
        <p className="text-muted-foreground italic">Brak zdjęć w galerii</p>
      </div>
    );
  }

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
            <Image
              src={image.url}
              alt={image.key}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
          </div>
          <div className="p-2 bg-background/80 backdrop-blur-sm border-t"></div>
        </div>
      ))}
    </div>
  );
}
