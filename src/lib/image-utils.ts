/**
 * Utility functions for optimizing image loading and performance
 */

/**
 * Determines if an image should be loaded with priority based on its importance
 * @param isPriority - Whether the image is a priority image (e.g., hero image, above the fold)
 * @returns boolean indicating if the image should be loaded with priority
 */
export function shouldLoadWithPriority(isPriority: boolean = false): boolean {
  return isPriority;
}

/**
 * Determines the appropriate loading strategy for an image
 * @param isPriority - Whether the image is a priority image
 * @param isBelowFold - Whether the image is below the fold
 * @returns 'eager' | 'lazy' loading strategy
 */
export function getLoadingStrategy(
  isPriority: boolean = false,
  isBelowFold: boolean = true
): 'eager' | 'lazy' {
  if (isPriority || !isBelowFold) {
    return 'eager';
  }
  return 'lazy';
}

/**
 * Generates a srcSet for responsive images
 * @param src - The base image source
 * @param sizes - Array of sizes for the srcSet
 * @returns string representing the srcSet
 */
export function generateSrcSet(src: string, sizes: number[] = [640, 750, 828, 1080, 1200, 1920]): string {
  return sizes.map(size => `${src}?w=${size} ${size}w`).join(', ');
}

/**
 * Generates sizes attribute for responsive images
 * @param defaultSize - Default size as fallback
 * @returns string representing the sizes attribute
 */
export function generateSizes(defaultSize: string = '100vw'): string {
  return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${defaultSize}`;
}

/**
 * Calculates the aspect ratio for an image placeholder
 * @param width - Image width
 * @param height - Image height
 * @returns number representing the aspect ratio
 */
export function calculateAspectRatio(width: number, height: number): number {
  return (height / width) * 100;
}

/**
 * Creates a blur data URL for image placeholders
 * @param color - Base color for the placeholder
 * @returns string representing a data URL
 */
export function createBlurDataURL(color: string = 'rgba(229, 231, 235, 0.5)'): string {
  // Simple SVG-based blur placeholder
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5" width="8" height="5"><rect width="8" height="5" fill="${color}"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}