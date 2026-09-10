import sharp from 'sharp';

async function inspect() {
  const metadata = await sharp('Source/Templet.jpeg').metadata();
  console.log('Template dimensions:', metadata.width, 'x', metadata.height);
}

inspect().catch(console.error);
