/**
 * Image optimization script for Rishi Exports website
 * 
 * This script processes images in the public/images directory to create optimized versions
 * for different screen sizes and formats.
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  inputDir: path.join(__dirname, '../public/images'),
  outputDir: path.join(__dirname, '../public/images/optimized'),
  sizes: [640, 768, 1024, 1280, 1536, 1920],
  formats: ['webp', 'avif'],
  quality: 80,
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

/**
 * Process a single image file
 * @param {string} filePath - Path to the image file
 */
async function processImage(filePath) {
  const fileName = path.basename(filePath);
  const fileNameWithoutExt = path.parse(fileName).name;
  const fileExt = path.parse(fileName).ext.toLowerCase();
  
  // Skip if not an image
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(fileExt)) {
    return;
  }
  
  console.log(`Processing ${fileName}...`);
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Process each size
    for (const size of config.sizes) {
      // Skip if image is smaller than target size
      if (metadata.width <= size) continue;
      
      const resizedImage = image.resize(size);
      
      // Process each format
      for (const format of config.formats) {
        const outputPath = path.join(
          config.outputDir,
          `${fileNameWithoutExt}-${size}.${format}`
        );
        
        await resizedImage[format]({
          quality: config.quality,
        }).toFile(outputPath);
      }
    }
    
    console.log(`✅ Optimized ${fileName}`);
  } catch (error) {
    console.error(`❌ Error processing ${fileName}:`, error);
  }
}

/**
 * Process all images in a directory recursively
 * @param {string} dirPath - Directory path to process
 */
async function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      // Create corresponding output directory
      const relativePath = path.relative(config.inputDir, fullPath);
      const outputSubDir = path.join(config.outputDir, relativePath);
      
      if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
      }
      
      await processDirectory(fullPath);
    } else {
      await processImage(fullPath);
    }
  }
}

// Main execution
(async () => {
  console.log('🖼️ Starting image optimization...');
  console.log(`Input directory: ${config.inputDir}`);
  console.log(`Output directory: ${config.outputDir}`);
  
  const startTime = Date.now();
  
  try {
    await processDirectory(config.inputDir);
    
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;
    
    console.log(`✨ Image optimization completed in ${duration.toFixed(2)}s`);
  } catch (error) {
    console.error('❌ Error during image optimization:', error);
    process.exit(1);
  }
})();