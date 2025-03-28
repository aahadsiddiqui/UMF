import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Debug logging
console.log('Checkout session route starting');
console.log('Environment check:', {
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? 'exists' : 'missing',
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ? 'exists' : 'missing',
  NODE_ENV: process.env.NODE_ENV
});

// Remove edge runtime and force-dynamic
// export const runtime = 'edge';
// export const dynamic = 'force-dynamic';

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY is not configured in environment variables');
}

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  console.error('NEXT_PUBLIC_BASE_URL is not configured in environment variables');
}

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2025-02-24.acacia' })
  : null;

export async function POST(req: Request) {
  console.log('POST request received');
  
  if (!stripe) {
    console.error('Stripe initialization failed');
    return NextResponse.json(
      { error: { message: 'Stripe is not properly configured' } },
      { status: 500 }
    );
  }

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    console.error('Base URL is missing');
    return NextResponse.json(
      { error: { message: 'Base URL is not configured' } },
      { status: 500 }
    );
  }

  try {
    console.log('Parsing request body');
    const body = await req.json();
    console.log('Request body:', { ...body, amount: body.amount ? 'exists' : 'missing' });
    
    const { amount, type, category, quantity, description } = body;
    const isSubscription = type.toLowerCase() === 'monthly';

    // Ensure base URL has https:// protocol
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL.startsWith('http') 
      ? process.env.NEXT_PUBLIC_BASE_URL 
      : `https://${process.env.NEXT_PUBLIC_BASE_URL}`;

    console.log('Creating line items');
    // Create line items based on campaign type and subscription status
    let lineItems;
    if (category === 'Fill Your Backpack') {
      const priceData = {
        currency: 'cad',
        product_data: {
          name: 'Fill Your Backpack Campaign',
          description: description || `Donate backpacks to students in need`,
        },
        unit_amount: 1000, // C$10 per backpack
      };

      if (isSubscription) {
        Object.assign(priceData, {
          recurring: {
            interval: 'month',
          },
        });
      }

      lineItems = [{
        price_data: priceData,
        quantity: quantity || 1,
      }];
    } else {
      const priceData = {
        currency: 'cad',
        product_data: {
          name: category === 'zakaat' ? 'Zakaat Donation' : `${category} Donation`,
          description: `${type} ${category === 'zakaat' ? 'Zakaat' : 'donation'} to United Muslim Fund - ${category}`,
        },
        unit_amount: amount * 100, // Convert to cents
      };

      if (isSubscription) {
        Object.assign(priceData, {
          recurring: {
            interval: 'month',
          },
        });
      }

      lineItems = [{
        price_data: priceData,
        quantity: 1,
      }];
    }

    console.log('Creating Stripe checkout session');
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: isSubscription ? 'subscription' : 'payment',
      success_url: `https://www.unitedmuslimfund.org/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://www.unitedmuslimfund.org/donate?canceled=true`,
      metadata: {
        type,
        category,
        isZakaat: category === 'zakaat' ? 'true' : 'false',
        quantity: quantity ? quantity.toString() : '1',
      },
    });

    console.log('Checkout session created successfully');
    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    console.error('Error creating checkout session:', {
      message: err.message,
      stack: err.stack,
      type: err.type,
      code: err.code
    });
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
} 