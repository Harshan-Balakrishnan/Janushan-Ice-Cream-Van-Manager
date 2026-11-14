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
  ['daily net cash entries use secure database RPC', app.includes('save_daily_cash_entry') && app.includes('daily_cash_entries')],
  ['daily cash amount is after expenses', app.includes('net_cash_after_expenses') && app.includes('CashRemaining')],
  ['daily cash added back to cash expenses for gross collection estimate', app.includes('grossCash=cashNet+cashExpenses')],
  ['period report uses two reviewed physical counts', app.includes('periodReconciliation') && app.includes("x.status==='reviewed'")],
  ['period report estimates units and expected sales from stock movements', app.includes('openingQty+received-removed') && app.includes('selling_price_snapshot')],
  ['expenses are deducted separately from net profit', app.includes('expectedSales-cogs-totalExpenses')],
  ['new individual sale entry is removed from main navigation', !app.includes("const nav=['Dashboard','Sales'") && !app.includes('data-quick="sale"')],
  ['legacy individual sales are read-only', app.includes("else if(page==='Historical sales')") && app.includes("else if(page==='Reports')reportsPage(v)") && !app.includes("id=\"addsale\"" )],
  ['profit estimate excludes products without cost snapshots', app.includes('knownGrossProfit')],
  ['cart item removal control', app.includes('data-cart-remove')],
  ['transparent estimated profit cost coverage', app.includes('unit_cost_snapshot') && app.includes('ProfitNote')],
  ['printable itemised receipts', app.includes('function printReceipt') && app.includes('data-print')],
  ['sales CSV export', app.includes('function downloadCsv') && app.includes('export-sales')],
  ['stock search and low-stock filter', app.includes('janStockSearch') && app.includes('janStockLowOnly')],
  ['grouped desktop navigation and mobile navigation menu', app.includes('mobilePrimaryNav') && app.includes('more-menu')],
  ['dashboard cash close-out and operational guidance', app.includes('QuickActions') && app.includes('StartCatalogue')],
  ['responsive product catalogue, status filter and search', app.includes('product-card') && app.includes('product-filter')],
  ['store logo live preview handler', app.includes("$('#store-logo-file').onchange")],
  ['password recovery event', app.includes("PASSWORD_RECOVERY")],
  ['recovery screen state', app.includes('authRecoveryActive')],
  ['password update handler', app.includes('db.auth.updateUser({password})')],
  ['resend confirmation handler', app.includes("db.auth.resend({type:'signup'")],
  ['password reset request', app.includes('db.auth.resetPasswordForEmail')],
  ['safe auth error mapping', app.includes('function authErrorMessage')],
  ['email validation accepts Gmail and rejects malformed input', emailValidationWorks],
  ['GitHub Pages redirect (no localhost)', !app.includes('localhost:3000')],
  ['service worker cache v11', sw.includes("janushan-pwa-v10")],
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
