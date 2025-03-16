# United Muslim Fund Website

A Next.js website for United Muslim Fund, featuring donation processing with Stripe, interactive global impact map, and various campaign pages.

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/united-muslim-fund.git
cd united-muslim-fund
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Replace the placeholder values with your actual Stripe API keys
   - You can get your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys)

```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `NEXT_PUBLIC_BASE_URL`: The base URL of your application

## Features

- Interactive global impact map
- Secure donation processing with Stripe
- Mobile-responsive design
- Dynamic campaign pages
- Event management
- Contact forms
- Impact reporting

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## Security

Never commit your `.env.local` or any other files containing sensitive information to the repository. These files are listed in `.gitignore` for a reason. 