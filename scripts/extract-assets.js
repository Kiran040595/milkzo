import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = 'public/images';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extract() {
  // Hero cows photo - cleanly avoiding overlapping badges
  await sharp('Source/Templet.jpeg')
    .extract({ left: 292, top: 35, width: 311, height: 265 })
    .toFile(path.join(outDir, 'hero-cows.jpg'));



  // Product 1: Milk pouch
  await sharp('Source/Templet.jpeg')
    .extract({ left: 23, top: 385, width: 138, height: 155 })
    .toFile(path.join(outDir, 'product-milk.jpg'));

  // Product 2: Paneer
  await sharp('Source/Templet.jpeg')
    .extract({ left: 166, top: 385, width: 138, height: 155 })
    .toFile(path.join(outDir, 'product-paneer.jpg'));

  // Product 3: Curd
  await sharp('Source/Templet.jpeg')
    .extract({ left: 308, top: 385, width: 138, height: 155 })
    .toFile(path.join(outDir, 'product-curd.jpg'));

  // Product 4: Ghee
  await sharp('Source/Templet.jpeg')
    .extract({ left: 450, top: 385, width: 132, height: 155 })
    .toFile(path.join(outDir, 'product-ghee.jpg'));

  // Promise banner (farmer with cows)
  await sharp('Source/Templet.jpeg')
    .extract({ left: 250, top: 635, width: 353, height: 145 })
    .toFile(path.join(outDir, 'promise-farmer.jpg'));

  // Milk splash in Why Choose section
  await sharp('Source/Templet.jpeg')
    .extract({ left: 230, top: 955, width: 160, height: 195 })
    .toFile(path.join(outDir, 'milk-splash.jpg'));

  // App download phone mockup
  await sharp('Source/Templet.jpeg')
    .extract({ left: 238, top: 1320, width: 180, height: 125 })
    .toFile(path.join(outDir, 'app-phone.jpg'));


  // Right navy card illustration in Why Choose
  await sharp('Source/Templet.jpeg')
    .extract({ left: 390, top: 955, width: 190, height: 195 })
    .toFile(path.join(outDir, 'freshness-card.jpg'));

  // App store badges
  await sharp('Source/Templet.jpeg')
    .extract({ left: 28, top: 1385, width: 175, height: 26 })
    .toFile(path.join(outDir, 'app-stores.jpg'));


  // Testimonial avatars
  await sharp('Source/Templet.jpeg')
    .extract({ left: 42, top: 1270, width: 32, height: 32 })
    .toFile(path.join(outDir, 'avatar-riya.jpg'));

  await sharp('Source/Templet.jpeg')
    .extract({ left: 232, top: 1270, width: 32, height: 32 })
    .toFile(path.join(outDir, 'avatar-amit.jpg'));

  await sharp('Source/Templet.jpeg')
    .extract({ left: 420, top: 1270, width: 32, height: 32 })
    .toFile(path.join(outDir, 'avatar-sneha.jpg'));

  // Logo
  await sharp('Source/Templet.jpeg')
    .extract({ left: 25, top: 5, width: 90, height: 38 })
    .toFile(path.join(outDir, 'logo-crop.jpg'));

  console.log('All image slices extracted successfully!');
}

extract().catch(console.error);
