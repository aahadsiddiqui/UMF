declare module '@stripe/stripe-js' {
  export function loadStripe(key: string): Promise<any>;
} 