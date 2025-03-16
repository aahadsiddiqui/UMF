import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51QrtV9AO9M57i7sPDP6s98coV0weckJ11KCqEkfxCm9g7sQe0DnP9YRobAJXRak2oH30F7VcQ3GiU75LSbQZeSt700r8vYT8iV', {
  apiVersion: '2023-10-16'
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: { message: 'Session ID is required' } },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return NextResponse.json(session);
  } catch (err: any) {
    console.error('Error retrieving checkout session:', err);
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
} 