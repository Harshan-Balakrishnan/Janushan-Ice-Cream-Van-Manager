# Janushan Ice Cream Van Manager

Mobile-first installable PWA for the Janushan Ice Cream van business.

## Features
- Five-member business workspace with owner, operator and viewer roles.
- Tamil, Sinhala and English interface.
- Product catalogue with the original Janushan product photographs.
- Sales with cash, bank/QR, credit or mixed payments; discounts and automatic stock deductions.
- Stock receipts, damage, free items, returns and audited adjustments.
- Expenses, daily cash sessions, weekly blind stock counts and owner reconciliation.
- Audit log and membership-checked server-side database operations.
- Installable PWA with cached application shell and original brand assets.
- Offline access to the last synced catalogue and reports; offline sales are stored in a local queue and synced when connectivity returns. Price or stock conflicts are held for review. Other changes require an internet connection.

## Required brand assets

Upload the supplied original image files into `assets/` with these exact names:
- `logo.webp`
- `menu-banner.webp`
- `cone.webp`
- `strawberry-cup.webp`
- `waffle-boat.webp`
- `special-cup.webp`
- `ice-choc.webp`

The app has a fallback icon if an asset is temporarily missing. Product image paths are validated by the database RPC.

## Supabase Auth configuration

In Supabase Dashboard → Authentication → URL Configuration:
- **Site URL:** `https://harshan-balakrishnan.github.io/Janushan-Ice-Cream-Van-Manager/`
- **Additional Redirect URLs:** `https://harshan-balakrishnan.github.io/Janushan-Ice-Cream-Van-Manager/**`

The application passes the published GitHub Pages base URL to both sign-up confirmation and password recovery. If you use a custom confirmation email template, use Supabase's `{{ .ConfirmationURL }}` link so the requested redirect is honoured; do not hard-code `localhost:3000` or `{{ .SiteURL }}` as the final destination.

## Deploy for free

1. Merge the reviewed production branch into `main`.
2. In repository Settings → Pages, choose **Deploy from a branch**, branch `main`, folder `/(root)`.
3. Wait for the Pages deployment to finish.
4. Open `https://harshan-balakrishnan.github.io/Janushan-Ice-Cream-Van-Manager/` and install it from the browser menu.

## Validation before release

- GitHub Actions runs `npm run check` on pushes and pull requests.
- Test owner signup, confirmation email, password reset, and all five user accounts using real inboxes.
- Test product creation, each photo, stock receipt/adjustment, sales/payment splits, expenses, cash close, weekly count and reconciliation.
- Test airplane mode, queued offline sale, reconnect/sync, duplicate retry and price/stock conflict handling on real phones.
- Review Supabase Security Advisor notices and enable leaked-password protection.

Only the Supabase publishable key is used in the browser. Never commit a service-role or secret key.
