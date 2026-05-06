'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useS3Upload } from '@/hooks/use-s3-upload';
import { Loader2, Upload } from 'lucide-react';
import { toast } from 'sonner';

interface S3ImageUploadProps {
  onUploadComplete?: (key: string) => void;
  onUploadError?: (error: Error) => void;
}

export function S3ImageUpload({ onUploadComplete, onUploadError }: S3ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadFile, isUploading, progress, error } = useS3Upload();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Basic validation
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    try {
      const { key } = await uploadFile(file);
      toast.success('Image uploaded successfully');
      if (onUploadComplete) {
        onUploadComplete(key);
      }
    } catch (err) {
      console.error('Upload error:', err);
      toast.error(err instanceof Error ? err.message : 'Upload failed');
      if (onUploadError) {
        onUploadError(err instanceof Error ? err : new Error('Upload failed'));
      }
    } finally {
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        disabled={isUploading}
      />
      
      <Button 
        onClick={triggerFileInput} 
        disabled={isUploading}
        variant="outline"
        className="w-full"
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading... {Math.round(progress)}%
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Upload Image
          </>
        )}
      </Button>
      
      {isUploading && (
        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
