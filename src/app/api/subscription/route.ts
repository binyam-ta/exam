import { NextResponse } from 'next/server';

// This would be stored in an environment variable in a real application
const CHAPA_SECRET_KEY = 'CHASECK_TEST-HNsJAQmvkbH9qJMXfYMkAKqvnNqwRCeC';
const CHAPA_API_URL = 'https://api.chapa.co/v1/transaction/initialize';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planId, userId, email, firstName, lastName, phoneNumber } = body;
    
    // Determine the amount based on the plan
    let amount = '0.00';
    let currency = 'ETB';
    
    switch (planId) {
      case 'premium':
        amount = '825.00'; // 14.99 USD in ETB (approx)
        break;
      case 'ultimate':
        amount = '1650.00'; // 29.99 USD in ETB (approx)
        break;
      default:
        amount = '0.00';
    }
    
    // In a real application, you would:
    // 1. Validate the request
    // 2. Create a Chapa transaction
    // 3. Return the checkout URL
    
    /*
    const response = await fetch(CHAPA_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CHAPA_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        currency,
        email,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        tx_ref: `subscription-${userId}-${Date.now()}`,
        callback_url: `${process.env.NEXT_PUBLIC_API_URL}/api/payment/callback`,
        return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/subscription?status=success`,
        customization: {
          title: `ExamPrep AI ${planId.charAt(0).toUpperCase() + planId.slice(1)} Plan`,
          description: `Subscription to ${planId} plan`
        }
      })
    });
    
    const data = await response.json();
    
    if (data.status === 'success') {
      return NextResponse.json({ 
        success: true, 
        message: `Subscription to ${planId} plan initiated successfully`,
        checkoutUrl: data.data.checkout_url,
        txRef: data.data.tx_ref
      });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || 'Failed to create subscription' },
        { status: 400 }
      );
    }
    */
    
    // For demo purposes, we'll just return a simulated successful response
    return NextResponse.json({ 
      success: true, 
      message: `Subscription to ${planId} plan initiated successfully`,
      checkoutUrl: 'https://checkout.chapa.co/checkout/payment/sample-checkout-url',
      txRef: `subscription-${userId}-${Date.now()}`
    });
  } catch (error) {
    console.error('Error creating subscription:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create subscription' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    // In a real application, you would:
    // 1. Validate the request
    // 2. Fetch the user's subscription from your database
    // 3. Return the subscription details
    
    // For demo purposes, we'll just return mock data
    return NextResponse.json({
      success: true,
      subscription: {
        planId: 'basic',
        status: 'active',
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        cancelAtPeriodEnd: false
      }
    });
  } catch (error) {
    console.error('Error fetching subscription:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch subscription' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { planId, userId } = body;
    
    // In a real application, you would:
    // 1. Validate the request
    // 2. Update the user's subscription in your database
    // 3. If upgrading/downgrading, create a new Chapa transaction
    
    // For demo purposes, we'll just return a success response
    return NextResponse.json({ 
      success: true, 
      message: `Subscription updated to ${planId} plan successfully` 
    });
  } catch (error) {
    console.error('Error updating subscription:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update subscription' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    // In a real application, you would:
    // 1. Validate the request
    // 2. Cancel the user's subscription in your database
    
    // For demo purposes, we'll just return a success response
    return NextResponse.json({ 
      success: true, 
      message: 'Subscription cancelled successfully' 
    });
  } catch (error) {
    console.error('Error cancelling subscription:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to cancel subscription' },
      { status: 500 }
    );
  }
}
