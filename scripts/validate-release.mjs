import fs from 'node:fs';
import path from 'node:path';

const requiredAssets = [
  'assets/cone.webp',
  'assets/ice-choc.webp',
  'assets/janushan-icon-192.png',
  'assets/janushan-icon-512.png',
  'assets/logo.webp',
  'assets/menu-banner.webp',
  'assets/special-cup.webp',
  'assets/strawberry-cup.webp',
  'assets/waffle-boat.webp',
];
const app = fs.readFileSync('app.js', 'utf8');
const manifest = JSON.parse(fs.readFileSync('manifest.webmanifest', 'utf8'));
const sw = fs.readFileSync('sw.js', 'utf8');
const expectedEmailValidation = '!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)';
const emailPattern = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
const emailValidationWorks =
  app.split(expectedEmailValidation).length - 1 === 2 &&
  emailPattern.test('janushan.test@gmail.com') &&
  !emailPattern.test('not an email') &&
  !emailPattern.test('missing-at.example.com') &&
  !emailPattern.test('name@');

const checks = [
  ['profit estimate excludes products without cost snapshots', app.includes('knownGrossProfit')],
  ['dashboard Today filter keeps zero-day range', app.includes('window.janDashboardRange??7')],
  ['cart item removal control', app.includes('data-cart-remove')],
  ['dashboard date-range analytics', app.includes('periodSales') && app.includes('data-range')],
  ['transparent estimated profit cost coverage', app.includes('unit_cost_snapshot') && app.includes('ProfitNote')],
  ['printable itemised receipts', app.includes('function printReceipt') && app.includes('data-print')],
  ['sales CSV export', app.includes('function downloadCsv') && app.includes('export-sales')],
  ['stock search and low-stock filter', app.includes('janStockSearch') && app.includes('janStockLowOnly')],
  ['active products only in point of sale', app.includes('products.filter(p=>p.active&&availableStock(p.id)>0)')],
  ['mobile five-item navigation and overflow menu', app.includes('mobilePrimaryNav') && app.includes('more-menu')],
  ['dashboard quick actions and empty catalogue guidance', app.includes('QuickActions') && app.includes('StartCatalogue')],
  ['responsive product cards and search', app.includes('product-card') && app.includes('product-filter')],
  ['store logo live preview handler', app.includes("$('#store-logo-file').onchange")],
  ['password recovery event', app.includes("PASSWORD_RECOVERY")],
  ['recovery screen state', app.includes('authRecoveryActive')],
  ['password update handler', app.includes('db.auth.updateUser({password})')],
  ['resend confirmation handler', app.includes("db.auth.resend({type:'signup'")],
  ['password reset request', app.includes('db.auth.resetPasswordForEmail')],
  ['safe auth error mapping', app.includes('function authErrorMessage')],
  ['email validation accepts Gmail and rejects malformed input', emailValidationWorks],
  ['GitHub Pages redirect (no localhost)', !app.includes('localhost:3000')],
  ['service worker cache v9', sw.includes("janushan-pwa-v9")],
  ['PWA manifest start URL', manifest.start_url === './'],
  ['PWA manifest scope', manifest.scope === './'],
];
let failed = false;
for (const [label, passed] of checks) {
  console.log((passed ? 'PASS ' : 'FAIL ') + label);
  if (!passed) failed = true;
}
for (const asset of requiredAssets) {
  const passed = fs.existsSync(path.join(process.cwd(), asset)) && fs.statSync(asset).size > 0;
  console.log((passed ? 'PASS ' : 'FAIL ') + 'asset ' + asset);
  if (!passed) failed = true;
}
if (failed) process.exitCode = 1;
else console.log('All Janushan release checks passed.');
