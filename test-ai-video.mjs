import fs from 'fs';
import path from 'path';

const API_KEY = "FPSX9034c21add4a5bb265a8be971e914195";

async function checkEndpoint(url) {
  const imageUrl = "https://images.unsplash.com/photo-1585747860111-b0e2d3bb073f?q=80&w=1080&auto=format&fit=crop";
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-freepik-api-key': API_KEY,
    },
    body: JSON.stringify({
      image_url: imageUrl,
      prompt: "Cinematic establishing shot of a luxury barbershop",
      webhook_url: "https://atar-bclick.vercel.app/api/webhook/freepik"
    })
  });

  return { url, status: response.status, body: await response.text() };
}

async function runTest() {
  const results = [];
  results.push(await checkEndpoint("https://api.freepik.com/v1/ai/image-to-video/kling-v2"));
  results.push(await checkEndpoint("https://api.freepik.com/v1/ai/image-to-video/kling"));
  results.push(await checkEndpoint("https://api.freepik.com/v1/ai/image-to-video/pixverse-v5"));
  
  fs.writeFileSync('endpoints_results.json', JSON.stringify(results, null, 2));
}

runTest().catch(console.error);
