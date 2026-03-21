import fs from 'fs';
import { execSync } from 'child_process';

const API_KEY = "FPSX9034c21add4a5bb265a8be971e914195";
const TASK_ID = "c8309327-73cb-4ab1-a344-7e52650bb316";

async function run() {
  console.log(`[Auto-Deploy] Polling Freepik AI Queue for task ${TASK_ID}...`);
  let videoUrl = null;

  while (true) {
    const statusRes = await fetch(`https://api.freepik.com/v1/ai/image-to-video/kling-v2/${TASK_ID}`, {
      headers: {
        'Accept': 'application/json',
        'x-freepik-api-key': API_KEY,
      }
    });

    if (!statusRes.ok) {
       // fallback check
       const fallbackRes = await fetch(`https://api.freepik.com/v1/ai/tasks/${TASK_ID}`, {
          headers: { 'Accept': 'application/json', 'x-freepik-api-key': API_KEY }
       });
       if (fallbackRes.ok) {
          const fallbackData = await fallbackRes.json();
          const s = fallbackData.data?.status || fallbackData.status;
          console.log(`[Auto-Deploy] Task status: ${s}`);
          if (s === 'completed' || s === 'FINISHED') {
             videoUrl = fallbackData.data?.url || fallbackData.url;
             break;
          } else if (s === 'failed' || s === 'FAILED' || s === 'error') {
             console.error("Task failed according to fallback polling API.");
             process.exit(1);
          }
       }
       await new Promise(r => setTimeout(r, 15000));
       continue;
    }

    const statusData = await statusRes.json();
    const status = statusData.data?.status || statusData.status;
    console.log(`[Auto-Deploy] Task status: ${status}`);
    
    if (status === 'completed' || status === 'FINISHED') {
      videoUrl = statusData.data?.url || statusData.url;
      console.log(`[Auto-Deploy] 🎉 Video generated! URL: ${videoUrl}`);
      break;
    } else if (status === 'failed' || status === 'FAILED' || status === 'error') {
      console.error("[Auto-Deploy] Task failed locally.");
      process.exit(1);
    }
    
    await new Promise(r => setTimeout(r, 15000)); // Poll every 15 seconds
  }

  if (!videoUrl) return;

  console.log("[Auto-Deploy] Downloading Kling video to public/hero-raw.mp4...");
  const res = await fetch(videoUrl);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync('public/hero-raw.mp4', buffer);

  console.log("[Auto-Deploy] Injecting cinematic overlay via Remotion Engine...");
  try {
    execSync('npx remotion render remotion/index.ts HeroVideo public/hero-edited.mp4', { stdio: 'inherit' });
  } catch (error) {
    console.error("[Auto-Deploy] Remotion render failed:", error);
    process.exit(1);
  }

  console.log("[Auto-Deploy] Committing Haircut Video and Publishing to Vercel Cloud...");
  try {
    execSync('git add public/hero-raw.mp4 public/hero-edited.mp4 && git commit -m "feat(video): update AI haircut sequence" && git push', { stdio: 'inherit' });
    execSync(`npx vercel --prod --token ${process.env.VERCEL_TOKEN} --yes`, { stdio: 'inherit' });
    console.log("[Auto-Deploy] 🚀 SUCCESS! The new haircut video is live on Vercel.");
  } catch (error) {
    console.error("[Auto-Deploy] Deployment failed:", error);
  }
}

run().catch(console.error);
