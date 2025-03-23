import { NextResponse } from 'next/server';

// This would be stored in an environment variable in a real application
const CHAPA_SECRET_KEY = 'CHASECK_TEST-HNsJAQmvkbH9qJMXfYMkAKqvnNqwRCeC';
const CHAPA_API_URL = 'https://api.chapa.co/v1/transaction/initialize';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      amount, 
      currency = 'ETB',
      email, 
      first_name, 
      last_name, 
      phone_number,
      tx_ref = `examprep-${Date.now()}`,
      plan_id
    } = body;

    // Convert amount to ETB if in USD
    const etbAmount = currency === 'USD' 
      ? (parseFloat(amount) * 55).toFixed(2) // Assuming 1 USD = 55 ETB
      : amount;

    // In a real application, you would call the Chapa API here
    // For demo purposes, we'll just simulate a successful response
    
    /*
    const response = await fetch(CHAPA_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CHAPA_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: etbAmount,
        currency: 'ETB',
        email,
        first_name,
        last_name,
        phone_number,
        tx_ref,
        callback_url: `${process.env.NEXT_PUBLIC_API_URL}/api/payment/callback`,
        return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
        customization: {
          title: `ExamPrep AI ${plan_id.charAt(0).toUpperCase() + plan_id.slice(1)} Plan`,
          description: `Subscription to ${plan_id} plan`
        }
      })
    });

    const data = await response.json();
    
    if (data.status === 'success') {
      return NextResponse.json({
        success: true,
        checkout_url: data.data.checkout_url,
        tx_ref: data.data.tx_ref
      });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || 'Payment initialization failed' },
        { status: 400 }
      );
    }
    */
    
    // Simulated successful response
    return NextResponse.json({
      success: true,
      checkout_url: 'https://checkout.chapa.co/checkout/payment/sample-checkout-url',
      tx_ref
    });
  } catch (error) {
    console.error('Error initializing payment:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to initialize payment' },
      { status: 500 }
    );
  }
}
