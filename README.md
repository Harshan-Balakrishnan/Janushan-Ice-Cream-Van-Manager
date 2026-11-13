# Janushan Ice Cream Van Manager

Mobile-first PWA for the Janushan Ice Cream van business.

## Features
- Supabase email/password authentication and five-member workspace.
- English/Sinhala UI toggle.
- Product catalogue, opening stock, low-stock alerts.
- Stock receipts, damage, free items, returns and adjustments.
- Sales with cash, bank/QR, credit or mixed payments; discounts and automatic stock deductions.
- Daily expenses, cash opening/closing and cash variance.
- Weekly physical stock count and owner review.
- Audit log and protected server-side database operations.
- Installable cached app shell.

## Deploy
1. Enable Email/Password in Supabase Auth.
2. Add your GitHub Pages URL to Supabase Auth URL Configuration (Site URL and Redirect URLs).
3. In GitHub Settings → Pages, select GitHub Actions.
4. The Pages workflow deploys on pushes to main.
5. Open the deployed URL, sign up as owner, create the business, and invite staff from Team.

## Security
Only a Supabase publishable key is in the browser. Never commit service-role keys. RLS protects rows. Operational writes use membership-checked RPCs. Financial and stock ledgers should be corrected by adding entries, not editing history.

## Limitations
Offline mode caches the application shell only. Database operations require internet; no offline sale queue is enabled because it can cause duplicate transactions or stock divergence. Printable receipts, push notifications, export/backup and advanced profit reports remain planned.
