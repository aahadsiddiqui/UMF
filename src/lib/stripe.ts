import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

// Debug logging
console.log('Stripe initialization starting');
console.log('Environment check:', {
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? 'exists' : 'missing',
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? 'exists' : 'missing',
  NODE_ENV: process.env.NODE_ENV
});

// Server-side Stripe instance
let stripe: Stripe | null = null;

try {
  if (process.env.STRIPE_SECRET_KEY) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-02-24.acacia'
    });
  } else {
    console.error('STRIPE_SECRET_KEY is not configured in environment variables');
  }
} catch (error) {
  console.error('Error initializing Stripe:', error);
}

// Client-side Stripe promise
export const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY 
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

export default stripe; 