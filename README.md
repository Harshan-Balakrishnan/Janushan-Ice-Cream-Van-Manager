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


## Release 2026.11.14.2 — authentication and email delivery

- Existing accounts should sign in; do not repeatedly register the same email address.
- Use **Forgot password** to request a password recovery link. The app now keeps the recovery screen separate from normal business setup and validates that a recovery session exists before changing the password.
- An unconfirmed account can request another confirmation email from the sign-in screen. Wait at least 60 seconds between email requests.
- Authentication errors are translated into clearer guidance in Tamil, Sinhala and English.
- The service-worker cache has been incremented so installed PWAs fetch the new release assets.

### Required production email configuration

Supabase's built-in email sender is intended for limited testing and is not a reliable production mail service. Configure a dedicated SMTP provider before inviting customers or staff:

1. Open Supabase Dashboard → Authentication → SMTP Settings.
2. Enable **Custom SMTP**.
3. Enter the SMTP host, port, username, password, sender name and sender email supplied by your email provider.
4. Use the provider's verified sender/domain and complete its DNS authentication (SPF/DKIM, and DMARC where supported).
5. Save the settings, then use Authentication → Email Templates to review the confirmation and password-recovery messages.
6. In Authentication → URL Configuration, keep the Site URL and redirect allow-list set to the published GitHub Pages URL shown above.
7. Test one confirmation and one password-reset message to a real inbox. Check the provider's delivery/bounce logs as well as Supabase Auth logs.

Do not put SMTP credentials, service-role keys or secret keys in this public repository or in browser JavaScript. SMTP credentials belong only in Supabase's dashboard.

### Release checks

Run `npm test` to validate JavaScript syntax, required authentication handlers, the manifest and the nine committed brand assets.

## Release 2026.11.14.3 — premium PWA update delivery

- Versioned app-shell cache so published JavaScript and CSS refresh instead of being pinned to an old cache-first response.
- Network-first app-shell delivery with cached fallback for offline launches.
- New service workers wait until a user approves the update, avoiding an automatic mid-form refresh.
- Installed clients check for updates on launch and when returning to the foreground. When an update is ready, the app displays an update banner; applying it reloads the app into the new version.
- Added a restrained motion system and reduced-motion support.
- Updated the install manifest to use dedicated 192px and 512px PNG icons.

**Update behaviour:** a PWA cannot silently force an update while fully closed or offline. Browsers check and install the new service worker when the installed app next opens or becomes active online. The app then asks before reloading so unfinished form input is not discarded.
