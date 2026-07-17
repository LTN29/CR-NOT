import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = 'C:\\Users\\ADMIN\\Downloads\\crenot';
const outputDir = path.join(process.cwd(), 'public', 'assets');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Ensure the function is async to handle promises properly
async function processDirectory(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  let index = 1;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath, `${file.toLowerCase()}-`);
    } else if (file.match(/\.(png|jpe?g)$/i)) {
      let outputName;
      if (file.toLowerCase().includes('logo') || file.toLowerCase().includes('transparent')) {
        outputName = 'crenot-logo.webp';
      } else {
        outputName = `${prefix}${index}.webp`;
        index++;
      }
      const outputPath = path.join(outputDir, outputName);
      
      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .resize({ width: 1920, withoutEnlargement: true }) // ensure images are reasonably sized
          .toFile(outputPath);
        console.log(`Processed: ${outputName}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

async function run() {
  console.log('Starting image processing...');
  await processDirectory(inputDir);
  console.log('Done!');
}

run();
