import fs from 'fs';
import { execSync } from 'child_process';

const VIDEO_URL = process.argv[2] || "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

async function run() {
  console.log("Downloading raw Kling/Fallback video...");
  const res = await fetch(VIDEO_URL);
  
  if (!res.ok) {
    console.error("Failed to download video:", res.status);
    return;
  }
  
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync('public/hero-raw.mp4', buffer);
  console.log("Saved raw video to public/hero-raw.mp4.");

  console.log("Executing Remotion rendering process...");
  try {
    execSync('npx remotion render remotion/index.ts HeroVideo public/hero-edited.mp4', { stdio: 'inherit' });
    console.log("Remotion rendering complete! Final video at public/hero-edited.mp4");
  } catch (error) {
    console.error("Remotion render failed:", error);
  }
}

run().catch(console.error);
