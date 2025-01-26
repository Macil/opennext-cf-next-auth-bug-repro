This repo is a reproduction of the bug [opennextjs-cloudflare/issues/206](https://github.com/opennextjs/opennextjs-cloudflare/issues/206), caused by using the [OpenNext](https://opennext.js.org/) Cloudflare adapter with [Next-auth (auth.js)](https://authjs.dev/).

This project is the result of following the [OpenNext Cloudflare Getting Started guide](https://opennext.js.org/cloudflare/get-started) (`npm create cloudflare@latest -- my-next-app --framework=next --experimental`) followed by the [Auth.js Getting Started guide](https://authjs.dev/getting-started) for Next.js and Google sign-in.

Instructions:

1. `npm i`
2. `npm run preview`
3. Open http://localhost:8787
4. Click the "Sign in with Google" button.
5. In the terminal running `npm run preview`, observe an error like the following:

```
✘ [ERROR] [auth][error] Error: [unenv] crypto.createCipheriv is not implemented yet!

      at createNotImplementedError
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/node_modules/unenv/runtime/_internal/utils.mjs:22:10)
      at fn
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/node_modules/unenv/runtime/_internal/utils.mjs:26:11)
      at null.<anonymous>
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/.open-next/.next/standalone/.next/server/app/page.js:12:47787)
      at eZ
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/.open-next/.next/standalone/.next/server/app/page.js:12:47910)
      at wo.encrypt
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/.open-next/.next/standalone/.next/server/app/page.js:12:62345)
      at async Ra.encrypt
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/.open-next/.next/standalone/.next/server/app/page.js:12:63081)
      at async tZ
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/.open-next/.next/standalone/.next/server/app/page.js:12:76291)
      at async i9
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/.open-next/.next/standalone/.next/server/app/page.js:379:26345)
      at async Object.create
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/.open-next/.next/standalone/.next/server/app/page.js:379:27242)
      at async oA
  (file:///home/macil/Coding/opennext-cf-next-auth-bug-repro/.open-next/.next/standalone/.next/server/app/page.js:379:47897)
```

---

If this bug gets fixed, then using this demo will fail next because the environment variables `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` are not set. This demo should be correctly configured if you register a Google OAuth client with the correct authorized origins (`http://localhost:3000` and `http://localhost:8787`) and authorized redirect URIs (`http://localhost:3000/api/auth/callback/google` and `http://localhost:8787/api/auth/callback/google`) and then set the `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` environment variables inside `.env.local`. Note that this demo page won't display anything differently after you successfully sign in.

---

Original readme template:

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
