# Janushan Ice Cream Van Manager

Production-focused mobile-first PWA for Janushan Ice Cream.

- Tamil, Sinhala and English interface.
- Original supplied Janushan logo, product photos and promotional banner.
- Supabase authentication, email verification redirect, password recovery and five-member workspace.
- Product catalogue, stock ledger, sales, expenses, cash reconciliation and weekly physical counts.
- Server-side stock balances avoid client row-limit under-counting.
- Owner stock-count review creates auditable adjustment movements.
- Cache-busted PWA shell and original image caching.

## Publish
GitHub Pages → Deploy from branch → main → /(root).

Published URL: https://harshan-balakrishnan.github.io/Janushan-Ice-Cream-Van-Manager/

## Required Supabase dashboard configuration
Authentication → URL Configuration:
- Site URL: https://harshan-balakrishnan.github.io/Janushan-Ice-Cream-Van-Manager/
- Add Redirect URL: https://harshan-balakrishnan.github.io/Janushan-Ice-Cream-Van-Manager/**

Authentication → Email Templates → Confirm signup: retain the Supabase confirmation link using `{{ .ConfirmationURL }}`. The app now passes the published Pages URL as `emailRedirectTo`. A dashboard allow-list change is still required; a repository commit cannot edit that dashboard setting.

## Operations
- Offline transactions are intentionally not queued, to avoid duplicate sales and incorrect stock. Offline state is clearly reported.
- Staff must register before the owner adds them.
- Maximum five members including owner.
- Browser contains only the Supabase publishable key. Never add service-role keys.
- Test email verification with a real inbox and the published domain after setting the allow-list.
