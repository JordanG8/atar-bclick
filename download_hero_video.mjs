import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = "FPSX9034c21add4a5bb265a8be971e914195";

async function run() {
  console.log("Searching Freepik for 'barbershop' videos...");
  
  const searchUrl = "https://api.freepik.com/v1/resources?term=barbershop&filters[content_type][]=video";
  const searchRes = await fetch(searchUrl, {
    headers: {
      "Accept-Language": "en-US",
      "Accept": "application/json",
      "x-freepik-api-key": API_KEY
    }
  });

  if (!searchRes.ok) {
    console.error("Search failed:", searchRes.status, await searchRes.text());
    return;
  }

  const searchData = await searchRes.json();
  const videos = searchData.data;

  if (!videos || videos.length === 0) {
    console.error("No videos found.");
    return;
  }

  const firstVideo = videos[0];
  console.log(`Video metadata:`, JSON.stringify(firstVideo, null, 2));

  let videoId = firstVideo.id;
  // Make sure it's an integer if the API demands it
  videoId = parseInt(videoId, 10) || videoId;

  console.log(`Found video ID: ${videoId}. Initiating download...`);

  const downloadRes = await fetch(`https://api.freepik.com/v1/resources/${videoId}/download`, {
    headers: {
      "Accept": "application/json",
      "x-freepik-api-key": API_KEY
    }
  });

  if (!downloadRes.ok) {
    console.error("Download URL fetch failed:", downloadRes.status, await downloadRes.text());
    return;
  }

  const downloadData = await downloadRes.json();
  const videoUrl = downloadData.data?.url || downloadData.url;

  if (!videoUrl) {
    console.error("No download URL returned:", downloadData);
    return;
  }

  console.log("Downloading video file from:", videoUrl);
  const videoBlobRes = await fetch(videoUrl);
  if (!videoBlobRes.ok) {
    console.error("Failed to fetch binary video data:", videoBlobRes.status);
    return;
  }

  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const buffer = Buffer.from(await videoBlobRes.arrayBuffer());
  const outputPath = path.join(publicDir, 'hero-raw.mp4');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Video successfully saved to ${outputPath}`);
}

run().catch(console.error);
