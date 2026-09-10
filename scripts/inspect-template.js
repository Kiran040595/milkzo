import sharp from 'sharp';

async function inspect() {
  const metadata = await sharp('public/images/hero-cows.png').metadata();
  console.log('Hero cows dimensions:', metadata.width, 'x', metadata.height);
}


inspect().catch(console.error);
