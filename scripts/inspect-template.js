import sharp from 'sharp';

async function inspect() {
  const metadata = await sharp('public/images/promise-farmer.png').metadata();
  console.log('Promise farmer dimensions:', metadata.width, 'x', metadata.height);
}



inspect().catch(console.error);
