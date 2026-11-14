import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.0';
const db=createClient('https://igmntuedldippelbqgnm.supabase.co','sb_publishable_ir7zS8hV1xUT0sgdVbzrtw_UAPoGkCX');
const $=s=>document.querySelector(s), id=()=>crypto.randomUUID(), money=n=>'Rs. '+Number(n||0).toLocaleString('en-LK',{minimumFractionDigits:2,maximumFractionDigits:2});
const dict={
en:{Dashboard:'Dashboard',Products:'Products',Stock:'Stock',Sales:'Sales',Expenses:'Expenses','Cash book':'Cash book','Weekly count':'Weekly stock count',Team:'Team',Signout:'Sign out',More:'More',Today:'Today',Revenue:'Sales today',Spent:'Expenses today',Cash:'Cash received',Items:'Active products',Add:'Add',Save:'Save',Cancel:'Cancel',Name:'Product name',Category:'Category',Price:'Selling price (LKR)',Cost:'Unit cost (LKR)',Unit:'Unit',Threshold:'Low stock alert',Opening:'Opening stock',Qty:'Quantity',Amount:'Amount (LKR)',Paid:'Paid from',Description:'Description',Reason:'Reason',Type:'Movement',Email:'Email address',Role:'Role',Operator:'Operator',Viewer:'Viewer',Owner:'Owner',Actual:'Actual quantity',Open:'Opening cash',Added:'Cash added',Withdrawn:'Cash withdrawn',Close:'Actual closing cash',Refresh:'Refresh',NewSale:'New sale',Expense:'Add expense',Count:'Start stock count',Low:'Low stock',Recent:'Recent sales',NoData:'No records yet',Language:'සිංහල',English:'English',Tamil:'தமிழ்',SignIn:'Sign in',CreateAccount:'Create account',Password:'Password',Forgot:'Forgot password?',SendReset:'Send reset link',BackLogin:'Back to sign in',VerifySent:'Check your email and open the verification link to finish creating your account.',ResetSent:'Password reset email sent. Open the link from this website.',BusinessName:'Business name',CreateBusiness:'Create business',SetupBusiness:'Set up your business workspace',Image:'Product photo',SelectImage:'Choose product photo',Review:'Review',Submitted:'Submitted',Reviewed:'Reviewed',Variance:'Variance',ReviewNotes:'Review notes',ApproveCount:'Review and reconcile stock',Offline:'Offline · transactions cannot be saved',Online:'Back online',AddMember:'Add team member',MustRegister:'The team member must create an account first.',ConfirmPassword:'Confirm password',PasswordsMismatch:'Passwords do not match.',InvalidEmail:'Enter a valid email address.',ShortPassword:'Use a password with at least 8 characters.',EmailPending:'Account created. Check your inbox and verify your email before signing in.'},
si:{Dashboard:'උපකරණ පුවරුව',Products:'නිෂ්පාදන',Stock:'තොගය',Sales:'විකුණුම්',Expenses:'වියදම්','Cash book':'මුදල් පොත','Weekly count':'සතිපතා තොග ගණනය',Team:'කණ්ඩායම',Signout:'ඉවත් වන්න',More:'තවත්',Today:'අද',Revenue:'අද විකුණුම්',Spent:'අද වියදම්',Cash:'ලැබුණු මුදල්',Items:'සක්‍රීය නිෂ්පාදන',Add:'එක් කරන්න',Save:'සුරකින්න',Cancel:'අවලංගු කරන්න',Name:'නිෂ්පාදනයේ නම',Category:'වර්ගය',Price:'විකුණුම් මිල (රු.)',Cost:'ඒකක පිරිවැය (රු.)',Unit:'ඒකකය',Threshold:'අඩු තොග සීමාව',Opening:'ආරම්භක තොගය',Qty:'ප්‍රමාණය',Amount:'මුදල (රු.)',Paid:'ගෙවූ ආකාරය',Description:'විස්තරය',Reason:'හේතුව',Type:'තොග චලනය',Email:'විද්‍යුත් තැපෑල',Role:'භූමිකාව',Operator:'මෙහෙයුම්කරු',Viewer:'නරඹන්නා',Owner:'හිමිකරු',Actual:'සැබෑ ප්‍රමාණය',Open:'ආරම්භක මුදල',Added:'එකතු කළ මුදල',Withdrawn:'ඉවත් කළ මුදල',Close:'අවසන් මුදල',Refresh:'නැවුම් කරන්න',NewSale:'නව විකුණුම',Expense:'වියදමක් එක් කරන්න',Count:'තොගය ගණනය කරන්න',Low:'අඩු තොග',Recent:'මෑත විකුණුම්',NoData:'තවමත් වාර්තා නොමැත',Language:'தமிழ்',English:'English',Tamil:'தமிழ்',SignIn:'ඇතුළු වන්න',CreateAccount:'ගිණුමක් සාදන්න',Password:'මුරපදය',Forgot:'මුරපදය අමතකද?',SendReset:'යළි සැකසීමේ සබැඳිය යවන්න',BackLogin:'ඇතුල්වීමට ආපසු',VerifySent:'විද්‍යුත් තැපෑල පරීක්ෂා කර සත්‍යාපන සබැඳිය විවෘත කරන්න.',ResetSent:'මුරපද යළි සැකසීමේ විද්‍යුත් තැපෑල යවා ඇත.',BusinessName:'ව්‍යාපාරයේ නම',CreateBusiness:'ව්‍යාපාරය සාදන්න',SetupBusiness:'ව්‍යාපාර ගිණුම සකසන්න',Image:'නිෂ්පාදන ඡායාරූපය',SelectImage:'ඡායාරූපයක් තෝරන්න',Review:'සමාලෝචනය',Submitted:'යොමු කර ඇත',Reviewed:'සමාලෝචනය කර ඇත',Variance:'වෙනස',ReviewNotes:'සමාලෝචන සටහන්',ApproveCount:'තොගය සමාලෝචනය කර සකසන්න',Offline:'අන්තර්ජාලය නැත · ගනුදෙනු සුරැකිය නොහැක',Online:'නැවත සම්බන්ධ වී ඇත',AddMember:'සාමාජිකයෙකු එක් කරන්න',MustRegister:'සාමාජිකයා පළමුව ගිණුමක් සෑදිය යුතුය.',ConfirmPassword:'මුරපදය තහවුරු කරන්න',PasswordsMismatch:'මුරපද ගැළපෙන්නේ නැත.',InvalidEmail:'නිවැරදි විද්‍යුත් තැපෑලක් ඇතුළත් කරන්න.',ShortPassword:'අවම අක්ෂර 8ක මුරපදයක් භාවිතා කරන්න.',EmailPending:'ගිණුම සාදන ලදී. ඇතුළු වීමට පෙර විද්‍යුත් තැපෑල සත්‍යාපනය කරන්න.'},
ta:{Dashboard:'முகப்புப் பலகை',Products:'தயாரிப்புகள்',Stock:'கையிருப்பு',Sales:'விற்பனை',Expenses:'செலவுகள்','Cash book':'பணப் பதிவு','Weekly count':'வாராந்திர கையிருப்பு கணக்கெடுப்பு',Team:'குழு',Signout:'வெளியேறு',More:'மேலும்',Today:'இன்று',Revenue:'இன்றைய விற்பனை',Spent:'இன்றைய செலவுகள்',Cash:'பெற்ற பணம்',Items:'செயலில் உள்ள தயாரிப்புகள்',Add:'சேர்க்க',Save:'சேமிக்க',Cancel:'ரத்துசெய்',Name:'தயாரிப்பு பெயர்',Category:'வகை',Price:'விற்பனை விலை (ரூ.)',Cost:'அலகுச் செலவு (ரூ.)',Unit:'அலகு',Threshold:'குறைந்த கையிருப்பு எச்சரிக்கை',Opening:'ஆரம்ப கையிருப்பு',Qty:'அளவு',Amount:'தொகை (ரூ.)',Paid:'செலுத்திய முறை',Description:'விளக்கம்',Reason:'காரணம்',Type:'கையிருப்பு நகர்வு',Email:'மின்னஞ்சல் முகவரி',Role:'பங்கு',Operator:'செயல்பாட்டாளர்',Viewer:'பார்வையாளர்',Owner:'உரிமையாளர்',Actual:'உண்மையான அளவு',Open:'ஆரம்ப பணம்',Added:'சேர்க்கப்பட்ட பணம்',Withdrawn:'எடுக்கப்பட்ட பணம்',Close:'முடிவு பணம்',Refresh:'புதுப்பிக்க',NewSale:'புதிய விற்பனை',Expense:'செலவைச் சேர்',Count:'கையிருப்பைக் கணக்கிடு',Low:'குறைந்த கையிருப்பு',Recent:'சமீபத்திய விற்பனைகள்',NoData:'பதிவுகள் இல்லை',Language:'සිංහල',English:'English',Tamil:'தமிழ்',SignIn:'உள்நுழை',CreateAccount:'கணக்கை உருவாக்கு',Password:'கடவுச்சொல்',Forgot:'கடவுச்சொல் மறந்துவிட்டதா?',SendReset:'மீட்டமைப்பு இணைப்பை அனுப்பு',BackLogin:'உள்நுழைவுக்குத் திரும்பு',VerifySent:'மின்னஞ்சலைத் திறந்து சரிபார்ப்பு இணைப்பை அழுத்தவும்.',ResetSent:'கடவுச்சொல் மீட்டமைப்பு மின்னஞ்சல் அனுப்பப்பட்டது.',BusinessName:'வணிகப் பெயர்',CreateBusiness:'வணிகத்தை உருவாக்கு',SetupBusiness:'வணிகப் பணியிடத்தை அமைக்கவும்',Image:'தயாரிப்பு படம்',SelectImage:'படத்தைத் தேர்ந்தெடு',Review:'மதிப்பாய்வு',Submitted:'சமர்ப்பிக்கப்பட்டது',Reviewed:'மதிப்பாய்வு முடிந்தது',Variance:'வேறுபாடு',ReviewNotes:'மதிப்பாய்வு குறிப்புகள்',ApproveCount:'கையிருப்பை மதிப்பாய்வு செய்து சரிசெய்',Offline:'இணையம் இல்லை · பரிவர்த்தனைகளைச் சேமிக்க முடியாது',Online:'மீண்டும் இணையத்துடன் இணைக்கப்பட்டது',AddMember:'குழு உறுப்பினரைச் சேர்',MustRegister:'உறுப்பினர் முதலில் கணக்கை உருவாக்க வேண்டும்.',ConfirmPassword:'கடவுச்சொல்லை உறுதிப்படுத்து',PasswordsMismatch:'கடவுச்சொற்கள் பொருந்தவில்லை.',InvalidEmail:'சரியான மின்னஞ்சலை உள்ளிடவும்.',ShortPassword:'குறைந்தது 8 எழுத்துகள் கொண்ட கடவுச்சொல்லைப் பயன்படுத்தவும்.',EmailPending:'கணக்கு உருவாக்கப்பட்டது. உள்நுழைவதற்கு முன் மின்னஞ்சலைச் சரிபார்க்கவும்.'}
};
let lang=localStorage.janLang||'ta',user,biz,role,products=[],stock=[],sales=[],expenses=[],sessions=[],counts=[],dailyCashEntries=[],stockMovements=[],pendingSales=[],storeSettings={theme:'blue',font_scale:1.12,reduce_motion:false,banner_path:null,logo_path:null},page='Dashboard';
let authRecoveryActive=new URLSearchParams(window.location.hash.replace(/^#/, '')).get('type')==='recovery'||new URLSearchParams(window.location.search).get('type')==='recovery';

const extraDict={
en:{Offline:'Offline · pending sales will sync when connected',Online:'Online',OfflineReadOnly:'Offline mode: showing the last synced data.',PendingSales:'Pending offline sales',PendingSync:'Waiting to sync',NeedsReview:'Needs review',Remove:'Remove',PriceChanged:'A product price changed after this sale was saved. Remove it and enter the sale again.',OfflineQueued:'Sale saved on this device. It will sync automatically when internet returns.',AddProductsFirst:'Add products first.',AddItemsFirst:'Add at least one item.',InsufficientStock:'Insufficient available stock.',InvalidDiscount:'Discount cannot exceed the sale total.',PaymentSplitInvalid:'Cash, bank and credit amounts must equal the sale total.',GoodDay:'Good day!',DashboardSub:'Here is how your van is doing today.',MenuReference:'Janushan Ice Cream menu',Product:'Product',Available:'Available',Alert:'Alert',Status:'Status',Date:'Date',Payment:'Payment',Gross:'Gross',Discount:'Discount',Net:'Net',Receipt:'Receipt',SaveNewPassword:'Save new password',SetNewPassword:'Set a new password',PendingLogoutWarning:'Unsynced sales are kept on this device. Sign out anyway?',PendingRemovalWarning:'Remove this sale from this device? If it has already reached the server, it will remain in the sales records.',Expected:'Expected',Actual:'Actual',Difference:'Difference',Closed:'Closed',Open:'Open',CloseDay:'Close day',SaveSession:'Save session',AddMember:'Add team member',Fuel:'Fuel',Maintenance:'Maintenance',Ice:'Ice',Packaging:'Packaging',Food:'Food',Archived:'Archived',Archive:'Archive',Restore:'Restore',ConfirmArchive:'Hide this product from the active menu? Existing sales records will remain.',ConfirmRestore:'Restore this product to the active menu?',Edit:'Edit',EditProduct:'Edit product',ChangePhoto:'Change photo',ImageHelp:'Use a clear JPG, PNG or WebP image up to 6 MB.',CheckProduct:'Please check the product details and prices.',ProductUpdated:'Product updated successfully.',ManageStore:'Manage store',ManageStoreSub:'Change your menu, products, branding and display preferences.',Branding:'Store branding',LivePreview:'Your store identity',StoreName:'Store display name',BannerImage:'Menu banner image',LogoImage:'Business logo',Theme:'Colour theme',SaveChanges:'Save changes',Accessibility:'Accessibility',AccessibilitySub:'Make the app easier to read and use.',TextSize:'Text size',ReduceMotion:'Reduce animations',MotionHelp:'Animations stay subtle and never block buttons or text.',PreviewText:'Preview larger text',PreviewEffects:'Preview effects',LanguageHelp:'Choose the language you find easiest to read.',ProductManagement:'Product management',ProductManagementSub:'Add new items or update existing prices, photos and stock alerts.',AddProduct:'Add a product',ViewProducts:'View products',SettingsSaved:'Store settings saved.',OwnerControls:'Owner settings',ReadOnly:'View only',QuickActions:'Quick actions',StartCatalogue:'Start your product catalogue',StartCatalogueHelp:'Add your first ice cream product to start recording sales and tracking stock.',NoLowStockAlerts:'All products are above their low-stock alert levels.',NoSalesYet:'Your recent sales will appear here.',SearchProducts:'Search products by name or category',NoProductsFound:'No products match your search.',NewSale:'New sale',Last7Days:'Last 7 days',Last30Days:'Last 30 days',TodayOnly:'Today',SalesTrend:'Sales trend',TopSellers:'Top sellers',EstProfit:'Estimated gross profit',ProfitNote:'Estimate uses recorded unit costs; missing costs are excluded.',NoSalesRange:'No sales in this period yet.',StockValue:'Stock cost value',SearchSales:'Search receipt or product',ExportCSV:'Export CSV',Print:'Print receipt',LowOnly:'Low stock only',SaleDetails:'Sale details',TotalItems:'Items sold',GrossSales:'Gross sales',NetSales:'Net sales',ZeroStock:'Out of stock',InStock:'In stock',LowStock:'Low stock',StockHealth:'Stock health',SearchStock:'Search stock',Cart:'Sale cart',BusinessOverview:'Business overview',DailyCash:'Daily cash',CashRemaining:'Cash remaining after expenses',CashDate:'Business date',CashNote:'Optional note',SaveCashEntry:'Save cash entry',CashEntrySaved:'Daily cash saved.',CashEntries:'Daily cash records',GrossCash:'Estimated gross cash collected',CashExpense:'Cash expenses added back',NetCash:'Cash remaining',NoCashEntries:'No daily cash entries for this period.',PeriodReconciliation:'Period reconciliation',OpeningCount:'Opening stock count',ClosingCount:'Closing stock count',UnitsSold:'Estimated units sold',ExpectedSales:'Expected sales value',CashVariance:'Cash difference',CostOfGoods:'Cost of goods sold',TotalExpenses:'Total expenses',NetProfit:'Estimated net profit',StockShortage:'Stock shortage',StockSurplus:'Stock surplus',ReconcileHint:'Compare two physical counts. No individual sales are needed.',NoCountPair:'Complete two reviewed stock counts to create a period report.',Received:'Stock received',Damaged:'Damaged / free / removed',CountedOn:'Counted on',CashGap:'Expected sales minus estimated gross cash collections',EstimateWarning:'This is an estimate based on recorded stock movements, prices and expenses. Missing records affect accuracy.',CashPaid:'Cash paid',BankPaid:'Bank paid',HistoricalSales:'Historical individual sales (legacy)',DailyCashHelp:'Enter once after returning home. Enter the physical cash left after paying today’s expenses.'},
si:{Offline:'අන්තර්ජාලය නොමැත · නැවත සම්බන්ධ වූ විට විකුණුම් සමමුහුර්ත වේ',Online:'අන්තර්ජාලයට සම්බන්ධයි',OfflineReadOnly:'අන්තර්ජාලය නොමැති බැවින් අවසන් සමමුහුර්ත කළ දත්ත පෙන්වයි.',PendingSales:'සමමුහුර්ත කිරීමට ඇති විකුණුම්',PendingSync:'සමමුහුර්ත කිරීමට බලා සිටී',NeedsReview:'පරීක්ෂා කිරීම අවශ්‍යයි',Remove:'ඉවත් කරන්න',PriceChanged:'මෙම විකුණුම සුරැකූ පසු භාණ්ඩයේ මිල වෙනස් වී ඇත. එය ඉවත් කර නැවත ඇතුළත් කරන්න.',OfflineQueued:'විකුණුම මෙම උපාංගයේ සුරකින ලදී. අන්තර්ජාලය ලැබුණු විට ස්වයංක්‍රීයව සමමුහුර්ත වේ.',AddProductsFirst:'පළමුව භාණ්ඩ එක් කරන්න.',AddItemsFirst:'අවම වශයෙන් එක් භාණ්ඩයක් එක් කරන්න.',InsufficientStock:'ප්‍රමාණවත් තොගයක් නොමැත.',InvalidDiscount:'වට්ටම විකුණුම් මුදල ඉක්මවිය නොහැක.',PaymentSplitInvalid:'මුදල්, බැංකු සහ ණය එකතුව විකුණුම් මුදලට සමාන විය යුතුය.',GoodDay:'ආයුබෝවන්!',DashboardSub:'අද වෑන් රථයේ ව්‍යාපාර තත්ත්වය මෙන්න.',MenuReference:'ජනූෂාන් අයිස්ක්‍රීම් මෙනුව',Product:'භාණ්ඩය',Available:'පවතින තොගය',Alert:'අවවාදය',Status:'තත්ත්වය',Date:'දිනය',Payment:'ගෙවීම',Gross:'මුළු මුදල',Discount:'වට්ටම',Net:'ශුද්ධ මුදල',Receipt:'රිසිට්පත',SaveNewPassword:'නව මුරපදය සුරකින්න',SetNewPassword:'නව මුරපදයක් සකසන්න',PendingLogoutWarning:'සමමුහුර්ත නොවූ විකුණුම් මෙම උපාංගයේ තබා ඇත. එසේම ඉවත් වීමට අවශ්‍යද?',PendingRemovalWarning:'මෙම උපාංගයෙන් මෙම විකුණුම ඉවත් කරන්නද? එය සේවාදායකයට දැනටමත් ලැබී ඇත්නම් විකුණුම් වාර්තාවේ පවතිනු ඇත.',Expected:'අපේක්ෂිත',Actual:'සැබෑ',Difference:'වෙනස',Closed:'වසා ඇත',Open:'විවෘත',CloseDay:'දවස වසන්න',SaveSession:'වාරය සුරකින්න',AddMember:'කණ්ඩායම් සාමාජිකයෙකු එක් කරන්න',Fuel:'ඉන්ධන',Maintenance:'අලුත්වැඩියා',Ice:'අයිස්',Packaging:'ඇසුරුම්',Food:'ආහාර',Archived:'සඟවා ඇත',Archive:'සඟවන්න',Restore:'නැවත සක්‍රිය කරන්න',ConfirmArchive:'මෙම භාණ්ඩය සක්‍රීය මෙනුවෙන් සඟවන්නද? පැරණි විකුණුම් වාර්තා ආරක්ෂිතව පවතී.',ConfirmRestore:'මෙම භාණ්ඩය නැවත සක්‍රිය කරන්නද?',Edit:'සංස්කරණය',EditProduct:'භාණ්ඩය සංස්කරණය කරන්න',ChangePhoto:'ඡායාරූපය වෙනස් කරන්න',ImageHelp:'6 MB දක්වා JPG, PNG හෝ WebP ඡායාරූපයක් භාවිතා කරන්න.',CheckProduct:'භාණ්ඩ විස්තර සහ මිල පරීක්ෂා කරන්න.',ProductUpdated:'භාණ්ඩය යාවත්කාලීන කරන ලදී.',ManageStore:'වෙළඳසැල කළමනාකරණය',ManageStoreSub:'මෙනුව, භාණ්ඩ, සන්නාමය සහ පෙනුම වෙනස් කරන්න.',Branding:'වෙළඳසැල් සන්නාමය',LivePreview:'ඔබේ වෙළඳසැල් අනන්‍යතාව',StoreName:'වෙළඳසැලේ නම',BannerImage:'මෙනු බැනරය',LogoImage:'ව්‍යාපාර ලාංඡනය',Theme:'වර්ණ තේමාව',SaveChanges:'වෙනස්කම් සුරකින්න',Accessibility:'පහසු භාවිතය',AccessibilitySub:'කියවීමට සහ භාවිතයට පහසු කරන්න.',TextSize:'අකුරු ප්‍රමාණය',ReduceMotion:'සජීවිකරණ අඩු කරන්න',MotionHelp:'සජීවිකරණ සරලව පවතින අතර බොත්තම් හෝ අකුරු අවහිර නොකරයි.',PreviewText:'විශාල අකුරු පෙරදසුන',PreviewEffects:'ප්‍රයෝග පෙරදසුන',LanguageHelp:'ඔබට පහසුවෙන් කියවිය හැකි භාෂාව තෝරන්න.',ProductManagement:'භාණ්ඩ කළමනාකරණය',ProductManagementSub:'නව භාණ්ඩ එක් කරන්න හෝ පවතින මිල, ඡායාරූප සහ තොග සීමා වෙනස් කරන්න.',AddProduct:'භාණ්ඩයක් එක් කරන්න',ViewProducts:'භාණ්ඩ බලන්න',SettingsSaved:'වෙළඳසැල් සැකසුම් සුරකින ලදී.',OwnerControls:'හිමිකරු සැකසුම්',ReadOnly:'බැලීම පමණි',QuickActions:'ඉක්මන් ක්‍රියා',StartCatalogue:'ඔබේ භාණ්ඩ ලැයිස්තුව ආරම්භ කරන්න',StartCatalogueHelp:'විකුණුම් සහ තොග කළමනාකරණය ආරම්භ කිරීමට පළමු භාණ්ඩය එක් කරන්න.',NoLowStockAlerts:'සියලු භාණ්ඩවල තොග මට්ටම හොඳයි.',NoSalesYet:'මෑත විකුණුම් මෙහි පෙන්වනු ඇත.',SearchProducts:'නම හෝ වර්ගය අනුව සොයන්න',NoProductsFound:'ගැළපෙන භාණ්ඩ හමු නොවීය.',NewSale:'නව විකුණුම',Last7Days:'අවසන් දින 7',Last30Days:'අවසන් දින 30',TodayOnly:'අද',SalesTrend:'විකුණුම් ප්‍රවණතාව',TopSellers:'වැඩිම විකුණුම් ඇති භාණ්ඩ',EstProfit:'ඇස්තමේන්තුගත දළ ලාභය',ProfitNote:'සටහන් කළ ඒකක පිරිවැය ඇති භාණ්ඩ පමණක් ඇතුළත් වේ.',NoSalesRange:'මෙම කාලය තුළ විකුණුම් නොමැත.',StockValue:'තොග පිරිවැය වටිනාකම',SearchSales:'රිසිට්පත හෝ භාණ්ඩය සොයන්න',ExportCSV:'CSV බාගන්න',Print:'රිසිට්පත මුද්‍රණය',LowOnly:'අඩු තොග පමණි',SaleDetails:'විකුණුම් විස්තර',TotalItems:'විකුණූ භාණ්ඩ',GrossSales:'මුළු විකුණුම්',NetSales:'ශුද්ධ විකුණුම්',ZeroStock:'තොග අවසන්',InStock:'තොග ඇත',LowStock:'අඩු තොග',StockHealth:'තොග තත්ත්වය',SearchStock:'තොගය සොයන්න',Cart:'විකුණුම් ලැයිස්තුව',BusinessOverview:'ව්‍යාපාර සාරාංශය',DailyCash:'දෛනික මුදල්',CashRemaining:'වියදම් ගෙවූ පසු ඉතිරි මුදල',CashDate:'ව්‍යාපාර දිනය',CashNote:'විකල්ප සටහන',SaveCashEntry:'දෛනික මුදල් සුරකින්න',CashEntrySaved:'දෛනික මුදල් සුරකින ලදී.',CashEntries:'දෛනික මුදල් වාර්තා',GrossCash:'ඇස්තමේන්තුගත මුළු මුදල් ලැබීම්',CashExpense:'එකතු කළ මුදල් වියදම්',NetCash:'ඉතිරි මුදල්',NoCashEntries:'මෙම කාලයට දෛනික මුදල් වාර්තා නැත.',PeriodReconciliation:'කාල පරිච්ඡේද ගැළපීම',OpeningCount:'ආරම්භක තොග ගණනය',ClosingCount:'අවසන් තොග ගණනය',UnitsSold:'ඇස්තමේන්තුගත විකුණුම් ඒකක',ExpectedSales:'අපේක්ෂිත විකුණුම් වටිනාකම',CashVariance:'මුදල් වෙනස',CostOfGoods:'විකුණූ භාණ්ඩ පිරිවැය',TotalExpenses:'මුළු වියදම්',NetProfit:'ඇස්තමේන්තුගත ශුද්ධ ලාභය',StockShortage:'තොග අඩුව',StockSurplus:'තොග අතිරික්තය',Received:'ලැබුණු තොග',Damaged:'හානි වූ / නොමිලේ / ඉවත් කළ',CountedOn:'ගණනය කළ දිනය',CashGap:'අපේක්ෂිත විකුණුම් සහ ඇස්තමේන්තුගත මුදල් අතර වෙනස',EstimateWarning:'මෙය සටහන් කළ තොග චලනයන්, මිල සහ වියදම් මත පදනම් වූ ඇස්තමේන්තුවකි.',CashPaid:'මුදලින් ගෙවූ',BankPaid:'බැංකුවෙන් ගෙවූ',HistoricalSales:'පැරණි පුද්ගලික විකුණුම් වාර්තා',DailyCashHelp:'ගෙදර පැමිණ අද දවසේ වියදම් ගෙවූ පසු ඉතිරි භෞතික මුදල එක් වරක් ඇතුළත් කරන්න.'},
ta:{Offline:'இணைய இணைப்பு இல்லை · மீண்டும் இணைந்ததும் விற்பனைகள் ஒத்திசைக்கப்படும்',Online:'இணையத்துடன் இணைக்கப்பட்டுள்ளது',OfflineReadOnly:'இணையம் இல்லாததால் கடைசியாக ஒத்திசைக்கப்பட்ட தரவு காட்டப்படுகிறது.',PendingSales:'ஒத்திசைக்க வேண்டிய நிலுவை விற்பனைகள்',PendingSync:'ஒத்திசைவுக்காக காத்திருக்கிறது',NeedsReview:'மதிப்பாய்வு தேவை',Remove:'நீக்கு',PriceChanged:'இந்த விற்பனை சேமிக்கப்பட்டதிலிருந்து தயாரிப்பின் விலை மாறியுள்ளது. இதை நீக்கி மீண்டும் பதிவு செய்யவும்.',OfflineQueued:'விற்பனை இந்த சாதனத்தில் சேமிக்கப்பட்டது. இணையம் திரும்பியதும் தானாக ஒத்திசைக்கப்படும்.',AddProductsFirst:'முதலில் தயாரிப்புகளைச் சேர்க்கவும்.',AddItemsFirst:'குறைந்தது ஒரு பொருளையாவது சேர்க்கவும்.',InsufficientStock:'போதுமான கையிருப்பு இல்லை.',InvalidDiscount:'தள்ளுபடி விற்பனைத் தொகையை விட அதிகமாக இருக்க முடியாது.',PaymentSplitInvalid:'பணம், வங்கி மற்றும் கடன் தொகைகளின் கூட்டுத்தொகை விற்பனைத் தொகைக்கு சமமாக இருக்க வேண்டும்.',GoodDay:'வணக்கம்!',DashboardSub:'இன்றைய வணிக நிலை இதோ.',MenuReference:'ஜனுஷான் ஐஸ்கிரீம் மெனு',Product:'தயாரிப்பு',Available:'கையிருப்பு',Alert:'எச்சரிக்கை',Status:'நிலை',Date:'தேதி',Payment:'கட்டணம்',Gross:'மொத்தம்',Discount:'தள்ளுபடி',Net:'நிகரம்',Receipt:'ரசீது',SaveNewPassword:'புதிய கடவுச்சொல்லைச் சேமி',SetNewPassword:'புதிய கடவுச்சொல்லை அமைக்கவும்',PendingLogoutWarning:'ஒத்திசைக்கப்படாத விற்பனைகள் இந்த சாதனத்தில் வைக்கப்படும். வெளியேறவா?',PendingRemovalWarning:'இந்த சாதனத்திலிருந்து இந்த விற்பனையை நீக்கவா? இது ஏற்கனவே சேவையகத்தை அடைந்திருந்தால் விற்பனைப் பதிவில் இருக்கும்.',Expected:'எதிர்பார்ப்பு',Actual:'உண்மை',Difference:'வித்தியாசம்',Closed:'மூடப்பட்டது',Open:'திறந்துள்ளது',CloseDay:'நாளை முடி',SaveSession:'அமர்வைச் சேமி',AddMember:'குழு உறுப்பினரைச் சேர்',Fuel:'எரிபொருள்',Maintenance:'பராமரிப்பு',Ice:'பனி',Packaging:'பொதியிடல்',Food:'உணவு',Archived:'மறைக்கப்பட்டது',Archive:'மறை',Restore:'மீட்டமை',ConfirmArchive:'இந்த தயாரிப்பை செயலில் உள்ள மெனுவிலிருந்து மறைக்கவா? பழைய விற்பனைப் பதிவுகள் பாதுகாப்பாக இருக்கும்.',ConfirmRestore:'இந்த தயாரிப்பை மீண்டும் செயல்படுத்தவா?',Edit:'திருத்து',EditProduct:'தயாரிப்பைத் திருத்து',ChangePhoto:'படத்தை மாற்று',ImageHelp:'6 MB வரை JPG, PNG அல்லது WebP தெளிவான படத்தைப் பயன்படுத்தவும்.',CheckProduct:'தயாரிப்பு விவரங்களையும் விலைகளையும் சரிபார்க்கவும்.',ProductUpdated:'தயாரிப்பு வெற்றிகரமாகப் புதுப்பிக்கப்பட்டது.',ManageStore:'கடையை நிர்வகி',ManageStoreSub:'மெனு, தயாரிப்புகள், பிராண்டிங் மற்றும் தோற்றத்தை மாற்றவும்.',Branding:'கடை பிராண்டிங்',LivePreview:'உங்கள் கடை அடையாளம்',StoreName:'கடை பெயர்',BannerImage:'மெனு பேனர் படம்',LogoImage:'வணிக லோகோ',Theme:'வண்ணத் தீம்',SaveChanges:'மாற்றங்களைச் சேமி',Accessibility:'எளிதான பயன்பாடு',AccessibilitySub:'படிக்கவும் பயன்படுத்தவும் எளிதாக்குங்கள்.',TextSize:'எழுத்து அளவு',ReduceMotion:'அசைவுகளைக் குறை',MotionHelp:'அசைவுகள் மென்மையாக இருக்கும்; பொத்தான்களையோ எழுத்துகளையோ மறைக்காது.',PreviewText:'பெரிய எழுத்து முன்னோட்டம்',PreviewEffects:'விளைவுகள் முன்னோட்டம்',LanguageHelp:'உங்களுக்கு எளிதாகப் படிக்கக்கூடிய மொழியைத் தேர்ந்தெடுக்கவும்.',ProductManagement:'தயாரிப்பு மேலாண்மை',ProductManagementSub:'புதிய பொருட்களைச் சேர்க்கவும் அல்லது விலை, படங்கள் மற்றும் கையிருப்பு எச்சரிக்கைகளை மாற்றவும்.',AddProduct:'தயாரிப்பைச் சேர்',ViewProducts:'தயாரிப்புகளைக் காண்க',SettingsSaved:'கடை அமைப்புகள் சேமிக்கப்பட்டன.',OwnerControls:'உரிமையாளர் அமைப்புகள்',ReadOnly:'பார்வை மட்டும்',QuickActions:'விரைவு செயல்கள்',StartCatalogue:'உங்கள் தயாரிப்பு பட்டியலைத் தொடங்குங்கள்',StartCatalogueHelp:'விற்பனையையும் கையிருப்பையும் நிர்வகிக்க முதல் ஐஸ்கிரீம் தயாரிப்பைச் சேர்க்கவும்.',NoLowStockAlerts:'அனைத்து தயாரிப்புகளிலும் போதுமான கையிருப்பு உள்ளது.',NoSalesYet:'சமீபத்திய விற்பனைகள் இங்கே தோன்றும்.',SearchProducts:'பெயர் அல்லது வகை மூலம் தேடுங்கள்',NoProductsFound:'பொருந்தும் தயாரிப்புகள் இல்லை.',NewSale:'புதிய விற்பனை',Last7Days:'கடந்த 7 நாட்கள்',Last30Days:'கடந்த 30 நாட்கள்',TodayOnly:'இன்று',SalesTrend:'விற்பனைப் போக்கு',TopSellers:'அதிகம் விற்பனையானவை',EstProfit:'மதிப்பிடப்பட்ட மொத்த இலாபம்',ProfitNote:'அலகுச் செலவு பதிவு செய்யப்பட்ட தயாரிப்புகள் மட்டுமே சேர்க்கப்படும்.',NoSalesRange:'இந்தக் காலப்பகுதியில் விற்பனை இல்லை.',StockValue:'கையிருப்புச் செலவு மதிப்பு',SearchSales:'ரசீது அல்லது தயாரிப்பைத் தேடுங்கள்',ExportCSV:'CSV பதிவிறக்கம்',Print:'ரசீதை அச்சிடு',LowOnly:'குறைந்த கையிருப்பு மட்டும்',SaleDetails:'விற்பனை விவரங்கள்',TotalItems:'விற்கப்பட்ட பொருட்கள்',GrossSales:'மொத்த விற்பனை',NetSales:'நிகர விற்பனை',ZeroStock:'கையிருப்பு இல்லை',InStock:'கையிருப்பு உள்ளது',LowStock:'குறைந்த கையிருப்பு',StockHealth:'கையிருப்பு நிலை',SearchStock:'கையிருப்பைத் தேடுங்கள்',Cart:'விற்பனைப் பட்டியல்',BusinessOverview:'வணிகச் சுருக்கம்',DailyCash:'தினசரி பணம்',CashRemaining:'செலவுகளுக்குப் பிறகு மீதமுள்ள பணம்',CashDate:'வணிகத் தேதி',CashNote:'விருப்பக் குறிப்பு',SaveCashEntry:'தினசரி பணத்தைச் சேமி',CashEntrySaved:'தினசரி பணம் சேமிக்கப்பட்டது.',CashEntries:'தினசரி பணப் பதிவுகள்',GrossCash:'மதிப்பிடப்பட்ட மொத்த பண வசூல்',CashExpense:'மீண்டும் சேர்க்கப்பட்ட பணச் செலவுகள்',NetCash:'மீதமுள்ள பணம்',NoCashEntries:'இந்தக் காலத்திற்கு தினசரி பணப் பதிவுகள் இல்லை.',PeriodReconciliation:'காலகட்ட ஒப்பீடு',OpeningCount:'தொடக்க கையிருப்பு கணக்கெடுப்பு',ClosingCount:'முடிவு கையிருப்பு கணக்கெடுப்பு',UnitsSold:'மதிப்பிடப்பட்ட விற்பனை எண்ணிக்கை',ExpectedSales:'எதிர்பார்க்கப்படும் விற்பனை மதிப்பு',CashVariance:'பண வேறுபாடு',CostOfGoods:'விற்கப்பட்ட பொருட்களின் செலவு',TotalExpenses:'மொத்த செலவுகள்',NetProfit:'மதிப்பிடப்பட்ட நிகர இலாபம்',StockShortage:'கையிருப்பு குறைவு',StockSurplus:'கையிருப்பு அதிகம்',Received:'பெறப்பட்ட கையிருப்பு',Damaged:'சேதம் / இலவசம் / அகற்றப்பட்டது',CountedOn:'கணக்கிட்ட தேதி',CashGap:'எதிர்பார்க்கப்படும் விற்பனை மற்றும் மதிப்பிடப்பட்ட பண வசூல் இடையிலான வேறுபாடு',EstimateWarning:'பதிவு செய்யப்பட்ட கையிருப்பு நகர்வுகள், விலைகள் மற்றும் செலவுகளின் அடிப்படையிலான மதிப்பீடு.',CashPaid:'பணமாக செலுத்தியது',BankPaid:'வங்கி மூலம் செலுத்தியது',HistoricalSales:'பழைய தனிப்பட்ட விற்பனைப் பதிவுகள்',DailyCashHelp:'வீடு திரும்பியதும் அன்றைய செலவுகளைச் செலுத்திய பிறகு மீதமுள்ள பணத்தை ஒருமுறை பதிவு செய்யுங்கள்.'}
};
const tr=k=>extraDict[lang]?.[k]||dict[lang]?.[k]||dict.en[k]||k;
const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Colombo'}).format(new Date());
const colomboDate=value=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Colombo'}).format(new Date(value));
const dateTime=value=>new Intl.DateTimeFormat('en-LK',{timeZone:'Asia/Colombo',dateStyle:'medium',timeStyle:'short'}).format(new Date(value));

function snapshotKey(uid){return 'janushan.snapshot.'+uid}
function queueKey(uid){return 'janushan.pending-sales.'+uid}
function loadPendingSales(uid=user?.id){
 if(!uid)return [];
 try{return JSON.parse(localStorage.getItem(queueKey(uid))||'[]')}catch{return []}
}
function savePendingSales(list){
 if(!user?.id)throw Error('Sign in again before saving pending sales.');
 localStorage.setItem(queueKey(user.id),JSON.stringify(list));
 pendingSales=list;
}
function queuedQuantity(productId){
 return pendingSales.reduce((sum,item)=>sum+(item.payload?.p_items||[]).filter(x=>x.product_id===productId).reduce((a,x)=>a+Number(x.quantity||0),0),0);
}
function availableStock(productId){
 const item=stock.find(x=>x.id===productId);
 return Math.max(0,Number(item?.on_hand||0)-queuedQuantity(productId));
}
function saveSnapshot(){
 if(!user?.id||!biz)return;
 try{localStorage.setItem(snapshotKey(user.id),JSON.stringify({userId:user.id,biz,role,products,stock,sales:sales.slice(0,120),expenses:expenses.slice(0,120),sessions:sessions.slice(0,45),counts:counts.slice(0,20),dailyCashEntries:dailyCashEntries.slice(0,120),stockMovements:stockMovements.slice(0,3000),storeSettings,savedAt:Date.now()}));}catch(e){console.warn('Could not cache offline data',e)}
}
function restoreSnapshot(uid){
 try{
  const s=JSON.parse(localStorage.getItem(snapshotKey(uid))||'null');
  if(!s||s.userId!==uid||!s.biz||Date.now()-Number(s.savedAt||0)>30*86400000)return false;
  user={id:uid};biz=s.biz;role=s.role;products=s.products||[];stock=s.stock||[];sales=s.sales||[];expenses=s.expenses||[];sessions=s.sessions||[];counts=s.counts||[];dailyCashEntries=s.dailyCashEntries||[];stockMovements=s.stockMovements||[];storeSettings=s.storeSettings||storeSettings;pendingSales=loadPendingSales(uid);
  return true;
 }catch{return false}
}
function isNetworkError(error){
 const message=String(error?.message||error||'').toLowerCase();
 return !navigator.onLine||error?.status===0||error?.status===401||error?.status===403||/fetch|network|timeout|connection|failed to load|load failed/.test(message);
}
function updateNetworkState(){
 const el=$('#net-state');if(!el)return;
 el.textContent=navigator.onLine?tr('Online'):tr('Offline');
 el.className='network-pill '+(navigator.onLine?'online':'offline');
}
async function syncPendingSales(){
 if(!navigator.onLine||!user?.id||!biz?.id)return;
 const authState=await db.auth.getSession();
 if(authState.error||authState.data?.session?.user?.id!==user.id)return;
 const queue=loadPendingSales(user.id);if(!queue.length)return;
 const remaining=[];
 for(let i=0;i<queue.length;i++){
  const item=queue[i];
  if(item.status==='needs-review'){remaining.push(item);continue}
  try{
   const existing=await db.from('sales').select('id').eq('id',item.payload.p_sale_id).maybeSingle();
   if(existing.error)throw existing.error;
   if(existing.data)continue;
   const ids=item.payload.p_items.map(x=>x.product_id);
   const current=await db.from('products').select('id,selling_price').eq('business_id',biz.id).in('id',ids);
   if(current.error)throw current.error;
   const changed=(item.priceSnapshot||[]).some(saved=>{
    const latest=(current.data||[]).find(p=>p.id===saved.product_id);
    return !latest||Math.abs(Number(latest.selling_price)-Number(saved.price))>0.009;
   });
   if(changed){remaining.push({...item,status:'needs-review',message:tr('PriceChanged')});continue}
   const result=await db.rpc('record_sale',item.payload);
   if(result.error){
    if(isNetworkError(result.error)){remaining.push(item,...queue.slice(i+1));break}
    remaining.push({...item,status:'needs-review',message:result.error.message});
   }
  }catch(e){
   if(isNetworkError(e)){remaining.push(item,...queue.slice(i+1));break}
   remaining.push({...item,status:'needs-review',message:e.message});
  }
 }
 savePendingSales(remaining);
}

function toast(s){let e=$('#toast');e.textContent=s;e.style.display='block';clearTimeout(window.tt);window.tt=setTimeout(()=>e.style.display='none',2800)}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function field(label,key,type='text',value='',attrs=''){return '<label class="field"><span>'+label+'</span><input id="'+key+'" type="'+type+'" value="'+esc(value)+'" '+attrs+'></label>'}

function modal(title,body,fn,options={}){
 $('#app').insertAdjacentHTML('beforeend','<div class="modal-bg" id="modal"><div class="modal"><h2>'+title+'</h2>'+body+'<div class="actions"><button class="btn alt" id="cancel">'+tr('Cancel')+'</button><button class="btn" id="save">'+tr('Save')+'</button></div></div></div>');
 $('#cancel').onclick=()=>$('#modal').remove();
 $('#save').onclick=async()=>{
  if(!navigator.onLine&&!options.allowOffline){toast(tr('Offline'));return}
  const button=$('#save');if(button)button.disabled=true;
  try{await fn();$('#modal')?.remove()}
  catch(e){toast(e.message||'Unable to save. Please try again.')}
  finally{if($('#save'))$('#save').disabled=false}
 };
}

function appRedirect(){return new URL('./',window.location.href).href}
function authErrorMessage(error){
 const code=String(error?.code||'').toLowerCase(),message=String(error?.message||'').toLowerCase();
 if(code==='invalid_credentials'||message.includes('invalid login credentials'))return tr('InvalidCredentials');
 if(code==='email_not_confirmed'||message.includes('email not confirmed'))return tr('EmailNotConfirmed');
 if(code==='email_address_not_authorized'||message.includes('email address not authorized'))return tr('EmailNotAuthorized');
 if(code==='over_email_send_rate_limit'||error?.status===429||message.includes('rate limit'))return tr('EmailRateLimited');
 if(code==='user_already_exists'||message.includes('already registered')||message.includes('already exists'))return tr('AccountExists');
 return error?.message||tr('AuthError');
}
async function resendConfirmation(email){
 if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))throw Error(tr('EnterEmail'));
 const {error}=await db.auth.resend({type:'signup',email,options:{emailRedirectTo:appRedirect()}});
 if(error)throw error;
}
function showPendingConfirmation(email){
 const logo='<img class="brand-logo" src="./assets/logo.webp" alt="Janushan Ice Cream" onerror="this.onerror=null;this.src=\'./icon.svg\'">';
 $('#app').innerHTML='<div class="login"><div class="login-card">'+logo+'<h2>Janushan Ice Cream</h2><p class="muted">'+tr('EmailPending')+'</p><p>'+esc(email)+'</p><button class="btn" id="resend-confirmation" style="width:100%">'+tr('ResendConfirmation')+'</button><button class="text-button" id="back-login">Back to sign in</button>'+languageButtons()+'<small class="app-version">'+tr('AppVersion')+'</small></div></div>';
 bindLanguages();
 $('#resend-confirmation').onclick=async()=>{const b=$('#resend-confirmation');b.disabled=true;try{await resendConfirmation(email);toast(tr('ResendSent'))}catch(e){toast(authErrorMessage(e))}finally{b.disabled=false}};
 $('#back-login').onclick=()=>login();
}
function languageButtons(){return '<div class="language-switch"><button data-lang="ta">தமிழ்</button><button data-lang="si">සිංහල</button><button data-lang="en">English</button></div>'}
function bindLanguages(){document.querySelectorAll('[data-lang]').forEach(b=>{b.classList.toggle('selected',b.dataset.lang===lang);b.onclick=()=>{lang=b.dataset.lang;localStorage.janLang=lang;if(user&&biz)layout();else login()}})}
function login(mode='login',notice=''){
 const logo='<img class="brand-logo" src="./assets/logo.webp" alt="Janushan Ice Cream logo" onerror="this.onerror=null;this.src=\'./icon.svg\'">';
 const title=mode==='signup'?tr('CreateAccount'):mode==='reset'?tr('Forgot'):mode==='new-password'?tr('SetNewPassword'):tr('SignIn');
 let form='';
 if(mode!=='new-password')form+=field(tr('Email'),'email','email','','autocomplete="email"');
 if(mode==='login'||mode==='signup'||mode==='new-password')form+=field(tr('Password'),'password','password','','autocomplete="'+(mode==='signup'||mode==='new-password'?'new-password':'current-password')+'"');
 if(mode==='signup'||mode==='new-password')form+=field(tr('ConfirmPassword'),'confirm-password','password','','autocomplete="new-password"');
 let buttons=mode==='new-password'?'<button class="btn" id="save-new-password" style="width:100%">'+tr('SaveNewPassword')+'</button>':mode==='reset'?'<button class="btn" id="reset" style="width:100%">'+tr('SendReset')+'</button>':mode==='signup'?'<button class="btn" id="signup" style="width:100%">'+tr('CreateAccount')+'</button>':'<button class="btn" id="signin" style="width:100%">'+tr('SignIn')+'</button><button class="text-button" id="forgot">'+tr('Forgot')+'</button><button class="text-button" id="resend">'+tr('ResendConfirmation')+'</button>';
 const noticeHtml=notice?'<div class="auth-notice" role="status">'+esc(notice)+'</div>':'';
 const help=mode==='login'?'<p class="muted auth-help">'+tr('AuthHelp')+'</p>':'';
 $('#app').innerHTML='<div class="login"><div class="login-card">'+logo+'<h2>Janushan Ice Cream</h2><p class="muted">'+title+'</p>'+noticeHtml+'<div class="login-fields">'+form+buttons+'<button class="text-button" id="mode">'+(mode==='signup'?'Back to sign in':mode==='new-password'?'Back to sign in':'Create account')+'</button></div>'+help+languageButtons()+'<small class="app-version">'+tr('AppVersion')+'</small></div></div>';
 bindLanguages();
 if(mode==='login'){
  $('#signin').onclick=async()=>{try{const email=$('#email').value.trim(),password=$('#password').value;if(!email)throw Error(tr('EnterEmail'));if(!password)throw Error(tr('EnterPassword'));const {error}=await db.auth.signInWithPassword({email,password});if(error){if(error.code==='email_not_confirmed'){login('login',tr('EmailNotConfirmed'));return}throw error}authRecoveryActive=false;await boot()}catch(e){toast(authErrorMessage(e))}};
  $('#forgot').onclick=()=>login('reset');
  $('#resend').onclick=async()=>{const b=$('#resend');b.disabled=true;try{await resendConfirmation($('#email').value.trim());toast(tr('ResendSent'))}catch(e){toast(authErrorMessage(e))}finally{b.disabled=false}};
  $('#mode').onclick=()=>login('signup');
 }else if(mode==='signup'){
  $('#signup').onclick=async()=>{const b=$('#signup');b.disabled=true;try{const email=$('#email').value.trim(),password=$('#password').value;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))throw Error(tr('InvalidEmail'));if(password.length<8)throw Error(tr('ShortPassword'));if(password!==$('#confirm-password').value)throw Error(tr('PasswordsMismatch'));const {data,error}=await db.auth.signUp({email,password,options:{emailRedirectTo:appRedirect(),data:{business_name:'Janushan Ice Cream'}}});if(error)throw error;if(data?.user?.identities?.length===0){login('login',tr('AccountExists'));return}if(data?.session){authRecoveryActive=false;await boot();return}showPendingConfirmation(email)}catch(e){toast(authErrorMessage(e))}finally{if($('#signup'))$('#signup').disabled=false}};
  $('#mode').onclick=()=>login();
 }else if(mode==='new-password'){
  $('#save-new-password').onclick=async()=>{const b=$('#save-new-password');b.disabled=true;try{const sr=await db.auth.getSession();if(sr.error)throw sr.error;if(!sr.data?.session)throw Error(tr('RecoveryLinkInvalid'));const password=$('#password').value;if(password.length<8)throw Error(tr('ShortPassword'));if(password!==$('#confirm-password').value)throw Error(tr('PasswordsMismatch'));const {error}=await db.auth.updateUser({password});if(error)throw error;authRecoveryActive=false;const clean=new URL(location.href);clean.hash='';['code','type','token_hash','next'].forEach(k=>clean.searchParams.delete(k));history.replaceState({},document.title,clean.pathname+clean.search);await db.auth.signOut();login('login',tr('PasswordUpdated'))}catch(e){toast(authErrorMessage(e))}finally{if($('#save-new-password'))$('#save-new-password').disabled=false}};
  $('#mode').onclick=()=>login();
 }else{
  $('#reset').onclick=async()=>{const b=$('#reset');b.disabled=true;try{const email=$('#email').value.trim();if(!email)throw Error(tr('EnterEmail'));const {error}=await db.auth.resetPasswordForEmail(email,{redirectTo:appRedirect()});if(error)throw error;login('login',tr('ResetSent'))}catch(e){toast(authErrorMessage(e))}finally{if($('#reset'))$('#reset').disabled=false}};
  $('#mode').onclick=()=>login();
 }
}
const nav=['Dashboard','Daily cash','Products','Stock','Expenses','Weekly count','Sales','Team','Manage Store'];
const mobilePrimaryNav=['Dashboard','Daily cash','Products','Stock'];
const navIcons={Dashboard:'⌂','Daily cash':'💵',Products:'🍦',Stock:'▦'};
function closeMobileMore(){const menu=$('#more-menu'),scrim=$('#more-scrim'),button=$('#more-nav');if(menu)menu.hidden=true;if(scrim)scrim.hidden=true;if(button)button.setAttribute('aria-expanded','false')}
function toggleMobileMore(){const menu=$('#more-menu'),scrim=$('#more-scrim'),button=$('#more-nav');if(!menu||!scrim||!button)return;const open=menu.hidden;menu.hidden=!open;scrim.hidden=!open;button.setAttribute('aria-expanded',String(open))}

async function boot(){
 const sessionResult=await db.auth.getSession();
 if(sessionResult.error){
  const last=localStorage.getItem('janushan.lastUser');
  if(!navigator.onLine&&last&&restoreSnapshot(last)){layout();toast(tr('OfflineReadOnly'));return}
  throw sessionResult.error;
 }
 const session=sessionResult.data?.session;
 if(authRecoveryActive){if(session){login('new-password');return}login('login',tr('RecoveryLinkInvalid'));return}
 if(!session){
  const last=localStorage.getItem('janushan.lastUser');
  if(!navigator.onLine&&last&&restoreSnapshot(last)){layout();toast(tr('OfflineReadOnly'));return}
  login();return;
 }
 user=session.user;
 localStorage.setItem('janushan.lastUser',user.id);
 pendingSales=loadPendingSales(user.id);
 if(!navigator.onLine&&restoreSnapshot(user.id)){layout();toast(tr('OfflineReadOnly'));return}
 const {data,error}=await db.from('business_members').select('business_id,role,businesses(id,name)').eq('user_id',user.id);
 if(error){
  if(!navigator.onLine&&restoreSnapshot(user.id)){layout();toast(tr('OfflineReadOnly'));return}
  throw error;
 }
 if(!data?.length){setupBusiness();return}
 biz=data[0].businesses;role=data[0].role;
 if(!biz){setupBusiness();return}
 await load();
 await syncPendingSales();
 if(navigator.onLine)await load();
 layout();
}

function setupBusiness(){const logo='<img class="brand-logo" src="./assets/logo.webp" alt="Janushan Ice Cream logo" onerror="this.onerror=null;this.src=\'./icon.svg\'">';$('#app').innerHTML='<div class="login"><div class="login-card">'+logo+'<h2>'+tr('SetupBusiness')+'</h2>'+field(tr('BusinessName'),'business-name','text','Janushan Ice Cream')+'<button class="btn" id="create-business">'+tr('CreateBusiness')+'</button>'+languageButtons()+'</div></div>';bindLanguages();$('#create-business').onclick=async()=>{try{const name=$('#business-name').value.trim();if(name.length<2)throw Error(tr('BusinessName'));const {error}=await db.rpc('create_business',{p_name:name});if(error)throw error;await boot()}catch(e){toast(e.message)}}}

async function load(){
 const bid=biz.id;
 const [p,s,e,c,w,b,settings,dc,sm]=await Promise.all([
  db.from('products').select('*').eq('business_id',bid).order('name'),
  db.from('sales').select('*,sale_items(*)').eq('business_id',bid).order('sold_at',{ascending:false}).limit(500),
  db.from('expenses').select('*').eq('business_id',bid).order('spent_at',{ascending:false}).limit(500),
  db.from('cash_sessions').select('*').eq('business_id',bid).order('session_date',{ascending:false}).limit(90),
  db.from('stock_counts').select('*,stock_count_lines(*)').eq('business_id',bid).order('count_date',{ascending:false}).limit(90),
  db.rpc('get_stock_balances',{p_business_id:bid}),
  db.from('business_settings').select('*').eq('business_id',bid).maybeSingle(),
  db.from('daily_cash_entries').select('*').eq('business_id',bid).order('entry_date',{ascending:false}).limit(500),
  db.from('stock_movements').select('*').eq('business_id',bid).order('occurred_at',{ascending:false}).limit(5000)
 ]);
 for(const r of [p,s,e,c,w,b,settings,dc,sm])if(r.error)throw r.error;
 products=p.data||[];sales=s.data||[];expenses=e.data||[];sessions=c.data||[];counts=w.data||[];dailyCashEntries=dc.data||[];stockMovements=sm.data||[];
 storeSettings={...storeSettings,...(settings.data||{})};
 const sums=Object.fromEntries((b.data||[]).map(x=>[x.product_id,Number(x.on_hand)]));
 stock=products.map(x=>({...x,on_hand:sums[x.id]??0}));
 pendingSales=loadPendingSales(user.id);
 saveSnapshot();
}


function layout(){
 $('#app').innerHTML='<div class="shell"><aside class="side"><img class="side-logo" src="'+esc(mediaUrl(storeSettings.logo_path)||'./assets/logo.webp')+'" alt="Janushan Ice Cream" onerror="this.onerror=null;this.src=\'./icon.svg\'"><h3>JANUSHAN ICE CREAM<br><small>VAN MANAGER</small></h3><nav class="nav desktop-nav">'+nav.map(x=>'<button type="button" data-page="'+x+'" class="'+(x===page?'active':'')+'">'+tr(x)+'</button>').join('')+'</nav><nav class="mobile-nav" aria-label="Main navigation">'+mobilePrimaryNav.map(x=>'<button type="button" data-page="'+x+'" class="'+(x===page?'active':'')+'"><span class="nav-icon" aria-hidden="true">'+navIcons[x]+'</span><span class="nav-label">'+tr(x)+'</span></button>').join('')+'<button type="button" id="more-nav" class="'+(mobilePrimaryNav.includes(page)?'':'active')+'" aria-controls="more-menu" aria-expanded="false"><span class="nav-icon" aria-hidden="true">☰</span><span class="nav-label">'+tr('More')+'</span></button></nav><div class="more-scrim" id="more-scrim" hidden></div><div class="more-menu" id="more-menu" hidden role="menu">'+nav.filter(x=>!mobilePrimaryNav.includes(x)).map(x=>'<button type="button" role="menuitem" data-page="'+x+'">'+tr(x)+'</button>').join('')+'<div class="more-menu-tools">'+languageButtons()+'<button type="button" class="more-logout" id="mobile-logout">'+tr('Signout')+'</button></div></div></aside><main class="main"><header class="top"><b id="title">'+tr(page)+'</b><div class="top-actions"><span id="net-state" class="network-pill"></span>'+languageButtons()+' <button class="pill" id="logout">'+tr('Signout')+'</button></div></header><div class="content" id="view"></div></main></div>'
 document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{page=b.dataset.page;closeMobileMore();render()});
 bindLanguages();updateNetworkState();
 $('#more-nav').onclick=toggleMobileMore;
 $('#more-scrim').onclick=closeMobileMore;
 const handleLogout=async()=>{
  if(pendingSales.length&&!confirm(tr('PendingLogoutWarning')))return;
  const uid=user?.id;
  await db.auth.signOut();
  localStorage.removeItem('janushan.lastUser');
  if(uid)localStorage.removeItem(snapshotKey(uid));
  login();
 };
 $('#logout').onclick=handleLogout;
 $('#mobile-logout').onclick=handleLogout;
 render();
 applyAccessibilitySettings();
}

function table(headers,rows){return '<div class="scroll"><table><thead><tr>'+headers.map(x=>'<th>'+x+'</th>').join('')+'</tr></thead><tbody>'+(rows.length?rows.map(r=>'<tr>'+r.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join(''):'<tr><td colspan="'+headers.length+'" class="empty">'+tr('NoData')+'</td></tr>')+'</tbody></table></div>'}
function card(label,value,detail=''){return '<div class="card"><small>'+label+'</small><strong>'+value+'</strong>'+(detail?'<span class="card-detail">'+detail+'</span>':'')+'</div>'}


function dateOffset(days){const d=new Date();d.setDate(d.getDate()-days);return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Colombo'}).format(d)}
function periodSales(days){const start=days===0?today():dateOffset(days-1);return sales.filter(x=>colomboDate(x.sold_at)>=start&&colomboDate(x.sold_at)<=today())}
function saleNet(x){return Number(x.gross_total||0)-Number(x.discount_total||0)}
function knownGrossProfit(x){return (x.sale_items||[]).reduce((a,i)=>i.unit_cost_snapshot==null?a:a+Number(i.line_net_total??i.line_total??0)-Number(i.unit_cost_snapshot)*Number(i.quantity||0),0)}
function downloadCsv(filename,rows){const csv='\\uFEFF'+rows.map(r=>r.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\\r\\n');const u=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=u;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000)}
function printReceipt(saleId){const x=sales.find(s=>s.id===saleId);if(!x)return;const rows=(x.sale_items||[]).map(i=>'<tr><td>'+esc(i.product_name_snapshot)+'</td><td>'+i.quantity+'</td><td>'+money(i.unit_price_snapshot)+'</td><td>'+money(i.line_net_total??i.line_total)+'</td></tr>').join('');const w=window.open('','_blank','width=420,height=720');if(!w){toast('Allow pop-ups to print receipts.');return}w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Receipt #'+x.receipt_no+'</title><style>body{font:14px Arial;max-width:360px;margin:24px auto;color:#17243a}h1{text-align:center;font-size:22px}p{text-align:center;color:#64748b}table{width:100%;border-collapse:collapse;margin:18px 0}td,th{padding:8px 3px;border-bottom:1px dashed #cbd5e1;text-align:left;font-size:12px}.total{text-align:right;font-size:20px;font-weight:bold}</style></head><body><h1>'+esc(storeSettings.display_name||biz.name)+'</h1><p>ICE CREAM · SALES RECEIPT</p><p>Receipt #'+x.receipt_no+'<br>'+esc(dateTime(x.sold_at))+'</p><table><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>'+rows+'</table><p>Gross: '+money(x.gross_total)+'<br>Discount: '+money(x.discount_total)+'</p><div class="total">TOTAL '+money(saleNet(x))+'</div><p>Cash: '+money(x.cash_received)+'<br>Bank / QR: '+money(x.bank_received)+'<br>Credit: '+money(x.credit_amount)+'</p><p>'+esc(x.notes||'')+'</p><p>Thank you for choosing Janushan Ice Cream!</p><script>window.onload=()=>window.print()<\\/script></body></html>');w.document.close()}
function chartSvg(values){const w=680,h=190,p=22,max=Math.max(1,...values.map(x=>x.value)),pts=values.map((x,i)=>({x:p+i*(w-2*p)/Math.max(1,values.length-1),y:h-p-(x.value/max)*(h-2*p)})),path=pts.map((x,i)=>(i?'L':'M')+x.x.toFixed(1)+' '+x.y.toFixed(1)).join(' ');return '<svg class="sales-chart" viewBox="0 0 '+w+' '+h+'" role="img" aria-label="Sales trend"><defs><linearGradient id="salesFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#4f8cff" stop-opacity=".3"/><stop offset="100%" stop-color="#4f8cff" stop-opacity=".02"/></linearGradient></defs><path d="'+path+' L '+(w-p)+' '+(h-p)+' L '+p+' '+(h-p)+' Z" fill="url(#salesFill)"/><path d="'+path+'" fill="none" stroke="#3677ec" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'+pts.map(x=>'<circle cx="'+x.x+'" cy="'+x.y+'" r="4" fill="#fff" stroke="#3677ec" stroke-width="3"/>').join('')+'</svg>'}
function render(){
 if(!biz)return;
 $('#title').textContent=tr(page);
 document.querySelectorAll('.desktop-nav [data-page],.mobile-nav [data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
 const moreButton=$('#more-nav');if(moreButton)moreButton.classList.toggle('active',!mobilePrimaryNav.includes(page));
 const v=$('#view');if(!v)return;
 

if(page==='Dashboard'){
 const d=today(),entry=dailyCashEntries.find(x=>x.entry_date===d),todayExp=expenses.filter(x=>colomboDate(x.spent_at)===d),cashExpenses=todayExp.filter(x=>x.paid_from==='cash').reduce((a,x)=>a+Number(x.amount),0),bankExpenses=todayExp.filter(x=>x.paid_from==='bank').reduce((a,x)=>a+Number(x.amount),0),grossCash=entry?Number(entry.net_cash_after_expenses)+cashExpenses:null;
 const low=stock.filter(x=>x.active&&availableStock(x.id)<=Number(x.low_stock_threshold||0)),zero=stock.filter(x=>x.active&&availableStock(x.id)<=0),value=stock.reduce((a,x)=>a+Math.max(0,availableStock(x.id))*Number(x.unit_cost||0),0);
 const reviewed=counts.filter(x=>x.status==='reviewed').sort((a,b)=>a.count_date.localeCompare(b.count_date)),pair=reviewed.length>1?periodReconciliation(reviewed[reviewed.length-2],reviewed[reviewed.length-1]):null;
 const logo='<img class="dashboard-logo" src="'+esc(mediaUrl(storeSettings.logo_path)||'./assets/logo.webp')+'" alt="Janushan Ice Cream">',banner='<img class="menu-banner" src="'+esc(mediaUrl(storeSettings.banner_path)||'./assets/menu-banner.webp')+'" alt="'+tr('MenuReference')+'">',disabled=role==='viewer'?'disabled':'';
 v.innerHTML='<section class="dashboard-hero"><div class="dashboard-brand">'+logo+'<div><small class="eyebrow">'+tr('Today')+'</small><h1>'+tr('GoodDay')+'</h1><p>'+tr('DashboardSub')+'</p></div></div><button class="btn alt" id="refresh">'+tr('Refresh')+'</button></section><div class="dashboard-banner-frame">'+banner+'</div><section class="quick-actions-section"><h2>'+tr('QuickActions')+'</h2><div class="quick-actions-grid"><button class="quick-action" data-quick="cash" '+disabled+'>💵 '+tr('DailyCash')+'</button><button class="quick-action" data-quick="count" '+disabled+'>📦 '+tr('Count')+'</button><button class="quick-action" data-quick="expense" '+disabled+'>🧮 '+tr('Expense')+'</button><button class="quick-action" data-quick="product">🍦 '+tr('Products')+'</button></div></section><section class="analytics-panel panel"><div class="analytics-heading"><div><h2>'+tr('DailyCash')+'</h2><p>'+d+'</p></div><span class="tag">'+(entry?tr('CashEntrySaved'):tr('NoCashEntries'))+'</span></div><div class="cards analytics-cards">'+card(tr('CashRemaining'),entry?money(entry.net_cash_after_expenses):'—')+card(tr('CashExpense'),money(cashExpenses))+card(tr('GrossCash'),grossCash===null?'—':money(grossCash))+card(tr('TotalExpenses'),money(todayExp.reduce((a,x)=>a+Number(x.amount),0)))+'</div><p class="analytics-footnote">'+tr('DailyCashHelp')+'</p><button class="btn" id="enter-cash">'+tr('SaveCashEntry')+'</button></section><div class="cards today-cards">'+card(tr('Items'),products.filter(x=>x.active).length)+card(tr('ZeroStock'),zero.length)+card(tr('LowStock'),low.length)+card(tr('StockValue'),money(value))+card(tr('Expenses'),money(todayExp.reduce((a,x)=>a+Number(x.amount),0)))+'</div><section class="panel"><div class="row"><h3>'+tr('PeriodReconciliation')+'</h3><button class="pill" id="open-recon">'+tr('Weekly count')+'</button></div>'+(pair?'<p>'+pair.start+' → '+pair.end+'</p><div class="cards sales-summary">'+card(tr('ExpectedSales'),money(pair.expectedSales))+card(tr('GrossCash'),money(pair.grossCash))+card(tr('NetProfit'),money(pair.netProfit))+'</div>':'<p class="muted">'+tr('NoCountPair')+'</p>')+'</section><div class="insight-grid"><section class="panel"><h3>'+tr('StockHealth')+'</h3><div class="stock-health"><div><strong>'+products.filter(x=>x.active).length+'</strong>'+tr('ActiveOnly')+'</div><div><strong>'+zero.length+'</strong>'+tr('ZeroStock')+'</div><div><strong>'+low.length+'</strong>'+tr('LowStock')+'</div></div>'+(low.length?table([tr('Product'),tr('Available')],low.slice(0,5).map(x=>[esc(x.name),availableStock(x.id)])):'<p class="empty-note">'+tr('NoLowStockAlerts')+'</p>')+'</section><section class="panel"><h3>'+tr('Recent')+'</h3>'+table([tr('Date'),tr('Category'),tr('Amount')],todayExp.slice(0,5).map(x=>[dateTime(x.spent_at),esc(x.category),money(x.amount)]))+'</section></div>';
 $('#enter-cash').onclick=()=>{page='Daily cash';render()};$('#open-recon').onclick=()=>{page='Weekly count';render()};
 document.querySelectorAll('[data-quick]').forEach(b=>b.onclick=()=>{if(b.disabled)return;const a=b.dataset.quick;if(a==='cash'){page='Daily cash';render()}else if(a==='count'){page='Weekly count';render()}else if(a==='expense')expenseModal();else{page='Products';render()}});
 $('#refresh').onclick=async()=>{if(!navigator.onLine)return toast(tr('Offline'));try{await load();render()}catch(e){toast(e.message)}};
}
else if(page==='Products'){
  const cards=stock.map(x=>'<article class="product-card" data-product-card data-search="'+esc((x.name+' '+(x.category||'')).toLowerCase())+'"><div class="product-photo-stage"><img src="'+esc(mediaUrl(x.image_url)||'./assets/cone.webp')+'" alt="'+esc(x.name)+'" loading="lazy" onerror="this.onerror=null;this.src=\'./assets/cone.webp\'"></div><div class="product-info"><div class="product-title-line"><h3>'+esc(x.name)+'</h3>'+(x.active?'<span class="tag">Active</span>':'<span class="tag warn">'+tr('Archived')+'</span>')+'</div><p class="product-category">'+esc(x.category||tr('Product'))+'</p><div class="product-meta"><strong class="product-price">'+money(x.selling_price)+'</strong><span class="stock-chip">'+tr('Available')+': '+availableStock(x.id)+' '+esc(x.unit||'pcs')+'</span></div>'+(role!=='viewer'?'<div class="product-actions"><button type="button" class="btn alt" data-edit-product="'+x.id+'">'+tr('Edit')+'</button><button type="button" class="pill" data-toggle-product="'+x.id+'">'+(x.active?tr('Archive'):tr('Restore'))+'</button></div>':'')+'</div></article>').join('');
  v.innerHTML='<div class="page-heading"><div><h1>'+tr('Products')+'</h1><p class="muted">'+tr('ProductManagementSub')+'</p></div>'+(role!=='viewer'?'<button class="btn" id="add">＋ '+tr('AddProduct')+'</button>':'')+'</div><label class="product-search"><span class="sr-only">'+tr('SearchProducts')+'</span><input id="product-filter" type="search" placeholder="'+tr('SearchProducts')+'" autocomplete="off"></label>'+(cards?'<div class="product-grid">'+cards+'</div>':'<section class="empty-catalogue panel"><div class="empty-catalogue-icon" aria-hidden="true">🍦</div><div><h2>'+tr('StartCatalogue')+'</h2><p class="muted">'+tr('StartCatalogueHelp')+'</p></div>'+(role!=='viewer'?'<button class="btn" id="empty-add">'+tr('AddProduct')+'</button>':'')+'</section>');
  if(role!=='viewer'){$('#add')?.addEventListener('click',productModal);$('#empty-add')?.addEventListener('click',productModal);document.querySelectorAll('[data-edit-product]').forEach(b=>b.onclick=()=>editProductModal(b.dataset.editProduct));document.querySelectorAll('[data-toggle-product]').forEach(b=>b.onclick=async()=>{const p=products.find(x=>x.id===b.dataset.toggleProduct);if(!p)return;if(!confirm(p.active?tr('ConfirmArchive'):tr('ConfirmRestore')))return;const {error}=await db.rpc('set_product_active',{p_product_id:p.id,p_business_id:biz.id,p_active:!p.active});if(error)toast(error.message);else{await load();render()}})}
  $('#product-filter').oninput=()=>{const q=$('#product-filter').value.trim().toLowerCase();document.querySelectorAll('[data-product-card]').forEach(c=>{c.hidden=!c.dataset.search.includes(q)})};
 }
 
else if(page==='Stock'){
 const q=(window.janStockSearch||'').toLowerCase(),low=!!window.janStockLowOnly,filtered=stock.filter(x=>(!q||(x.name+' '+(x.category||'')).toLowerCase().includes(q))&&(!low||availableStock(x.id)<=Number(x.low_stock_threshold||0))),value=filtered.reduce((a,x)=>a+Math.max(0,availableStock(x.id))*Number(x.unit_cost||0),0);
 v.innerHTML='<div class="page-heading"><div><h1>'+tr('Stock')+'</h1><p class="muted">'+tr('StockValue')+': '+money(value)+'</p></div></div><div class="sales-toolbar"><input id="stock-search" type="search" placeholder="'+tr('SearchStock')+'" value="'+esc(window.janStockSearch||'')+'"><label class="filter-check"><input id="stock-low" type="checkbox" '+(low?'checked':'')+'> '+tr('LowOnly')+'</label></div><div class="cards sales-summary">'+card(tr('Inventory'),filtered.length)+card(tr('LowStock'),filtered.filter(x=>availableStock(x.id)<=Number(x.low_stock_threshold||0)).length)+card(tr('ZeroStock'),filtered.filter(x=>availableStock(x.id)<=0).length)+card(tr('StockValue'),money(value))+'</div><section class="panel">'+table([tr('Product'),tr('Available'),tr('Threshold'),tr('StockStatus'),tr('StockValue'),''],filtered.map(x=>[esc(x.name),availableStock(x.id),x.low_stock_threshold,availableStock(x.id)<=0?'<span class="tag warn">'+tr('ZeroStock')+'</span>':availableStock(x.id)<=x.low_stock_threshold?'<span class="tag warn">'+tr('LowStock')+'</span>':'<span class="tag">'+tr('InStock')+'</span>',money(Math.max(0,availableStock(x.id))*Number(x.unit_cost||0)),role!=='viewer'?'<button class="pill" data-adj="'+x.id+'">'+tr('Adjust')+'</button>':'']))+'</section>';
 $('#stock-search').oninput=()=>{window.janStockSearch=$('#stock-search').value;const p=$('#stock-search').selectionStart;render();$('#stock-search').focus();$('#stock-search').setSelectionRange(p,p)};
 $('#stock-low').onchange=()=>{window.janStockLowOnly=$('#stock-low').checked;render()};
 document.querySelectorAll('[data-adj]').forEach(b=>b.onclick=()=>adjustModal(b.dataset.adj));
}
else if(page==='Historical sales'){
 const q=(window.janSalesSearch||'').toLowerCase(),days=window.janSalesRange??30,rows=days===-1?sales:periodSales(days),filtered=rows.filter(x=>String(x.receipt_no).includes(q)||(x.sale_items||[]).some(i=>String(i.product_name_snapshot||'').toLowerCase().includes(q)));
 v.innerHTML='<div class="page-heading"><div><h1>'+tr('Sales')+'</h1><p class="muted">'+tr('SaleDetails')+'</p></div>'+'</div><div class="sales-toolbar"><input id="sales-search" type="search" placeholder="'+tr('SearchSales')+'" value="'+esc(window.janSalesSearch||'')+'"><select id="sales-range"><option value="0" '+(days===0?'selected':'')+'>'+tr('TodayOnly')+'</option><option value="7" '+(days===7?'selected':'')+'>'+tr('Last7Days')+'</option><option value="30" '+(days===30?'selected':'')+'>'+tr('Last30Days')+'</option><option value="-1" '+(days===-1?'selected':'')+'>All time</option></select><button class="btn alt" id="export-sales">'+tr('ExportCSV')+'</button></div><div class="cards sales-summary">'+card(tr('GrossSales'),money(filtered.reduce((a,x)=>a+Number(x.gross_total),0)))+card(tr('NetSales'),money(filtered.reduce((a,x)=>a+saleNet(x),0)))+card(tr('TotalItems'),filtered.reduce((a,x)=>a+(x.sale_items||[]).reduce((n,i)=>n+Number(i.quantity||0),0),0))+'</div><section class="panel">'+table([tr('Receipt'),tr('Date'),tr('Payment'),tr('Gross'),tr('Discount'),tr('Net'),tr('Print')],filtered.map(x=>['#'+x.receipt_no,dateTime(x.sold_at),tr(x.payment_method),money(x.gross_total),money(x.discount_total),money(saleNet(x)),'<button class="pill" data-print="'+x.id+'">'+tr('Print')+'</button>']))+'</section>'+(pendingSales.length?'<section class="panel"><h3>'+tr('PendingSales')+'</h3>'+table([tr('Date'),tr('Product'),tr('Net'),tr('Status'),''],pendingSales.map(x=>{const names=(x.priceSnapshot||[]).map(p=>esc(p.name)).join(', '),amount=(x.priceSnapshot||[]).reduce((a,p)=>{const line=(x.payload.p_items||[]).find(i=>i.product_id===p.product_id);return a+Number(p.price||0)*Number(line?.quantity||0)},0)-Number(x.payload.p_discount||0);return [dateTime(x.payload.p_sold_at),names,money(amount),'<span class="tag">'+tr('PendingSync')+'</span>','<button class="pill" data-remove-pending="'+esc(x.id)+'">'+tr('Remove')+'</button>']}))+'</section>':'');
 if(role!=='viewer')$('#addsale')?.remove();
 $('#sales-search').oninput=()=>{window.janSalesSearch=$('#sales-search').value;const p=$('#sales-search').selectionStart;render();$('#sales-search').focus();$('#sales-search').setSelectionRange(p,p)};
 $('#sales-range').onchange=()=>{window.janSalesRange=Number($('#sales-range').value);render()};
 $('#export-sales').onclick=()=>downloadCsv('janushan-sales-'+today()+'.csv',[['Receipt','Date','Payment','Gross LKR','Discount LKR','Net LKR','Cash LKR','Bank LKR','Credit LKR','Notes'],...filtered.map(x=>[x.receipt_no,x.sold_at,x.payment_method,x.gross_total,x.discount_total,saleNet(x),x.cash_received,x.bank_received,x.credit_amount,x.notes||''])]);
 document.querySelectorAll('[data-print]').forEach(b=>b.onclick=()=>printReceipt(b.dataset.print));
 document.querySelectorAll('[data-remove-pending]').forEach(b=>b.onclick=()=>{if(confirm(tr('PendingRemovalWarning'))){savePendingSales(pendingSales.filter(x=>x.id!==b.dataset.removePending));render()}});
}
else if(page==='Expenses'){
  v.innerHTML='<div class="row"><h1>'+tr('Expenses')+'</h1>'+(role!=='viewer'?'<button class="btn" id="addexp">'+tr('Expense')+'</button>':'')+'</div><section class="panel">'+table([tr('Date'),tr('Category'),tr('Description'),tr('Paid'),tr('Amount')],expenses.map(x=>[dateTime(x.spent_at),esc(x.category),esc(x.description),tr(x.paid_from),money(x.amount)]))+'</section>';
  if(role!=='viewer')$('#addexp').onclick=expenseModal;
 }
 else if(page==='Daily cash')dailyCashPage(v);
 else if(page==='Cash book')dailyCashPage(v);
 else if(page==='Weekly count')countPage(v);
 else if(page==='Team')teamPage(v);
 else if(page==='Manage Store')storePage(v);
}



function mediaUrl(path){if(!path)return null;if(/^https:\/\//i.test(path))return path;if(path.startsWith('./'))return path;return db.storage.from('janushan-media').getPublicUrl(path).data.publicUrl}
async function uploadStoreImage(file,kind,productId){
 if(!file)throw Error('Choose an image first.');
 if(!['image/jpeg','image/png','image/webp'].includes(file.type))throw Error('Please use JPG, PNG or WebP images.');
 if(file.size>6*1024*1024)throw Error('Image must be 6 MB or smaller.');
 const ext=file.type==='image/png'?'png':file.type==='image/webp'?'webp':'jpg';
 const path=kind==='products'?biz.id+'/products/'+productId+'/'+crypto.randomUUID()+'.'+ext:biz.id+'/branding/'+kind+'-'+crypto.randomUUID()+'.'+ext;
 const {error}=await db.storage.from('janushan-media').upload(path,file,{contentType:file.type,upsert:false,cacheControl:'31536000'});
 if(error)throw error;return path;
}
function applyAccessibilitySettings(){const root=document.documentElement;root.dataset.theme=storeSettings.theme||'blue';root.style.setProperty('--font-scale',String(Number(storeSettings.font_scale)||1.12));root.classList.toggle('reduce-motion',!!storeSettings.reduce_motion)}
function editProductModal(pid){
 const p=products.find(x=>x.id===pid);if(!p)return;
 const body='<div class="edit-photo-wrap"><img id="edit-photo-preview" class="edit-photo" src="'+esc(mediaUrl(p.image_url)||'./assets/cone.webp')+'" alt="'+esc(p.name)+'" onerror="this.onerror=null;this.src=\'./icon.svg\'"><label class="btn alt upload-label">'+tr('ChangePhoto')+'<input id="edit-photo-file" type="file" accept="image/jpeg,image/png,image/webp" hidden></label></div><div class="grid2">'+field(tr('Name'),'ep-name','text',p.name,'maxlength="100"')+field(tr('Category'),'ep-category','text',p.category||'')+field(tr('Price'),'ep-price','number',p.selling_price,'min="0" step=".01"')+field(tr('Cost'),'ep-cost','number',p.unit_cost??'','min="0" step=".01"')+field(tr('Unit'),'ep-unit','text',p.unit||'pcs','maxlength="20"')+field(tr('Threshold'),'ep-threshold','number',p.low_stock_threshold,'min="0"')+'</div><p class="muted">'+tr('ImageHelp')+'</p>';
 modal(tr('EditProduct'),body,async()=>{
  const name=$('#ep-name').value.trim(),price=Number($('#ep-price').value),cost=$('#ep-cost').value===''?null:Number($('#ep-cost').value),threshold=Number($('#ep-threshold').value),unit=$('#ep-unit').value.trim();
  if(name.length<2||!Number.isFinite(price)||price<0||cost!==null&&(!Number.isFinite(cost)||cost<0)||!Number.isInteger(threshold)||threshold<0||!unit)throw Error(tr('CheckProduct'));
  let imagePath=p.image_url;const file=$('#edit-photo-file').files[0];if(file)imagePath=await uploadStoreImage(file,'products',pid);
  const {error}=await db.rpc('update_product_details',{p_product_id:pid,p_business_id:biz.id,p_name:name,p_category:$('#ep-category').value,p_selling_price:price,p_unit_cost:cost,p_unit:unit,p_low_stock_threshold:threshold,p_image_url:imagePath});if(error)throw error;
  await load();render();toast(tr('ProductUpdated'));
 });
 $('#edit-photo-file').onchange=()=>{const file=$('#edit-photo-file').files[0];if(file)$('#edit-photo-preview').src=URL.createObjectURL(file)};
}
async function storePage(v){
 const owner=role==='owner';
 v.innerHTML='<div class="store-heading"><div><h1>'+tr('ManageStore')+'</h1><p class="muted">'+tr('ManageStoreSub')+'</p></div><span class="tag">'+(owner?tr('OwnerControls'):tr('ReadOnly'))+'</span></div><div class="store-grid"><section class="panel"><h2>'+tr('Branding')+'</h2><div class="brand-preview"><img id="store-logo-preview" class="store-logo-preview" src="'+esc(mediaUrl(storeSettings.logo_path)||'./assets/logo.webp')+'" alt="Logo" onerror="this.onerror=null;this.src=\'./icon.svg\'"><div><strong>'+esc(storeSettings.display_name||biz.name)+'</strong><small>'+tr('LivePreview')+'</small></div></div><label class="field">'+tr('StoreName')+'<input id="store-name" value="'+esc(biz.name)+'" maxlength="80" '+(owner?'':'disabled')+'></label><label class="field">'+tr('BannerImage')+'<input id="store-banner-file" type="file" accept="image/jpeg,image/png,image/webp" '+(owner?'':'disabled')+'></label><img id="banner-preview" class="banner-preview" src="'+esc(mediaUrl(storeSettings.banner_path)||'./assets/menu-banner.webp')+'" alt="Banner preview"><label class="field">'+tr('LogoImage')+'<input id="store-logo-file" type="file" accept="image/jpeg,image/png,image/webp" '+(owner?'':'disabled')+'></label><label class="field">'+tr('Theme')+'<select id="store-theme" '+(owner?'':'disabled')+'><option value="blue">Janushan Blue</option><option value="berry">Berry Pink</option><option value="cream">Vanilla Cream</option></select></label><button class="btn" id="save-brand" '+(owner?'':'disabled')+'>'+tr('SaveChanges')+'</button></section><section class="panel"><h2>'+tr('Accessibility')+'</h2><p class="muted">'+tr('AccessibilitySub')+'</p><label class="field">'+tr('TextSize')+'<select id="font-scale" '+(owner?'':'disabled')+'><option value="1">Standard</option><option value="1.12">Large</option><option value="1.25">Extra large</option><option value="1.35">Very large</option></select></label><label class="switch-row"><input id="reduce-motion" type="checkbox" '+(storeSettings.reduce_motion?'checked':'')+' '+(owner?'':'disabled')+'><span>'+tr('ReduceMotion')+'</span></label><p class="muted">'+tr('MotionHelp')+'</p><div class="preview-buttons"><button class="btn alt" id="preview-large">'+tr('PreviewText')+'</button><button class="btn alt" id="preview-motion">'+tr('PreviewEffects')+'</button></div><hr><h2>'+tr('Language')+'</h2><p class="muted">'+tr('LanguageHelp')+'</p>'+languageButtons()+'</section></div><section class="panel"><h2>'+tr('ProductManagement')+'</h2><p class="muted">'+tr('ProductManagementSub')+'</p><div class="store-shortcuts"><button class="btn" id="store-add-product">'+tr('AddProduct')+'</button><button class="btn alt" id="store-products">'+tr('ViewProducts')+'</button></div></section>';
 $('#store-theme').value=storeSettings.theme||'blue';$('#font-scale').value=String(storeSettings.font_scale||1.12);bindLanguages();
  $('#store-banner-file').onchange=()=>{const f=$('#store-banner-file').files[0];if(f)$('#banner-preview').src=URL.createObjectURL(f)};
  $('#store-logo-file').onchange=()=>{const f=$('#store-logo-file').files[0];if(f)$('#store-logo-preview').src=URL.createObjectURL(f)};
  $('#store-theme').onchange=()=>{document.documentElement.dataset.theme=$('#store-theme').value};
  $('#font-scale').onchange=()=>document.documentElement.style.setProperty('--font-scale',$('#font-scale').value);
  $('#reduce-motion').onchange=()=>document.documentElement.classList.toggle('reduce-motion',$('#reduce-motion').checked);
  $('#preview-large').onclick=()=>document.documentElement.style.setProperty('--font-scale','1.25');
  $('#preview-motion').onclick=()=>{const img=$('#store-logo-preview');if(!img)return;img.classList.remove('motion-preview');void img.offsetWidth;img.classList.add('motion-preview')};
 $('#store-products').onclick=()=>{page='Products';render()};$('#store-add-product').onclick=()=>productModal();
 if(owner)$('#save-brand').onclick=async()=>{const b=$('#save-brand');b.disabled=true;try{
  let banner=storeSettings.banner_path||'',logo=storeSettings.logo_path||'';
  if($('#store-banner-file').files[0])banner=await uploadStoreImage($('#store-banner-file').files[0],'banner');
  if($('#store-logo-file').files[0])logo=await uploadStoreImage($('#store-logo-file').files[0],'logo');
  const name=$('#store-name').value.trim();
  const {error}=await db.rpc('save_business_settings',{p_business_id:biz.id,p_display_name:name,p_banner_path:banner,p_logo_path:logo,p_theme:$('#store-theme').value,p_font_scale:Number($('#font-scale').value),p_reduce_motion:$('#reduce-motion').checked});
  if(error)throw error;await load();layout();toast(tr('SettingsSaved'));
 }catch(e){toast(e.message)}finally{b.disabled=false}};
}

function productModal(){
 const chooser='<label class="field"><span>'+tr('Image')+'</span><input id="pi" type="file" accept="image/jpeg,image/png,image/webp"></label><img id="photo-preview" class="photo-preview" src="./assets/cone.webp" alt="" onerror="this.onerror=null;this.src=\'./icon.svg\'">';
 modal(tr('Add')+' '+tr('Products'),'<div class="grid2">'+field(tr('Name'),'pn')+field(tr('Category'),'pc')+field(tr('Price'),'pp','number','0','min="0" step=".01"')+field(tr('Cost'),'pk','number','0','min="0" step=".01"')+field(tr('Unit'),'pu','text','pcs')+field(tr('Threshold'),'pt','number','5','min="0"')+field(tr('Opening'),'po','number','0','min="0"')+chooser+'</div>',async()=>{
  const name=$('#pn').value.trim(),price=Number($('#pp').value),opening=Number($('#po').value);
  if(name.length<2)throw Error(tr('Name'));
  if(!Number.isFinite(price)||price<0||!Number.isInteger(opening)||opening<0)throw Error('Check the price and opening stock.');
  const pid=id();
  const {error}=await db.rpc('create_product_with_opening_stock',{p_product_id:pid,p_business_id:biz.id,p_name:name,p_category:$('#pc').value,p_selling_price:price,p_unit_cost:Number($('#pk').value)||null,p_unit:$('#pu').value,p_low_stock_threshold:Number($('#pt').value),p_opening_quantity:opening});
  if(error)throw error;
  let imagePath=null;const photo=$('#pi').files[0];if(photo)imagePath=await uploadStoreImage(photo,'products',pid);
  const imageResult=await db.rpc('set_product_image',{p_product_id:pid,p_business_id:biz.id,p_image_url:imagePath});
  if(imageResult.error)throw imageResult.error;
  await load();render();
 });
 $('#pi').onchange=()=>{const file=$('#pi').files[0];if(file)$('#photo-preview').src=URL.createObjectURL(file)};
}

function adjustModal(pid){let p=products.find(x=>x.id===pid);modal('Stock movement · '+esc(p.name),'<div class="grid2"><label class="field">Movement<select id="mt"><option value="received">Received</option><option value="damaged">Damaged</option><option value="free">Free item</option><option value="return_in">Customer return</option><option value="return_out">Return to supplier</option><option value="adjustment_in">Adjustment in</option><option value="adjustment_out">Adjustment out</option></select></label>'+field('Quantity','mq','number','1','min="1"')+field(tr('Reason'),'mr')+'</div><p>Current: '+stock.find(x=>x.id===pid).on_hand+'</p>',async()=>{let typ=$('#mt').value,n=Math.abs(+$('#mq').value),neg=['damaged','free','return_out','adjustment_out'].includes(typ);let {error}=await db.rpc('add_stock_movement',{p_movement_id:id(),p_business_id:biz.id,p_product_id:pid,p_movement_type:typ,p_quantity_delta:neg?-n:n,p_reason:$('#mr').value,p_unit_cost:p.unit_cost});if(error)throw error;await load();render()})}

function saleModal(){
 if(!products.some(p=>p.active&&availableStock(p.id)>0))return toast(tr('AddProductsFirst'));
 const items=[];
 const productOptions=products.filter(p=>p.active&&availableStock(p.id)>0).map(p=>'<option value="'+p.id+'">'+esc(p.name)+' · '+money(p.selling_price)+' · '+tr('Available')+' '+availableStock(p.id)+'</option>').join('');
 modal(tr('NewSale'),'<label class="field">'+tr('Product')+'<select id="sp">'+productOptions+'</select></label>'+field(tr('Qty'),'sq','number','1','min="1" step="1"')+'<button class="btn alt" type="button" id="cartadd">'+tr('Add')+'</button><div class="cart-lines" id="cartlines">'+tr('NoData')+'</div>'+field(tr('Discount'),'sd','number','0','min="0" step=".01"')+'<label class="field">'+tr('Payment')+'<select id="sm"><option value="cash">'+tr('cash')+'</option><option value="bank_qr">'+tr('bank_qr')+'</option><option value="credit">'+tr('credit')+'</option><option value="mixed">'+tr('mixed')+'</option></select></label><div id="split"></div>'+field(tr('Description'),'sn'),async()=>{
  if(!items.length)throw Error(tr('AddItemsFirst'));
  const gross=items.reduce((a,x)=>a+x.price*x.quantity,0),discount=Number($('#sd').value)||0;
  if(discount<0||discount>gross)throw Error(tr('InvalidDiscount'));
  const net=Number((gross-discount).toFixed(2)),method=$('#sm').value;
  const cash=method==='cash'?net:method==='mixed'?Number($('#sc').value)||0:0;
  const bank=method==='bank_qr'?net:method==='mixed'?Number($('#sb').value)||0:0;
  const credit=method==='credit'?net:method==='mixed'?Number($('#scr').value)||0:0;
  if(Math.round((cash+bank+credit)*100)!==Math.round(net*100))throw Error(tr('PaymentSplitInvalid'));
  const payload={p_sale_id:id(),p_business_id:biz.id,p_payment_method:method,p_items:items.map(x=>({product_id:x.id,quantity:x.quantity})),p_discount:discount,p_cash_received:cash,p_bank_received:bank,p_credit_amount:credit,p_notes:$('#sn').value,p_sold_at:new Date().toISOString()};
  const queueItem={id:payload.p_sale_id,payload,priceSnapshot:items.map(x=>({product_id:x.id,name:x.name,price:x.price})),status:'pending',createdAt:new Date().toISOString()};
  if(!navigator.onLine){
   savePendingSales([...pendingSales,queueItem]);render();toast(tr('OfflineQueued'));return;
  }
  const {error}=await db.rpc('record_sale',payload);
  if(error){
   if(isNetworkError(error)){savePendingSales([...pendingSales,queueItem]);render();toast(tr('OfflineQueued'));return}
   throw error;
  }
  await load();render();
 },{allowOffline:true});
 function update(){
  const c=$('#cartlines');if(c)c.innerHTML=items.map(x=>'<div class="cart-line"><div><strong>'+esc(x.name)+'</strong><small>'+x.quantity+' × '+money(x.price)+'</small></div><strong>'+money(x.price*x.quantity)+'</strong><button type="button" class="pill" data-cart-remove="'+x.id+'">×</button></div>').join('')||'<p class="empty-note">'+tr('NoData')+'</p>';document.querySelectorAll('[data-cart-remove]').forEach(b=>b.onclick=()=>{const i=items.findIndex(x=>x.id===b.dataset.cartRemove);if(i>=0)items.splice(i,1);update()});
  const s=$('#split');if(s)s.innerHTML=$('#sm').value==='mixed'?field(tr('Cash'),'sc','number','0','min="0" step=".01"')+field(tr('Bank'),'sb','number','0','min="0" step=".01"')+field(tr('Credit'),'scr','number','0','min="0" step=".01"'):'';
 }
 $('#cartadd').onclick=()=>{
  const p=products.find(x=>x.id===$('#sp').value),q=Number($('#sq').value),available=availableStock(p.id),old=items.find(x=>x.id===p.id);
  if(!Number.isInteger(q)||q<1||q+(old?.quantity||0)>available)return toast(tr('InsufficientStock'));
  if(old)old.quantity+=q;else items.push({id:p.id,name:p.name,price:Number(p.selling_price),quantity:q});
  update();
 };
 $('#sm').onchange=update;update();
}

function expenseModal(){modal(tr('Expense'),'<div class="grid2">'+field(tr('Amount'),'ea','number','0','min=".01" step=".01"')+'<label class="field">Category<select id="ec"><option>Fuel</option><option>Maintenance</option><option>Ice</option><option>Packaging</option><option>Food</option><option>Other</option></select></label><label class="field">Paid from<select id="ef"><option value="cash">Cash</option><option value="bank">Bank</option></select></label>'+field(tr('Description'),'ed')+'</div>',async()=>{let {error}=await db.rpc('record_expense',{p_expense_id:id(),p_business_id:biz.id,p_amount:+$('#ea').value,p_category:$('#ec').value,p_description:$('#ed').value,p_paid_from:$('#ef').value,p_spent_at:new Date().toISOString()});if(error)throw error;await load();render()})}
function dailyCashPage(v){
 const d=today(),entry=dailyCashEntries.find(x=>x.entry_date===d);
 const rows=dailyCashEntries.slice(0,30);
 const body='<div class="cash-entry-hero"><div class="cash-entry-icon">💵</div><div><h2>'+tr('CashRemaining')+'</h2><p>'+tr('DailyCashHelp')+'</p></div></div><section class="panel cash-entry-panel"><label class="field"><span>'+tr('CashDate')+'</span><input id="dc-date" type="date" value="'+d+'" max="'+d+'"></label>'+field(tr('CashRemaining'),'dc-amount','number',entry?.net_cash_after_expenses??'','min="0" step=".01" placeholder="0.00"')+field(tr('CashNote'),'dc-note','text',entry?.notes||'','maxlength="250"')+'<button class="btn cash-save" id="save-daily-cash">'+tr('SaveCashEntry')+'</button></section><section class="panel"><h2>'+tr('CashEntries')+'</h2>'+table([tr('Date'),tr('NetCash'),tr('CashExpense'),tr('GrossCash')],rows.map(x=>{const exp=expenses.filter(e=>e.paid_from==='cash'&&colomboDate(e.spent_at)===x.entry_date).reduce((a,e)=>a+Number(e.amount),0);return [x.entry_date,money(x.net_cash_after_expenses),money(exp),money(Number(x.net_cash_after_expenses)+exp)]}))+'</section>';
 v.innerHTML='<div class="page-heading"><div><h1>'+tr('DailyCash')+'</h1><p class="muted">'+tr('DailyCashHelp')+'</p></div></div>'+body;
 $('#dc-date').onchange=()=>{const e=dailyCashEntries.find(x=>x.entry_date===$('#dc-date').value);$('#dc-amount').value=e?.net_cash_after_expenses??'';$('#dc-note').value=e?.notes||''};
 $('#save-daily-cash').onclick=async()=>{const date=$('#dc-date').value,amount=Number($('#dc-amount').value);if(!date||!Number.isFinite(amount)||amount<0)return toast(tr('Amount'));const b=$('#save-daily-cash');b.disabled=true;try{const {error}=await db.rpc('save_daily_cash_entry',{p_entry_id:id(),p_business_id:biz.id,p_entry_date:date,p_net_cash_after_expenses:amount,p_notes:$('#dc-note').value});if(error)throw error;await load();render();toast(tr('CashEntrySaved'))}catch(e){toast(e.message)}finally{b.disabled=false}};
}
function periodReconciliation(opening,closing){
 const start=opening.count_date,end=closing.count_date;
 const startAt=new Date(start+'T00:00:00+05:30'),periodStart=new Date(new Date(start+'T00:00:00+05:30').getTime()+86400000),endAt=new Date(end+'T23:59:59+05:30');
 const openLines=opening.stock_count_lines||[],closeLines=closing.stock_count_lines||[];
 const lines=closeLines.map(c=>{const o=openLines.find(x=>x.product_id===c.product_id);const p=products.find(x=>x.id===c.product_id);const moves=stockMovements.filter(m=>m.product_id===c.product_id&&new Date(m.occurred_at)>=periodStart&&new Date(m.occurred_at)<=endAt);
 const received=moves.filter(m=>['opening','received','return_in'].includes(m.movement_type)).reduce((a,m)=>a+Number(m.quantity_delta),0);
 const removed=moves.filter(m=>['damaged','free','return_out'].includes(m.movement_type)).reduce((a,m)=>a+Math.abs(Number(m.quantity_delta)),0);
 const openingQty=Number(o?.actual_quantity||0),sold=Math.max(0,openingQty+received-removed-Number(c.actual_quantity));
 const price=Number(c.selling_price_snapshot??p?.selling_price??0),cost=Number(c.unit_cost_snapshot??p?.unit_cost??0);
 return {name:p?.name||'Archived product',sold,price,cost,received,removed,revenue:sold*price,cogs:sold*cost,variance:Number(c.variance||0),costKnown:c.unit_cost_snapshot!=null||p?.unit_cost!=null};
 }).filter(Boolean);
 const expectedSales=lines.reduce((a,x)=>a+x.revenue,0),cogs=lines.reduce((a,x)=>a+x.cogs,0);
 const cashRows=dailyCashEntries.filter(x=>x.entry_date>start&&x.entry_date<=end);
 const cashNet=cashRows.reduce((a,x)=>a+Number(x.net_cash_after_expenses),0);
 const cashExpenses=expenses.filter(x=>x.paid_from==='cash'&&colomboDate(x.spent_at)>start&&colomboDate(x.spent_at)<=end).reduce((a,x)=>a+Number(x.amount),0);
 const grossCash=cashNet+cashExpenses;
 const totalExpenses=expenses.filter(x=>colomboDate(x.spent_at)>start&&colomboDate(x.spent_at)<=end).reduce((a,x)=>a+Number(x.amount),0);
 const netProfit=expectedSales-cogs-totalExpenses;
 return {start,end,lines,expectedSales,cogs,cashNet,cashExpenses,grossCash,totalExpenses,netProfit,cashVariance:expectedSales-grossCash,received:lines.reduce((a,x)=>a+x.received,0),removed:lines.reduce((a,x)=>a+x.removed,0),units:lines.reduce((a,x)=>a+x.sold,0),missingCashDays:Math.max(0,(Math.round((endAt-startAt)/86400000)-1)-cashRows.length)};
}
function countPage(v){
 const reviewed=counts.filter(x=>x.status==='reviewed').sort((a,b)=>a.count_date.localeCompare(b.count_date));
 const opening=reviewed.length>1?reviewed[reviewed.length-2]:null,closing=reviewed.length?reviewed[reviewed.length-1]:null;
 const report=opening&&closing?periodReconciliation(opening,closing):null;
 const countRows=counts.map(x=>[x.count_date,tr(x.status==='reviewed'?'Reviewed':'Submitted'),x.stock_count_lines?.length||0,(x.stock_count_lines||[]).reduce((a,z)=>a+Number(z.variance||0),0)]);
 const reportHtml=report?'<section class="panel reconciliation-panel"><div class="recon-title"><div><h2>'+tr('PeriodReconciliation')+'</h2><p>'+report.start+' → '+report.end+'</p></div><span class="tag">'+tr('EstimateWarning')+'</span></div><div class="cards recon-cards">'+card(tr('ExpectedSales'),money(report.expectedSales))+card(tr('GrossCash'),money(report.grossCash))+card(tr('CashVariance'),money(report.cashVariance))+card(tr('NetProfit'),money(report.netProfit))+'</div><div class="recon-grid"><div><h3>'+tr('Stock movement')+'</h3>'+table([tr('Product'),tr('UnitsSold'),tr('ExpectedSales'),tr('CostOfGoods')],report.lines.map(x=>[esc(x.name),x.sold,money(x.revenue),money(x.cogs)]))+'</div><div><h3>'+tr('Cash and expenses')+'</h3>'+table([tr('Description'),tr('Amount')],[[tr('NetCash'),money(report.cashNet)],[tr('CashExpense'),money(report.cashExpenses)],[tr('GrossCash'),money(report.grossCash)],[tr('TotalExpenses'),money(report.totalExpenses)],[tr('CostOfGoods'),money(report.cogs)],[tr('NetProfit'),money(report.netProfit)]])+'</div></div><p class="muted">'+tr('EstimateWarning')+' '+(report.missingCashDays?('Missing daily cash entries: '+report.missingCashDays):'')+'</p><button class="btn alt" id="export-recon">'+tr('ExportCSV')+'</button></section>':'<section class="panel"><h2>'+tr('PeriodReconciliation')+'</h2><p>'+tr('NoCountPair')+'</p></section>';
 v.innerHTML='<div class="page-heading"><div><h1>'+tr('Weekly count')+'</h1><p class="muted">'+tr('ReconcileHint')+'</p></div><button class="btn" id="startcount">'+tr('Count')+'</button></div>'+reportHtml+'<section class="panel"><h2>'+tr('Historical counts')+'</h2>'+table([tr('Date'),tr('Status'),tr('Lines'),tr('Variance')],countRows)+'</section>';
 $('#startcount').onclick=()=>{const eligible=products.filter(p=>p.active||Number(stock.find(x=>x.id===p.id)?.on_hand||0)>0);if(!eligible.length)return toast(tr('AddProductsFirst'));let body='<p class="muted">'+tr('ReconcileHint')+'</p>'+eligible.map(p=>field(esc(p.name)+' ('+esc(p.unit||'pcs')+')','ct'+p.id,'number','0','min="0" step="1"')).join('');modal(tr('Weekly count'),body,async()=>{const lines=eligible.map(p=>({product_id:p.id,actual_quantity:Number($('#ct'+p.id).value)}));if(lines.some(x=>!Number.isInteger(x.actual_quantity)||x.actual_quantity<0))throw Error(tr('Actual'));const {error}=await db.rpc('submit_stock_count',{p_count_id:id(),p_business_id:biz.id,p_count_date:today(),p_lines:lines});if(error)throw error;await load();render()})};
 if(role==='owner')counts.filter(x=>x.status==='submitted').forEach(x=>{const b=document.createElement('button');b.className='btn alt review-count';b.textContent=tr('ApproveCount')+' · '+x.count_date;b.onclick=()=>modal(tr('ApproveCount'),field(tr('ReviewNotes'),'review-notes'),async()=>{const {error}=await db.rpc('review_stock_count',{p_count_id:x.id,p_business_id:biz.id,p_review_notes:$('#review-notes').value});if(error)throw error;await load();render()});v.querySelector('.panel').append(b)});
 if(report)$('#export-recon').onclick=()=>downloadCsv('janushan-reconciliation-'+report.start+'-'+report.end+'.csv',[['Product','Estimated units sold','Selling price','Expected sales','Unit cost','COGS'],...report.lines.map(x=>[x.name,x.sold,x.price,x.revenue,x.cost,x.cogs]),[],['Opening count',report.start],['Closing count',report.end],['Expected sales',report.expectedSales],['Gross cash collections',report.grossCash],['Cash variance',report.cashVariance],['COGS',report.cogs],['Expenses',report.totalExpenses],['Estimated net profit',report.netProfit]]);
}
async function teamPage(v){let {data,error}=await db.rpc('list_business_members',{p_business_id:biz.id});if(error)return v.innerHTML='<section class="panel">'+esc(error.message)+'</section>';v.innerHTML='<div class="row"><h1>'+tr('Team')+'</h1>'+(role==='owner'?'<button class="btn" id="addmember">Add member</button>':'')+'</div><section class="panel">'+table(['Email','Role','Joined',''],data.map(m=>[esc(m.email),m.role,new Date(m.joined_at).toLocaleDateString(),role==='owner'&&m.role!=='owner'?'<button class="pill" data-remove="'+m.user_id+'">Remove</button>':'']))+'</section>';if(role==='owner'){$('#addmember').onclick=()=>modal('Add team member',field(tr('Email'),'me','email')+'<label class="field">Role<select id="mr"><option value="operator">Operator</option><option value="viewer">Viewer</option></select></label><small>They must sign up first.</small>',async()=>{let {error}=await db.rpc('add_business_member_by_email',{p_business_id:biz.id,p_email:$('#me').value,p_role:$('#mr').value});if(error)throw error;render()});document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=async()=>{if(!confirm('Remove this member?'))return;let {error}=await db.rpc('remove_business_member',{p_business_id:biz.id,p_user_id:b.dataset.remove});if(error)toast(error.message);else render()})}}
db.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_OUT'){authRecoveryActive=false;login()}if(event==='PASSWORD_RECOVERY'){authRecoveryActive=true;login('new-password')}});
window.addEventListener('online',async()=>{updateNetworkState();toast(tr('Online'));if(user&&biz){try{await syncPendingSales();await load();render()}catch(e){toast(e.message)}}});
window.addEventListener('offline',()=>{updateNetworkState();toast(tr('Offline'))});
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(reg=>reg.update()).catch(()=>{});
boot().catch(e=>{toast(authErrorMessage(e));if(!navigator.onLine){const last=localStorage.getItem('janushan.lastUser');if(last&&restoreSnapshot(last)){layout();toast(tr('OfflineReadOnly'));return}}login('login',authRecoveryActive?tr('RecoveryLinkInvalid'):'')});