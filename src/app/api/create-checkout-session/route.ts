import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Debug logging
console.log('Checkout session route starting');
console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
console.log('Environment variables:', {
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  NODE_ENV: process.env.NODE_ENV
});

export const dynamic = 'force-dynamic';

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
  if (!stripe) {
    return NextResponse.json(
      { error: { message: 'Stripe is not properly configured' } },
      { status: 500 }
    );
  }

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return NextResponse.json(
      { error: { message: 'Base URL is not configured' } },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { amount, type, category, quantity, description } = body;
    const isSubscription = type.toLowerCase() === 'monthly';

    // Create line items based on campaign type and subscription status
    let lineItems;
    if (category === 'Fill Your Backpack') {
      // For Fill Your Backpack campaign
      const priceData = {
        currency: 'cad',
        product_data: {
          name: 'Fill Your Backpack Campaign',
          description: description || `Donate backpacks to students in need`,
        },
        unit_amount: 1000, // C$10 per backpack
      };

      if (isSubscription) {
        // For monthly subscription, add recurring price
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
      // For other donations
      const priceData = {
        currency: 'cad',
        product_data: {
          name: category === 'zakaat' ? 'Zakaat Donation' : `${category} Donation`,
          description: `${type} ${category === 'zakaat' ? 'Zakaat' : 'donation'} to United Muslim Fund - ${category}`,
        },
        unit_amount: amount * 100, // Convert to cents
      };

      if (isSubscription) {
        // For monthly subscription, add recurring price
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

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: isSubscription ? 'subscription' : 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate?canceled=true`,
      metadata: {
        type,
        category,
        isZakaat: category === 'zakaat' ? 'true' : 'false',
        quantity: quantity ? quantity.toString() : '1',
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