import { NextResponse } from 'next/server';
import { z } from 'zod';
// import { createUser } from '@/lib/db.ts';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  paymentMethod: z.enum(['telebirr', 'cbe', 'amole']),
});

export async function POST(request: Request) {
  const body = await request.json();

  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
  }

  const { email, password, firstName, lastName, paymentMethod } = parsed.data;

  // Create user in the database
  const user = await createUser({ email, password, firstName, lastName });

  // Payment integration
  const paymentResponse = await fetch('https://api.chapa.co/v1/transaction/initialize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer CHAPUBK_TEST-IudGQvC701Ypad4dognb03Ixr0LPJijp',
    },
    body: JSON.stringify({
      amount: '825', // Example amount for premium plan
      currency: 'ETB',
      email,
      first_name: firstName,
      last_name: lastName,
      payment_method: paymentMethod,
    }),
  });

  const paymentResult = await paymentResponse.json();

  if (!paymentResult.success) {
    return NextResponse.json({ error: paymentResult.message }, { status: 400 });
  }

  return NextResponse.json({ user, paymentUrl: paymentResult.checkout_url }, { status: 201 });
}
function createUser(arg0: { email: string; password: string; firstName: string; lastName: string; }) {
  throw new Error('Function not implemented.');
}

