import { NextResponse } from 'next/server';

// This would be stored in an environment variable in a real application
const CHAPA_SECRET_KEY = 'CHASECK_TEST-HNsJAQmvkbH9qJMXfYMkAKqvnNqwRCeC';
const CHAPA_API_URL = 'https://api.chapa.co/v1/transaction/verify';

export async function GET(
  request: Request,
  { params }: { params: { tx_ref: string } }
) {
  try {
    const tx_ref = params.tx_ref;
    
    if (!tx_ref) {
      return NextResponse.json(
        { success: false, message: 'Transaction reference is required' },
        { status: 400 }
      );
    }
    
    // In a real application, you would verify the transaction with Chapa
    
    /*
    const response = await fetch(`${CHAPA_API_URL}/${tx_ref}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${CHAPA_SECRET_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    
    if (data.status === 'success') {
      // Transaction is verified, return the verification data
      return NextResponse.json({
        success: true,
        data: data.data
      });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || 'Verification failed' },
        { status: 400 }
      );
    }
    */
    
    // For demo purposes, we'll just return a simulated successful verification
    return NextResponse.json({
      success: true,
      data: {
        tx_ref,
        status: 'success',
        amount: '14.99',
        currency: 'ETB',
        payment_method: 'telebirr'
      }
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
