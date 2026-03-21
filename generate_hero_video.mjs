import fs from 'fs';

const API_KEY = "FPSX9034c21add4a5bb265a8be971e914195";

async function run() {
  console.log("Reading local generated image for Kling 2.0...");
  const imagePath = "C:\\Users\\yospe\\.gemini\\antigravity\\brain\\0a826911-2d9c-4629-a2f1-2afcf9a061ad\\haircut_reference_1774133399047.png";
  const imgBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imgBuffer.toString('base64')}`;

  console.log("Submitting Image-to-Video task to Freepik Kling-v2 endpoint...");
  
  const response = await fetch("https://api.freepik.com/v1/ai/image-to-video/kling-v2", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-freepik-api-key': API_KEY,
    },
    body: JSON.stringify({
      image: base64Image,
      prompt: "Cinematic close up of a professional barber giving a sharp fade haircut to a male client in a premium barbershop, snips of hair falling, cinematic lighting, 4k high definition, real dynamic motion",
      duration: "5",
      webhook_url: "https://atar-bclick.vercel.app/api/webhook/freepik"
    })
  });

  const data = await response.json();
  
  if (!response.ok) {
    console.error("Task submission failed:", response.status, JSON.stringify(data, null, 2));
    return;
  }

  console.log("Video generation task submitted successfully!");
  console.log(JSON.stringify(data, null, 2));
  
  const taskId = data.data?.id || data.task_id || data.id || (data.data && data.data.task_id);
  if (!taskId) return;

  console.log(`\nWaiting for task ${taskId} to complete... (Polling)`);
  
  while (true) {
    await new Promise(r => setTimeout(r, 10000));
    
    let statusRes = await fetch(`https://api.freepik.com/v1/ai/image-to-video/kling-v2/${taskId}`, {
      headers: {
        'Accept': 'application/json',
        'x-freepik-api-key': API_KEY,
      }
    });

    if (statusRes.status === 404) {
      statusRes = await fetch(`https://api.freepik.com/v1/ai/tasks/${taskId}`, {
        headers: {
          'Accept': 'application/json',
          'x-freepik-api-key': API_KEY,
        }
      });
    }

    if (!statusRes.ok) {
      console.error("Status check failed:", statusRes.status, await statusRes.text());
      continue;
    }

    const statusData = await statusRes.json();
    const status = statusData.data?.status || statusData.status;
    
    console.log(`Task status: ${status}`);
    
    if (status === 'completed' || status === 'FINISHED' || status === 'COMPLETED') {
      const videoUrl = statusData.data?.url || statusData.url;
      console.log(`\n🎉 Webhook should have fired! Generated Video URL: ${videoUrl}`);
      break;
    } else if (status === 'failed' || status === 'FAILED' || status === 'error') {
      console.log(`Task failed!`, JSON.stringify(statusData, null, 2));
      break;
    }
  }
}

run().catch(console.error);
