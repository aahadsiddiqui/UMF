import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_51QrtV9AO9M57i7sPlR0AtZLisAwbXk0UqCHMl8UT0QbjIJkTxGYoBQBnFKWEEmV6rMRZUKj0khbwBxDyZo3BeoJi00Y3lC1Pzf'); 