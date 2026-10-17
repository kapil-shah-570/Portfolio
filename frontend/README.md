This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Connect the portfolio API

Copy `.env.example` to `.env.local` for local development. Keep `FRONTEND_URL`, `ADMIN_URL`, and `BACKEND_URL` consistent with the matching values in the admin and backend environment files. Set `NEXT_PUBLIC_API_URL` to the backend's browser-accessible URL and `NEXT_PUBLIC_SITE_URL` to this site's public origin. The server-rendered pages also read `API_URL`; leave it pointed at the same API, or set it to a private backend URL reachable from the Next.js server.

For deployment, configure these variables in the frontend hosting provider before building. `NEXT_PUBLIC_API_URL` is included in the client bundle, so it must be a public URL and must not contain credentials. Add the frontend's exact public origin to the backend's `CORS_ORIGINS`.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
