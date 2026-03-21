import fs from 'fs';
import path from 'path';

const API_KEY = "FPSX9034c21add4a5bb265a8be971e914195";
const TASK_ID = "4bea7def-7a8c-4ee0-aba7-726b7653d7a1";

async function run() {
  console.log(`Polling task ${TASK_ID}...`);
  
  // Try the most likely endpoints to get task status
  const endpoints = [
    `https://api.freepik.com/v1/ai/tasks/${TASK_ID}`,
    `https://api.freepik.com/v1/ai/image-to-video/tasks/${TASK_ID}`,
    `https://api.freepik.com/v1/ai/image-to-video/kling-v2/${TASK_ID}`
  ];

  for (let i = 0; i < 20; i++) {
    for (const ep of endpoints) {
      const res = await fetch(ep, {
        headers: {
          'Accept': 'application/json',
          'x-freepik-api-key': API_KEY,
        }
      });
      
      if (res.ok) {
        const data = await res.json();
        const status = data.data?.status || data.status;
        console.log(`[${ep}] Status: ${status}`);
        
        if (status === 'completed' || status === 'FINISHED' || status === 'COMPLETED') {
           console.log("SUCCESS!", JSON.stringify(data, null, 2));
           return;
        } else if (status === 'failed' || status === 'FAILED' || status === 'error') {
           console.log("FAILED!", JSON.stringify(data, null, 2));
           return;
        }
        
        // Don't spam other endpoints if one works
        break;
      }
    }
    
    await new Promise(r => setTimeout(r, 10000));
  }
}

run().catch(console.error);
