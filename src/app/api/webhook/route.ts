import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const headersList = headers();
    
    // In a real application, you would:
    // 1. Verify the webhook signature using Chapa's verification mechanism
    // 2. Process the event based on its type
    // 3. Update your database accordingly
    
    // Parse the webhook payload
    const webhookData = JSON.parse(body);
    console.log('Received Chapa webhook:', webhookData);
    
    // Extract relevant information
    const { event, data } = webhookData;
    
    // Handle different event types
    if (event === 'charge.success') {
      // Payment was successful
      const { tx_ref, amount, currency } = data;
      
      // Update user's subscription in your database
      // ...
      
      console.log(`Payment successful for tx_ref: ${tx_ref}, amount: ${amount} ${currency}`);
    } else if (event === 'charge.failed') {
      // Payment failed
      const { tx_ref, reason } = data;
      
      console.log(`Payment failed for tx_ref: ${tx_ref}, reason: ${reason}`);
    }
    
    // Return a success response to acknowledge receipt of the webhook
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { success: false, message: 'Webhook processing failed' },
      { status: 400 }
    );
  }
}
