import { NextResponse } from 'next/server';
import crypto from 'crypto';

const WEBHOOK_SECRET = '5a9fd57fbf825f454f5d1b92424ab180';

export async function POST(req: Request) {
  try {
    const signature = req.headers.get('x-freepik-signature');
    const rawBody = await req.text();
    
    // Attempt HMAC Verification (assuming SHA256)
    if (signature) {
      const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
      const computedSignature = hmac.update(rawBody).digest('hex');
      
      if (computedSignature !== signature) {
        console.warn('Webhook signature mismatch (if HMAC-SHA256 is the standard used)!');
      } else {
        console.log('Webhook signature verified Successfully.');
      }
    }

    const body = JSON.parse(rawBody);
    console.log('[Freepik Webhook] Received task update:', body.task_id || body.id, 'Status:', body.status);

    if (body.data && body.data.url) {
      console.log('[Freepik Webhook] IMPORTANT: Video generated successfully:', body.data.url);
    }

    return NextResponse.json({ received: true, status: 'success' });
  } catch (error: any) {
    console.error('[Freepik Webhook] Error processing payload:', error.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
