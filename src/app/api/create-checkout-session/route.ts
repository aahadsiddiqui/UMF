import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51QrtV9AO9M57i7sPDP6s98coV0weckJ11KCqEkfxCm9g7sQe0DnP9YRobAJXRak2oH30F7VcQ3GiU75LSbQZeSt700r8vYT8iV', {
  apiVersion: '2023-10-16'
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, type, category } = body;

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: `${category} Donation`,
              description: `${type} donation to United Muslim Fund - ${category}`,
            },
            unit_amount: amount * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: type.toLowerCase() === 'monthly' ? 'subscription' : 'payment',
      success_url: `${req.headers.get('origin')}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/donate?canceled=true`,
      metadata: {
        type,
        category,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    console.error('Error creating checkout session:', err);
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
} 