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
    console.log('Stripe initialized successfully');
  } else {
    console.error('STRIPE_SECRET_KEY is not configured in environment variables');
  }
} catch (error) {
  console.error('Error initializing Stripe:', error);
}

// Client-side Stripe promise
const initializeStripePromise = () => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    console.error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not configured');
    return null;
  }
  try {
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  } catch (error) {
    console.error('Error loading Stripe:', error);
    return null;
  }
};

export const stripePromise = initializeStripePromise();
export default stripe; 