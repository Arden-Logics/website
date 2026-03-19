This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Google Tag Manager (GTM)

GTM is wired into the global app layout and loads on every page with container ID `GTM-NCTX6BLQ`.

If you need to override the container ID per environment, set:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Restart the dev server after changing environment variables.

## Google Analytics (GA4)

GA4 `gtag.js` is also wired into the global app layout and loads once per page with measurement ID `G-Y1DQKZ9LX5`.

If you need to override the measurement ID per environment, set:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Restart the dev server after changing environment variables.

Use `trackGTMEvent` from client components to send custom events without directly touching `window.dataLayer`:

```tsx
import { trackGTMEvent } from '@/lib/gtm'

trackGTMEvent({
  event: 'cta_click',
  cta_name: 'book_meeting',
})
```

Avoid sending personal data (names, emails, phone numbers) in GTM events.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
