This is a THUISA project with [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm run dev
pnpm start (for IOS)
node dist/server.js (for Windows)
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses tailwind CSS  for styling and designing the website.

## Set Up Your SMTP by using .env.local

# --- SMTP settings ---
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
# SMTP gmail pass must use app password, cannot use basic password

# --- Mail metadata ---
MAIL_FROM="GlowGrove Support <support@glowgrove.com>"
MAIL_TO="support@glowgrove.com"
