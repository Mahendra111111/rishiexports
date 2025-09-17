import React from 'react';
import Image, { ImageProps } from 'next/image';
import { getLoadingStrategy, shouldLoadWithPriority, createBlurDataURL } from '@/lib/image-utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  isPriority?: boolean;
  isBelowFold?: boolean;
  optimizationQuality?: number;
  usePlaceholder?: boolean;
  placeholderColor?: string;
}

/**
 * OptimizedImage component that applies best practices for image loading and optimization
 */
export default function OptimizedImage({
  src,
  alt,
  isPriority = false,
  isBelowFold = true,
  optimizationQuality = 80,
  usePlaceholder = true,
  placeholderColor = 'rgba(229, 231, 235, 0.5)',
  sizes = '100vw',
  ...props
}: OptimizedImageProps) {
  // Determine loading strategy based on image position and priority
  const loading = getLoadingStrategy(isPriority, isBelowFold);
  
  // Generate blur placeholder if needed
  const placeholder = usePlaceholder ? 'blur' : undefined;
  const blurDataURL = usePlaceholder ? createBlurDataURL(placeholderColor) : undefined;

  return (
    <Image
      src={src}
      alt={alt}
      loading={loading}
      priority={shouldLoadWithPriority(isPriority)}
      quality={optimizationQuality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      sizes={sizes}
      {...props}
    />
  );
}