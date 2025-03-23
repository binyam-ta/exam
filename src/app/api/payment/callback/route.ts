import { NextResponse } from 'next/server';

// This would be stored in an environment variable in a real application
const CHAPA_SECRET_KEY = 'CHASECK_TEST-HNsJAQmvkbH9qJMXfYMkAKqvnNqwRCeC';
const CHAPA_API_URL = 'https://api.chapa.co/v1/transaction/verify';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tx_ref, status } = body;
    
    // Log the callback data
    console.log('Payment callback received:', { tx_ref, status });
    
    // In a real application, you would verify the transaction with Chapa
    // and update your database accordingly
    
    /*
    if (status === 'success' && tx_ref) {
      // Verify the transaction with Chapa
      const verifyResponse = await fetch(`${CHAPA_API_URL}/${tx_ref}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${CHAPA_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      
      const verifyData = await verifyResponse.json();
      
      if (verifyData.status === 'success') {
        // Transaction is verified, update user's subscription in your database
        // ...
        
        return NextResponse.json({ success: true });
      }
    }
    */
    
    // For demo purposes, we'll just return a success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing payment callback:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process payment callback' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  // This endpoint can be used for return_url from Chapa
  const { searchParams } = new URL(request.url);
  const tx_ref = searchParams.get('tx_ref');
  const status = searchParams.get('status');
  
  // Log the return data
  console.log('Payment return received:', { tx_ref, status });
  
  // In a real application, you would verify the transaction with Chapa
  // and redirect the user accordingly
  
  // For demo purposes, we'll just redirect to the dashboard
  return NextResponse.redirect(new URL('/dashboard', request.url));
}
