import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.0';
const db=createClient('https://igmntuedldippelbqgnm.supabase.co','sb_publishable_ir7zS8hV1xUT0sgdVbzrtw_UAPoGkCX');
const $=s=>document.querySelector(s), id=()=>crypto.randomUUID(), money=n=>'Rs. '+Number(n||0).toLocaleString('en-LK',{minimumFractionDigits:2,maximumFractionDigits:2});
const dict={
en:{Dashboard:'Dashboard',Products:'Products',Stock:'Stock',Sales:'Sales',Expenses:'Expenses','Cash book':'Cash book','Weekly count':'Weekly stock count',Team:'Team',Signout:'Sign out',More:'More',Today:'Today',Revenue:'Sales today',Spent:'Expenses today',Cash:'Cash received',Items:'Active products',Add:'Add',Save:'Save',Cancel:'Cancel',Name:'Product name',Category:'Category',Price:'Selling price (LKR)',Cost:'Unit cost (LKR)',Unit:'Unit',Threshold:'Low stock alert',Opening:'Opening stock',Qty:'Quantity',Amount:'Amount (LKR)',Paid:'Paid from',Description:'Description',Reason:'Reason',Type:'Movement',Email:'Email address',Role:'Role',Operator:'Operator',Viewer:'Viewer',Owner:'Owner',Actual:'Actual quantity',Open:'Opening cash',Added:'Cash added',Withdrawn:'Cash withdrawn',Close:'Actual closing cash',Refresh:'Refresh',NewSale:'New sale',Expense:'Add expense',Count:'Start stock count',Low:'Low stock',Recent:'Recent sales',NoData:'No records yet',Language:'සිංහල',English:'English',Tamil:'தமிழ்',SignIn:'Sign in',CreateAccount:'Create account',Password:'Password',Forgot:'Forgot password?',SendReset:'Send reset link',BackLogin:'Back to sign in',VerifySent:'Check your email and open the verification link to finish creating your account.',ResetSent:'Password reset email sent. Open the link from this website.',BusinessName:'Business name',CreateBusiness:'Create business',SetupBusiness:'Set up your business workspace',Image:'Product photo',SelectImage:'Choose product photo',Review:'Review',Submitted:'Submitted',Reviewed:'Reviewed',Variance:'Variance',ReviewNotes:'Review notes',ApproveCount:'Review and reconcile stock',Offline:'Offline · transactions cannot be saved',Online:'Back online',AddMember:'Add team member',MustRegister:'The team member must create an account first.',ConfirmPassword:'Confirm password',PasswordsMismatch:'Passwords do not match.',InvalidEmail:'Enter a valid email address.',ShortPassword:'Use a password with at least 8 characters.',EmailPending:'Account created. Check your inbox and verify your email before signing in.'},
si:{Dashboard:'උපකරණ පුවරුව',Products:'නිෂ්පාදන',Stock:'තොගය',Sales:'විකුණුම්',Expenses:'වියදම්','Cash book':'මුදල් පොත','Weekly count':'සතිපතා තොග ගණනය',Team:'කණ්ඩායම',Signout:'ඉවත් වන්න',More:'තවත්',Today:'අද',Revenue:'අද විකුණුම්',Spent:'අද වියදම්',Cash:'ලැබුණු මුදල්',Items:'සක්‍රීය නිෂ්පාදන',Add:'එක් කරන්න',Save:'සුරකින්න',Cancel:'අවලංගු කරන්න',Name:'නිෂ්පාදනයේ නම',Category:'වර්ගය',Price:'විකුණුම් මිල (රු.)',Cost:'ඒකක පිරිවැය (රු.)',Unit:'ඒකකය',Threshold:'අඩු තොග සීමාව',Opening:'ආරම්භක තොගය',Qty:'ප්‍රමාණය',Amount:'මුදල (රු.)',Paid:'ගෙවූ ආකාරය',Description:'විස්තරය',Reason:'හේතුව',Type:'තොග චලනය',Email:'විද්‍යුත් තැපෑල',Role:'භූමිකාව',Operator:'මෙහෙයුම්කරු',Viewer:'නරඹන්නා',Owner:'හිමිකරු',Actual:'සැබෑ ප්‍රමාණය',Open:'ආරම්භක මුදල',Added:'එකතු කළ මුදල',Withdrawn:'ඉවත් කළ මුදල',Close:'අවසන් මුදල',Refresh:'නැවුම් කරන්න',NewSale:'නව විකුණුම',Expense:'වියදමක් එක් කරන්න',Count:'තොගය ගණනය කරන්න',Low:'අඩු තොග',Recent:'මෑත විකුණුම්',NoData:'තවමත් වාර්තා නොමැත',Language:'தமிழ்',English:'English',Tamil:'தமிழ்',SignIn:'ඇතුළු වන්න',CreateAccount:'ගිණුමක් සාදන්න',Password:'මුරපදය',Forgot:'මුරපදය අමතකද?',SendReset:'යළි සැකසීමේ සබැඳිය යවන්න',BackLogin:'ඇතුල්වීමට ආපසු',VerifySent:'විද්‍යුත් තැපෑල පරීක්ෂා කර සත්‍යාපන සබැඳිය විවෘත කරන්න.',ResetSent:'මුරපද යළි සැකසීමේ විද්‍යුත් තැපෑල යවා ඇත.',BusinessName:'ව්‍යාපාරයේ නම',CreateBusiness:'ව්‍යාපාරය සාදන්න',SetupBusiness:'ව්‍යාපාර ගිණුම සකසන්න',Image:'නිෂ්පාදන ඡායාරූපය',SelectImage:'ඡායාරූපයක් තෝරන්න',Review:'සමාලෝචනය',Submitted:'යොමු කර ඇත',Reviewed:'සමාලෝචනය කර ඇත',Variance:'වෙනස',ReviewNotes:'සමාලෝචන සටහන්',ApproveCount:'තොගය සමාලෝචනය කර සකසන්න',Offline:'අන්තර්ජාලය නැත · ගනුදෙනු සුරැකිය නොහැක',Online:'නැවත සම්බන්ධ වී ඇත',AddMember:'සාමාජිකයෙකු එක් කරන්න',MustRegister:'සාමාජිකයා පළමුව ගිණුමක් සෑදිය යුතුය.',ConfirmPassword:'මුරපදය තහවුරු කරන්න',PasswordsMismatch:'මුරපද ගැළපෙන්නේ නැත.',InvalidEmail:'නිවැරදි විද්‍යුත් තැපෑලක් ඇතුළත් කරන්න.',ShortPassword:'අවම අක්ෂර 8ක මුරපදයක් භාවිතා කරන්න.',EmailPending:'ගිණුම සාදන ලදී. ඇතුළු වීමට පෙර විද්‍යුත් තැපෑල සත්‍යාපනය කරන්න.'},
ta:{Dashboard:'முகப்புப் பலகை',Products:'தயாரிப்புகள்',Stock:'கையிருப்பு',Sales:'விற்பனை',Expenses:'செலவுகள்','Cash book':'பணப் பதிவு','Weekly count':'வாராந்திர கையிருப்பு கணக்கெடுப்பு',Team:'குழு',Signout:'வெளியேறு',More:'மேலும்',Today:'இன்று',Revenue:'இன்றைய விற்பனை',Spent:'இன்றைய செலவுகள்',Cash:'பெற்ற பணம்',Items:'செயலில் உள்ள தயாரிப்புகள்',Add:'சேர்க்க',Save:'சேமிக்க',Cancel:'ரத்துசெய்',Name:'தயாரிப்பு பெயர்',Category:'வகை',Price:'விற்பனை விலை (ரூ.)',Cost:'அலகுச் செலவு (ரூ.)',Unit:'அலகு',Threshold:'குறைந்த கையிருப்பு எச்சரிக்கை',Opening:'ஆரம்ப கையிருப்பு',Qty:'அளவு',Amount:'தொகை (ரூ.)',Paid:'செலுத்திய முறை',Description:'விளக்கம்',Reason:'காரணம்',Type:'கையிருப்பு நகர்வு',Email:'மின்னஞ்சல் முகவரி',Role:'பங்கு',Operator:'செயல்பாட்டாளர்',Viewer:'பார்வையாளர்',Owner:'உரிமையாளர்',Actual:'உண்மையான அளவு',Open:'ஆரம்ப பணம்',Added:'சேர்க்கப்பட்ட பணம்',Withdrawn:'எடுக்கப்பட்ட பணம்',Close:'முடிவு பணம்',Refresh:'புதுப்பிக்க',NewSale:'புதிய விற்பனை',Expense:'செலவைச் சேர்',Count:'கையிருப்பைக் கணக்கிடு',Low:'குறைந்த கையிருப்பு',Recent:'சமீபத்திய விற்பனைகள்',NoData:'பதிவுகள் இல்லை',Language:'සිංහල',English:'English',Tamil:'தமிழ்',SignIn:'உள்நுழை',CreateAccount:'கணக்கை உருவாக்கு',Password:'கடவுச்சொல்',Forgot:'கடவுச்சொல் மறந்துவிட்டதா?',SendReset:'மீட்டமைப்பு இணைப்பை அனுப்பு',BackLogin:'உள்நுழைவுக்குத் திரும்பு',VerifySent:'மின்னஞ்சலைத் திறந்து சரிபார்ப்பு இணைப்பை அழுத்தவும்.',ResetSent:'கடவுச்சொல் மீட்டமைப்பு மின்னஞ்சல் அனுப்பப்பட்டது.',BusinessName:'வணிகப் பெயர்',CreateBusiness:'வணிகத்தை உருவாக்கு',SetupBusiness:'வணிகப் பணியிடத்தை அமைக்கவும்',Image:'தயாரிப்பு படம்',SelectImage:'படத்தைத் தேர்ந்தெடு',Review:'மதிப்பாய்வு',Submitted:'சமர்ப்பிக்கப்பட்டது',Reviewed:'மதிப்பாய்வு முடிந்தது',Variance:'வேறுபாடு',ReviewNotes:'மதிப்பாய்வு குறிப்புகள்',ApproveCount:'கையிருப்பை மதிப்பாய்வு செய்து சரிசெய்',Offline:'இணையம் இல்லை · பரிவர்த்தனைகளைச் சேமிக்க முடியாது',Online:'மீண்டும் இணையத்துடன் இணைக்கப்பட்டது',AddMember:'குழு உறுப்பினரைச் சேர்',MustRegister:'உறுப்பினர் முதலில் கணக்கை உருவாக்க வேண்டும்.',ConfirmPassword:'கடவுச்சொல்லை உறுதிப்படுத்து',PasswordsMismatch:'கடவுச்சொற்கள் பொருந்தவில்லை.',InvalidEmail:'சரியான மின்னஞ்சலை உள்ளிடவும்.',ShortPassword:'குறைந்தது 8 எழுத்துகள் கொண்ட கடவுச்சொல்லைப் பயன்படுத்தவும்.',EmailPending:'கணக்கு உருவாக்கப்பட்டது. உள்நுழைவதற்கு முன் மின்னஞ்சலைச் சரிபார்க்கவும்.'}
};
let lang=localStorage.janLang||'ta',user,biz,role,products=[],stock=[],sales=[],expenses=[],sessions=[],counts=[],dailyCashEntries=[],stockMovements=[],activityEvents=null,pendingSales=[],storeSettings={theme:'blue',font_scale:1.12,reduce_motion:false,banner_path:null,logo_path:null},page='Dashboard';
let authRecoveryActive=new URLSearchParams(window.location.hash.replace(/^#/, '')).get('type')==='recovery'||new URLSearchParams(window.location.search).get('type')==='recovery';

const extraDict={
en:{Offline:'Offline · pending sales will sync when connected',Online:'Online',OfflineReadOnly:'Offline mode: showing the last synced data.',PendingSales:'Pending offline sales',PendingSync:'Waiting to sync',NeedsReview:'Needs review',Remove:'Remove',PriceChanged:'A product price changed after this sale was saved. Remove it and enter the sale again.',OfflineQueued:'Sale saved on this device. It will sync automatically when internet returns.',AddProductsFirst:'Add products first.',AddItemsFirst:'Add at least one item.',InsufficientStock:'Insufficient available stock.',InvalidDiscount:'Discount cannot exceed the sale total.',PaymentSplitInvalid:'Cash, bank and credit amounts must equal the sale total.',GoodDay:'Good day!',DashboardSub:'Here is how your van is doing today.',MenuReference:'Janushan Ice Cream menu',Product:'Product',Available:'Available',Alert:'Alert',Status:'Status',Date:'Date',Payment:'Payment',Gross:'Gross',Discount:'Discount',Net:'Net',Receipt:'Receipt',SaveNewPassword:'Save new password',SetNewPassword:'Set a new password',PendingLogoutWarning:'Unsynced sales are kept on this device. Sign out anyway?',PendingRemovalWarning:'Remove this sale from this device? If it has already reached the server, it will remain in the sales records.',Expected:'Expected',Actual:'Actual',Difference:'Difference',Closed:'Closed',Open:'Open',CloseDay:'Close day',SaveSession:'Save session',AddMember:'Add team member',Fuel:'Fuel',Maintenance:'Maintenance',Ice:'Ice',Packaging:'Packaging',Food:'Food',Archived:'Archived',Archive:'Archive',Restore:'Restore',ConfirmArchive:'Hide this product from the active menu? Existing sales records will remain.',ConfirmRestore:'Restore this product to the active menu?',Edit:'Edit',EditProduct:'Edit product',ChangePhoto:'Change photo',ImageHelp:'Use a clear JPG, PNG or WebP image up to 6 MB.',CheckProduct:'Please check the product details and prices.',ProductUpdated:'Product updated successfully.',ManageStore:'Manage store',ManageStoreSub:'Change your menu, products, branding and display preferences.',Branding:'Store branding',LivePreview:'Your store identity',StoreName:'Store display name',BannerImage:'Menu banner image',LogoImage:'Business logo',Theme:'Colour theme',SaveChanges:'Save changes',Accessibility:'Accessibility',AccessibilitySub:'Make the app easier to read and use.',TextSize:'Text size',ReduceMotion:'Reduce animations',MotionHelp:'Animations stay subtle and never block buttons or text.',PreviewText:'Preview larger text',PreviewEffects:'Preview effects',LanguageHelp:'Choose the language you find easiest to read.',ProductManagement:'Product management',ProductManagementSub:'Add new items or update existing prices, photos and stock alerts.',AddProduct:'Add a product',ViewProducts:'View products',SettingsSaved:'Store settings saved.',OwnerControls:'Owner settings',ReadOnly:'View only',QuickActions:'Quick actions',StartCatalogue:'Start your product catalogue',StartCatalogueHelp:'Add your first ice cream product to start recording sales and tracking stock.',NoLowStockAlerts:'All products are above their low-stock alert levels.',NoSalesYet:'Your recent sales will appear here.',SearchProducts:'Search products by name or category',NoProductsFound:'No products match your search.',NewSale:'New sale',Last7Days:'Last 7 days',Last30Days:'Last 30 days',TodayOnly:'Today',SalesTrend:'Sales trend',TopSellers:'Top sellers',EstProfit:'Estimated gross profit',ProfitNote:'Estimate uses recorded unit costs; missing costs are excluded.',NoSalesRange:'No sales in this period yet.',StockValue:'Stock cost value',SearchSales:'Search receipt or product',ExportCSV:'Export CSV',Print:'Print receipt',LowOnly:'Low stock only',SaleDetails:'Sale details',TotalItems:'Items sold',GrossSales:'Gross sales',NetSales:'Net sales',ZeroStock:'Out of stock',InStock:'In stock',LowStock:'Low stock',StockHealth:'Stock health',SearchStock:'Search stock',Cart:'Sale cart',BusinessOverview:'Business overview',DailyCash:'Daily cash',CashRemaining:'Cash remaining after expenses',CashDate:'Business date',CashNote:'Optional note',SaveCashEntry:'Save cash entry',CashEntrySaved:'Daily cash saved.',CashEntries:'Daily cash records',GrossCash:'Estimated gross cash collected',CashExpense:'Cash expenses added back',NetCash:'Cash remaining',NoCashEntries:'No daily cash entries for this period.',PeriodReconciliation:'Period reconciliation',OpeningCount:'Opening stock count',ClosingCount:'Closing stock count',UnitsSold:'Estimated units sold',ExpectedSales:'Expected sales value',CashVariance:'Cash difference',CostOfGoods:'Cost of goods sold',TotalExpenses:'Total expenses',NetProfit:'Estimated net profit',StockShortage:'Stock shortage',StockSurplus:'Stock surplus',ReconcileHint:'Compare two physical counts. No individual sales are needed.',NoCountPair:'Complete two reviewed stock counts to create a period report.',Received:'Stock received',Damaged:'Damaged / free / removed',CountedOn:'Counted on',CashGap:'Expected sales minus estimated gross cash collections',EstimateWarning:'This is an estimate based on recorded stock movements, prices and expenses. Missing records affect accuracy.',CashPaid:'Cash paid',BankPaid:'Bank paid',HistoricalSales:'Historical individual sales (legacy)',DailyCashHelp:'Enter once after returning home. Enter the physical cash left after paying today’s expenses.'},
si:{Offline:'අන්තර්ජාලය නොමැත · නැවත සම්බන්ධ වූ විට විකුණුම් සමමුහුර්ත වේ',Online:'අන්තර්ජාලයට සම්බන්ධයි',OfflineReadOnly:'අන්තර්ජාලය නොමැති බැවින් අවසන් සමමුහුර්ත කළ දත්ත පෙන්වයි.',PendingSales:'සමමුහුර්ත කිරීමට ඇති විකුණුම්',PendingSync:'සමමුහුර්ත කිරීමට බලා සිටී',NeedsReview:'පරීක්ෂා කිරීම අවශ්‍යයි',Remove:'ඉවත් කරන්න',PriceChanged:'මෙම විකුණුම සුරැකූ පසු භාණ්ඩයේ මිල වෙනස් වී ඇත. එය ඉවත් කර නැවත ඇතුළත් කරන්න.',OfflineQueued:'විකුණුම මෙම උපාංගයේ සුරකින ලදී. අන්තර්ජාලය ලැබුණු විට ස්වයංක්‍රීයව සමමුහුර්ත වේ.',AddProductsFirst:'පළමුව භාණ්ඩ එක් කරන්න.',AddItemsFirst:'අවම වශයෙන් එක් භාණ්ඩයක් එක් කරන්න.',InsufficientStock:'ප්‍රමාණවත් තොගයක් නොමැත.',InvalidDiscount:'වට්ටම විකුණුම් මුදල ඉක්මවිය නොහැක.',PaymentSplitInvalid:'මුදල්, බැංකු සහ ණය එකතුව විකුණුම් මුදලට සමාන විය යුතුය.',GoodDay:'ආයුබෝවන්!',DashboardSub:'අද වෑන් රථයේ ව්‍යාපාර තත්ත්වය මෙන්න.',MenuReference:'ජනූෂාන් අයිස්ක්‍රීම් මෙනුව',Product:'භාණ්ඩය',Available:'පවතින තොගය',Alert:'අවවාදය',Status:'තත්ත්වය',Date:'දිනය',Payment:'ගෙවීම',Gross:'මුළු මුදල',Discount:'වට්ටම',Net:'ශුද්ධ මුදල',Receipt:'රිසිට්පත',SaveNewPassword:'නව මුරපදය සුරකින්න',SetNewPassword:'නව මුරපදයක් සකසන්න',PendingLogoutWarning:'සමමුහුර්ත නොවූ විකුණුම් මෙම උපාංගයේ තබා ඇත. එසේම ඉවත් වීමට අවශ්‍යද?',PendingRemovalWarning:'මෙම උපාංගයෙන් මෙම විකුණුම ඉවත් කරන්නද? එය සේවාදායකයට දැනටමත් ලැබී ඇත්නම් විකුණුම් වාර්තාවේ පවතිනු ඇත.',Expected:'අපේක්ෂිත',Actual:'සැබෑ',Difference:'වෙනස',Closed:'වසා ඇත',Open:'විවෘත',CloseDay:'දවස වසන්න',SaveSession:'වාරය සුරකින්න',AddMember:'කණ්ඩායම් සාමාජිකයෙකු එක් කරන්න',Fuel:'ඉන්ධන',Maintenance:'අලුත්වැඩියා',Ice:'අයිස්',Packaging:'ඇසුරුම්',Food:'ආහාර',Archived:'සඟවා ඇත',Archive:'සඟවන්න',Restore:'නැවත සක්‍රිය කරන්න',ConfirmArchive:'මෙම භාණ්ඩය සක්‍රීය මෙනුවෙන් සඟවන්නද? පැරණි විකුණුම් වාර්තා ආරක්ෂිතව පවතී.',ConfirmRestore:'මෙම භාණ්ඩය නැවත සක්‍රිය කරන්නද?',Edit:'සංස්කරණය',EditProduct:'භාණ්ඩය සංස්කරණය කරන්න',ChangePhoto:'ඡායාරූපය වෙනස් කරන්න',ImageHelp:'6 MB දක්වා JPG, PNG හෝ WebP ඡායාරූපයක් භාවිතා කරන්න.',CheckProduct:'භාණ්ඩ විස්තර සහ මිල පරීක්ෂා කරන්න.',ProductUpdated:'භාණ්ඩය යාවත්කාලීන කරන ලදී.',ManageStore:'වෙළඳසැල කළමනාකරණය',ManageStoreSub:'මෙනුව, භාණ්ඩ, සන්නාමය සහ පෙනුම වෙනස් කරන්න.',Branding:'වෙළඳසැල් සන්නාමය',LivePreview:'ඔබේ වෙළඳසැල් අනන්‍යතාව',StoreName:'වෙළඳසැලේ නම',BannerImage:'මෙනු බැනරය',LogoImage:'ව්‍යාපාර ලාංඡනය',Theme:'වර්ණ තේමාව',SaveChanges:'වෙනස්කම් සුරකින්න',Accessibility:'පහසු භාවිතය',AccessibilitySub:'කියවීමට සහ භාවිතයට පහසු කරන්න.',TextSize:'අකුරු ප්‍රමාණය',ReduceMotion:'සජීවිකරණ අඩු කරන්න',MotionHelp:'සජීවිකරණ සරලව පවතින අතර බොත්තම් හෝ අකුරු අවහිර නොකරයි.',PreviewText:'විශාල අකුරු පෙරදසුන',PreviewEffects:'ප්‍රයෝග පෙරදසුන',LanguageHelp:'ඔබට පහසුවෙන් කියවිය හැකි භාෂාව තෝරන්න.',ProductManagement:'භාණ්ඩ කළමනාකරණය',ProductManagementSub:'නව භාණ්ඩ එක් කරන්න හෝ පවතින මිල, ඡායාරූප සහ තොග සීමා වෙනස් කරන්න.',AddProduct:'භාණ්ඩයක් එක් කරන්න',ViewProducts:'භාණ්ඩ බලන්න',SettingsSaved:'වෙළඳසැල් සැකසුම් සුරකින ලදී.',OwnerControls:'හිමිකරු සැකසුම්',ReadOnly:'බැලීම පමණි',QuickActions:'ඉක්මන් ක්‍රියා',StartCatalogue:'ඔබේ භාණ්ඩ ලැයිස්තුව ආරම්භ කරන්න',StartCatalogueHelp:'විකුණුම් සහ තොග කළමනාකරණය ආරම්භ කිරීමට පළමු භාණ්ඩය එක් කරන්න.',NoLowStockAlerts:'සියලු භාණ්ඩවල තොග මට්ටම හොඳයි.',NoSalesYet:'මෑත විකුණුම් මෙහි පෙන්වනු ඇත.',SearchProducts:'නම හෝ වර්ගය අනුව සොයන්න',NoProductsFound:'ගැළපෙන භාණ්ඩ හමු නොවීය.',NewSale:'නව විකුණුම',Last7Days:'අවසන් දින 7',Last30Days:'අවසන් දින 30',TodayOnly:'අද',SalesTrend:'විකුණුම් ප්‍රවණතාව',TopSellers:'වැඩිම විකුණුම් ඇති භාණ්ඩ',EstProfit:'ඇස්තමේන්තුගත දළ ලාභය',ProfitNote:'සටහන් කළ ඒකක පිරිවැය ඇති භාණ්ඩ පමණක් ඇතුළත් වේ.',NoSalesRange:'මෙම කාලය තුළ විකුණුම් නොමැත.',StockValue:'තොග පිරිවැය වටිනාකම',SearchSales:'රිසිට්පත හෝ භාණ්ඩය සොයන්න',ExportCSV:'CSV බාගන්න',Print:'රිසිට්පත මුද්‍රණය',LowOnly:'අඩු තොග පමණි',SaleDetails:'විකුණුම් විස්තර',TotalItems:'විකුණූ භාණ්ඩ',GrossSales:'මුළු විකුණුම්',NetSales:'ශුද්ධ විකුණුම්',ZeroStock:'තොග අවසන්',InStock:'තොග ඇත',LowStock:'අඩු තොග',StockHealth:'තොග තත්ත්වය',SearchStock:'තොගය සොයන්න',Cart:'විකුණුම් ලැයිස්තුව',BusinessOverview:'ව්‍යාපාර සාරාංශය',DailyCash:'දෛනික මුදල්',CashRemaining:'වියදම් ගෙවූ පසු ඉතිරි මුදල',CashDate:'ව්‍යාපාර දිනය',CashNote:'විකල්ප සටහන',SaveCashEntry:'දෛනික මුදල් සුරකින්න',CashEntrySaved:'දෛනික මුදල් සුරකින ලදී.',CashEntries:'දෛනික මුදල් වාර්තා',GrossCash:'ඇස්තමේන්තුගත මුළු මුදල් ලැබීම්',CashExpense:'එකතු කළ මුදල් වියදම්',NetCash:'ඉතිරි මුදල්',NoCashEntries:'මෙම කාලයට දෛනික මුදල් වාර්තා නැත.',PeriodReconciliation:'කාල පරිච්ඡේද ගැළපීම',OpeningCount:'ආරම්භක තොග ගණනය',ClosingCount:'අවසන් තොග ගණනය',UnitsSold:'ඇස්තමේන්තුගත විකුණුම් ඒකක',ExpectedSales:'අපේක්ෂිත විකුණුම් වටිනාකම',CashVariance:'මුදල් වෙනස',CostOfGoods:'විකුණූ භාණ්ඩ පිරිවැය',TotalExpenses:'මුළු වියදම්',NetProfit:'ඇස්තමේන්තුගත ශුද්ධ ලාභය',StockShortage:'තොග අඩුව',StockSurplus:'තොග අතිරික්තය',Received:'ලැබුණු තොග',Damaged:'හානි වූ / නොමිලේ / ඉවත් කළ',CountedOn:'ගණනය කළ දිනය',CashGap:'අපේක්ෂිත විකුණුම් සහ ඇස්තමේන්තුගත මුදල් අතර වෙනස',EstimateWarning:'මෙය සටහන් කළ තොග චලනයන්, මිල සහ වියදම් මත පදනම් වූ ඇස්තමේන්තුවකි.',CashPaid:'මුදලින් ගෙවූ',BankPaid:'බැංකුවෙන් ගෙවූ',HistoricalSales:'පැරණි පුද්ගලික විකුණුම් වාර්තා',DailyCashHelp:'ගෙදර පැමිණ අද දවසේ වියදම් ගෙවූ පසු ඉතිරි භෞතික මුදල එක් වරක් ඇතුළත් කරන්න.'},
ta:{Offline:'இணைய இணைப்பு இல்லை · மீண்டும் இணைந்ததும் விற்பனைகள் ஒத்திசைக்கப்படும்',Online:'இணையத்துடன் இணைக்கப்பட்டுள்ளது',OfflineReadOnly:'இணையம் இல்லாததால் கடைசியாக ஒத்திசைக்கப்பட்ட தரவு காட்டப்படுகிறது.',PendingSales:'ஒத்திசைக்க வேண்டிய நிலுவை விற்பனைகள்',PendingSync:'ஒத்திசைவுக்காக காத்திருக்கிறது',NeedsReview:'மதிப்பாய்வு தேவை',Remove:'நீக்கு',PriceChanged:'இந்த விற்பனை சேமிக்கப்பட்டதிலிருந்து தயாரிப்பின் விலை மாறியுள்ளது. இதை நீக்கி மீண்டும் பதிவு செய்யவும்.',OfflineQueued:'விற்பனை இந்த சாதனத்தில் சேமிக்கப்பட்டது. இணையம் திரும்பியதும் தானாக ஒத்திசைக்கப்படும்.',AddProductsFirst:'முதலில் தயாரிப்புகளைச் சேர்க்கவும்.',AddItemsFirst:'குறைந்தது ஒரு பொருளையாவது சேர்க்கவும்.',InsufficientStock:'போதுமான கையிருப்பு இல்லை.',InvalidDiscount:'தள்ளுபடி விற்பனைத் தொகையை விட அதிகமாக இருக்க முடியாது.',PaymentSplitInvalid:'பணம், வங்கி மற்றும் கடன் தொகைகளின் கூட்டுத்தொகை விற்பனைத் தொகைக்கு சமமாக இருக்க வேண்டும்.',GoodDay:'வணக்கம்!',DashboardSub:'இன்றைய வணிக நிலை இதோ.',MenuReference:'ஜனுஷான் ஐஸ்கிரீம் மெனு',Product:'தயாரிப்பு',Available:'கையிருப்பு',Alert:'எச்சரிக்கை',Status:'நிலை',Date:'தேதி',Payment:'கட்டணம்',Gross:'மொத்தம்',Discount:'தள்ளுபடி',Net:'நிகரம்',Receipt:'ரசீது',SaveNewPassword:'புதிய கடவுச்சொல்லைச் சேமி',SetNewPassword:'புதிய கடவுச்சொல்லை அமைக்கவும்',PendingLogoutWarning:'ஒத்திசைக்கப்படாத விற்பனைகள் இந்த சாதனத்தில் வைக்கப்படும். வெளியேறவா?',PendingRemovalWarning:'இந்த சாதனத்திலிருந்து இந்த விற்பனையை நீக்கவா? இது ஏற்கனவே சேவையகத்தை அடைந்திருந்தால் விற்பனைப் பதிவில் இருக்கும்.',Expected:'எதிர்பார்ப்பு',Actual:'உண்மை',Difference:'வித்தியாசம்',Closed:'மூடப்பட்டது',Open:'திறந்துள்ளது',CloseDay:'நாளை முடி',SaveSession:'அமர்வைச் சேமி',AddMember:'குழு உறுப்பினரைச் சேர்',Fuel:'எரிபொருள்',Maintenance:'பராமரிப்பு',Ice:'பனி',Packaging:'பொதியிடல்',Food:'உணவு',Archived:'மறைக்கப்பட்டது',Archive:'மறை',Restore:'மீட்டமை',ConfirmArchive:'இந்த தயாரிப்பை செயலில் உள்ள மெனுவிலிருந்து மறைக்கவா? பழைய விற்பனைப் பதிவுகள் பாதுகாப்பாக இருக்கும்.',ConfirmRestore:'இந்த தயாரிப்பை மீண்டும் செயல்படுத்தவா?',Edit:'திருத்து',EditProduct:'தயாரிப்பைத் திருத்து',ChangePhoto:'படத்தை மாற்று',ImageHelp:'6 MB வரை JPG, PNG அல்லது WebP தெளிவான படத்தைப் பயன்படுத்தவும்.',CheckProduct:'தயாரிப்பு விவரங்களையும் விலைகளையும் சரிபார்க்கவும்.',ProductUpdated:'தயாரிப்பு வெற்றிகரமாகப் புதுப்பிக்கப்பட்டது.',ManageStore:'கடையை நிர்வகி',ManageStoreSub:'மெனு, தயாரிப்புகள், பிராண்டிங் மற்றும் தோற்றத்தை மாற்றவும்.',Branding:'கடை பிராண்டிங்',LivePreview:'உங்கள் கடை அடையாளம்',StoreName:'கடை பெயர்',BannerImage:'மெனு பேனர் படம்',LogoImage:'வணிக லோகோ',Theme:'வண்ணத் தீம்',SaveChanges:'மாற்றங்களைச் சேமி',Accessibility:'எளிதான பயன்பாடு',AccessibilitySub:'படிக்கவும் பயன்படுத்தவும் எளிதாக்குங்கள்.',TextSize:'எழுத்து அளவு',ReduceMotion:'அசைவுகளைக் குறை',MotionHelp:'அசைவுகள் மென்மையாக இருக்கும்; பொத்தான்களையோ எழுத்துகளையோ மறைக்காது.',PreviewText:'பெரிய எழுத்து முன்னோட்டம்',PreviewEffects:'விளைவுகள் முன்னோட்டம்',LanguageHelp:'உங்களுக்கு எளிதாகப் படிக்கக்கூடிய மொழியைத் தேர்ந்தெடுக்கவும்.',ProductManagement:'தயாரிப்பு மேலாண்மை',ProductManagementSub:'புதிய பொருட்களைச் சேர்க்கவும் அல்லது விலை, படங்கள் மற்றும் கையிருப்பு எச்சரிக்கைகளை மாற்றவும்.',AddProduct:'தயாரிப்பைச் சேர்',ViewProducts:'தயாரிப்புகளைக் காண்க',SettingsSaved:'கடை அமைப்புகள் சேமிக்கப்பட்டன.',OwnerControls:'உரிமையாளர் அமைப்புகள்',ReadOnly:'பார்வை மட்டும்',QuickActions:'விரைவு செயல்கள்',StartCatalogue:'உங்கள் தயாரிப்பு பட்டியலைத் தொடங்குங்கள்',StartCatalogueHelp:'விற்பனையையும் கையிருப்பையும் நிர்வகிக்க முதல் ஐஸ்கிரீம் தயாரிப்பைச் சேர்க்கவும்.',NoLowStockAlerts:'அனைத்து தயாரிப்புகளிலும் போதுமான கையிருப்பு உள்ளது.',NoSalesYet:'சமீபத்திய விற்பனைகள் இங்கே தோன்றும்.',SearchProducts:'பெயர் அல்லது வகை மூலம் தேடுங்கள்',NoProductsFound:'பொருந்தும் தயாரிப்புகள் இல்லை.',NewSale:'புதிய விற்பனை',Last7Days:'கடந்த 7 நாட்கள்',Last30Days:'கடந்த 30 நாட்கள்',TodayOnly:'இன்று',SalesTrend:'விற்பனைப் போக்கு',TopSellers:'அதிகம் விற்பனையானவை',EstProfit:'மதிப்பிடப்பட்ட மொத்த இலாபம்',ProfitNote:'அலகுச் செலவு பதிவு செய்யப்பட்ட தயாரிப்புகள் மட்டுமே சேர்க்கப்படும்.',NoSalesRange:'இந்தக் காலப்பகுதியில் விற்பனை இல்லை.',StockValue:'கையிருப்புச் செலவு மதிப்பு',SearchSales:'ரசீது அல்லது தயாரிப்பைத் தேடுங்கள்',ExportCSV:'CSV பதிவிறக்கம்',Print:'ரசீதை அச்சிடு',LowOnly:'குறைந்த கையிருப்பு மட்டும்',SaleDetails:'விற்பனை விவரங்கள்',TotalItems:'விற்கப்பட்ட பொருட்கள்',GrossSales:'மொத்த விற்பனை',NetSales:'நிகர விற்பனை',ZeroStock:'கையிருப்பு இல்லை',InStock:'கையிருப்பு உள்ளது',LowStock:'குறைந்த கையிருப்பு',StockHealth:'கையிருப்பு நிலை',SearchStock:'கையிருப்பைத் தேடுங்கள்',Cart:'விற்பனைப் பட்டியல்',BusinessOverview:'வணிகச் சுருக்கம்',DailyCash:'தினசரி பணம்',CashRemaining:'செலவுகளுக்குப் பிறகு மீதமுள்ள பணம்',CashDate:'வணிகத் தேதி',CashNote:'விருப்பக் குறிப்பு',SaveCashEntry:'தினசரி பணத்தைச் சேமி',CashEntrySaved:'தினசரி பணம் சேமிக்கப்பட்டது.',CashEntries:'தினசரி பணப் பதிவுகள்',GrossCash:'மதிப்பிடப்பட்ட மொத்த பண வசூல்',CashExpense:'மீண்டும் சேர்க்கப்பட்ட பணச் செலவுகள்',NetCash:'மீதமுள்ள பணம்',NoCashEntries:'இந்தக் காலத்திற்கு தினசரி பணப் பதிவுகள் இல்லை.',PeriodReconciliation:'காலகட்ட ஒப்பீடு',OpeningCount:'தொடக்க கையிருப்பு கணக்கெடுப்பு',ClosingCount:'முடிவு கையிருப்பு கணக்கெடுப்பு',UnitsSold:'மதிப்பிடப்பட்ட விற்பனை எண்ணிக்கை',ExpectedSales:'எதிர்பார்க்கப்படும் விற்பனை மதிப்பு',CashVariance:'பண வேறுபாடு',CostOfGoods:'விற்கப்பட்ட பொருட்களின் செலவு',TotalExpenses:'மொத்த செலவுகள்',NetProfit:'மதிப்பிடப்பட்ட நிகர இலாபம்',StockShortage:'கையிருப்பு குறைவு',StockSurplus:'கையிருப்பு அதிகம்',Received:'பெறப்பட்ட கையிருப்பு',Damaged:'சேதம் / இலவசம் / அகற்றப்பட்டது',CountedOn:'கணக்கிட்ட தேதி',CashGap:'எதிர்பார்க்கப்படும் விற்பனை மற்றும் மதிப்பிடப்பட்ட பண வசூல் இடையிலான வேறுபாடு',EstimateWarning:'பதிவு செய்யப்பட்ட கையிருப்பு நகர்வுகள், விலைகள் மற்றும் செலவுகளின் அடிப்படையிலான மதிப்பீடு.',CashPaid:'பணமாக செலுத்தியது',BankPaid:'வங்கி மூலம் செலுத்தியது',HistoricalSales:'பழைய தனிப்பட்ட விற்பனைப் பதிவுகள்',DailyCashHelp:'வீடு திரும்பியதும் அன்றைய செலவுகளைச் செலுத்திய பிறகு மீதமுள்ள பணத்தை ஒருமுறை பதிவு செய்யுங்கள்.'}
};

Object.assign(extraDict.en,{
 'Daily cash':'Cash close-out','Manage Store':'Store settings','Historical sales':'Sales history',
 'Overview':'OVERVIEW','Daily operations':'DAILY OPERATIONS','Inventory':'INVENTORY','ReportsNav':'REPORTING','Management':'MANAGEMENT',
 'BusinessOverview':'BUSINESS OVERVIEW','TodayAtAGlance':'Today at a glance','NetCashRemaining':'Net cash remaining',
 'TodaysExpenses':"Today's expenses",'ActiveProducts':'Active products','LowStockItems':'Low-stock items',
 'CashCloseout':"Today's cash close-out",'CashCloseoutHelp':'Record the physical cash remaining after today’s expenses have been paid.',
 'CashRecorded':'Cash recorded','CashNotRecorded':'Not recorded yet','UpdateCashEntry':'Update cash entry','RecordCash':'Record cash',
 'RecordExpense':'Record expense','OpenStockCount':'Open stock count','ViewReport':'View report','StockAttention':'Stock attention',
 'LatestStockCount':'Latest stock count','NoStockCountYet':'No physical stock count has been submitted yet.',
 'NoExpensesToday':'No expenses recorded today.','ActiveOnly':'Active products','StockStatus':'Stock status',
 'ReportPeriod':'Report period','OpeningCount':'Opening count','ClosingCount':'Closing count',
 'ChooseOpeningCount':'Choose opening count','ChooseClosingCount':'Choose closing count',
 'ChooseTwoCounts':'Choose two reviewed stock counts to compare stock usage, expected sales and cash.',
 'CashShortage':'Cash shortfall','CashSurplus':'Cash surplus','NoCashShortage':'No cash difference',
 'CashReconciliation':'Cash reconciliation','InventoryReconciliation':'Inventory reconciliation',
 'PeriodSummary':'Period summary','MissingCashDays':'Days without a cash entry','CashCollectionMethod':'Cash estimate = cash remaining + cash-paid expenses.',
 'CountWorkflow':'Stock count workflow','CountStepOne':'Count every active product and any archived product with stock.',
 'CountStepTwo':'The owner reviews the submitted quantities and approves reconciliation.',
 'CountStepThree':'Use Reports to compare the two latest reviewed counts.',
 'CountAlreadySubmitted':'A stock count has already been submitted for today.',
 'CountSubmitted':'Stock count submitted for owner review.','AwaitingReview':'Awaiting owner review',
 'CountProducts':'Count products','NoReviewedCounts':'At least two reviewed stock counts are needed to prepare a period report.',
 'EnterCashAmount':'Enter the cash remaining amount before saving.','CashEntryForDate':'Cash close-out for selected date',
 'CashLedger':'Cash close-out history','SearchExpenses':'Search category or description','AllExpenses':'All expenses',
 'Last7Days':'Last 7 days','Last30Days':'Last 30 days','Last90Days':'Last 90 days',
 'ExpenseTotal':'Total expenses','CashExpenses':'Cash expenses','BankExpenses':'Bank expenses',
 'ExportExpenses':'Export expenses','ExpenseRecords':'Expense records','NoExpenseRecords':'No expenses in this period.',
 'FilterProducts':'Filter products','AllProducts':'All products','ActiveProductsFilter':'Active','ArchivedProductsFilter':'Archived',
 'SearchProducts':'Search products','ProductCatalogue':'Product catalogue','ProductCatalogueHelp':'Manage product names, prices, photos and availability.',
 'StockSummary':'Stock summary','StockCount':'Stock count','StockCountHistory':'Stock count history',
 'HistoricalSalesHelp':'Read-only records from the previous item-by-item sales workflow.',
 'BackToDashboard':'Back to dashboard','StoreSettings':'Store settings','BusinessWorkspace':'BUSINESS WORKSPACE',
 'ConnectionSecure':'Cloud data connection','PendingSyncCount':'Pending sync','CountVariance':'Net stock variance',
 'ReportAccuracyNote':'This is an operational estimate, not audited accounting. Accuracy depends on complete stock counts, movement records, cash entries and expense records.',
 'ReviewPendingCounts':'Submitted counts awaiting review','ReviewCount':'Review count','CountedProducts':'Products counted',
 'AllCaughtUp':'Everything is up to date','BusinessNameLabel':'Business','TodayDate':'Today',
 'CashEntrySaved':'Cash entry saved','GrossCashEstimate':'Estimated gross cash collected','CashDifference':'Expected sales less estimated gross cash',
 'NetProfitEstimate':'Estimated net profit','EstimatedSales':'Expected sales value','NoCountPair':'Complete and review two physical stock counts to create a period report.',
 'CountInstructions':'Count physical stock after the van outing, then submit it for owner review.'
});
Object.assign(extraDict.si,{
 'Daily cash':'දෛනික මුදල් අවසන් කිරීම','Manage Store':'වෙළඳසැල් සැකසුම්','Historical sales':'පැරණි විකුණුම් වාර්තා',
 'Overview':'සාරාංශය','Daily operations':'දෛනික මෙහෙයුම්','Inventory':'තොග කළමනාකරණය','ReportsNav':'වාර්තා','Management':'පරිපාලනය',
 'BusinessOverview':'ව්‍යාපාර සාරාංශය','TodayAtAGlance':'අද දවසේ තත්ත්වය','NetCashRemaining':'ඉතිරි ශුද්ධ මුදල',
 'TodaysExpenses':'අද දවසේ වියදම්','ActiveProducts':'සක්‍රීය භාණ්ඩ','LowStockItems':'අඩු තොග භාණ්ඩ',
 'CashCloseout':'අද දවසේ මුදල් අවසන් කිරීම','CashCloseoutHelp':'අද වියදම් ගෙවූ පසු ඉතිරි භෞතික මුදල ඇතුළත් කරන්න.',
 'CashRecorded':'මුදල් සටහන් කර ඇත','CashNotRecorded':'තවම සටහන් කර නැත','UpdateCashEntry':'මුදල් සටහන යාවත්කාලීන කරන්න','RecordCash':'මුදල් සටහන් කරන්න',
 'RecordExpense':'වියදමක් සටහන් කරන්න','OpenStockCount':'තොග ගණනය විවෘත කරන්න','ViewReport':'වාර්තාව බලන්න','StockAttention':'තොග අවධානය',
 'LatestStockCount':'අවසන් තොග ගණනය','NoStockCountYet':'තවම භෞතික තොග ගණනයක් ඉදිරිපත් කර නැත.',
 'NoExpensesToday':'අද දවසට වියදම් වාර්තා නොමැත.','ActiveOnly':'සක්‍රීය භාණ්ඩ','StockStatus':'තොග තත්ත්වය',
 'ReportPeriod':'වාර්තා කාලය','OpeningCount':'ආරම්භක ගණනය','ClosingCount':'අවසන් ගණනය',
 'ChooseOpeningCount':'ආරම්භක ගණනය තෝරන්න','ChooseClosingCount':'අවසන් ගණනය තෝරන්න',
 'ChooseTwoCounts':'තොග භාවිතය, අපේක්ෂිත විකුණුම් සහ මුදල් සැසඳීමට සමාලෝචනය කළ තොග ගණනයන් දෙකක් තෝරන්න.',
 'CashShortage':'මුදල් හිඟය','CashSurplus':'මුදල් අතිරික්තය','NoCashShortage':'මුදල් වෙනසක් නැත',
 'CashReconciliation':'මුදල් ගැළපීම','InventoryReconciliation':'තොග ගැළපීම',
 'PeriodSummary':'කාල සාරාංශය','MissingCashDays':'මුදල් සටහනක් නොමැති දින','CashCollectionMethod':'මුදල් ඇස්තමේන්තුව = ඉතිරි මුදල + මුදලින් ගෙවූ වියදම්.',
 'CountWorkflow':'තොග ගණනය කිරීමේ ක්‍රියාවලිය','CountStepOne':'සියලු සක්‍රීය භාණ්ඩ සහ තොග ඇති සඟවා ඇති භාණ්ඩ ගණනය කරන්න.',
 'CountStepTwo':'හිමිකරු ඉදිරිපත් කළ ප්‍රමාණ පරීක්ෂා කර ගැළපීම අනුමත කරයි.',
 'CountStepThree':'සමාලෝචනය කළ ගණනයන් දෙකක් සැසඳීමට වාර්තා භාවිතා කරන්න.',
 'CountAlreadySubmitted':'අද දිනය සඳහා තොග ගණනයක් දැනටමත් ඉදිරිපත් කර ඇත.',
 'CountSubmitted':'තොග ගණනය හිමිකරුගේ සමාලෝචනය සඳහා යොමු කරන ලදී.','AwaitingReview':'හිමිකරුගේ සමාලෝචනය බලාපොරොත්තුවෙන්',
 'CountProducts':'භාණ්ඩ ගණනය කරන්න','NoReviewedCounts':'කාල වාර්තාවක් සකස් කිරීමට අවම වශයෙන් සමාලෝචනය කළ තොග ගණනයන් දෙකක් අවශ්‍යයි.',
 'EnterCashAmount':'සුරැකීමට පෙර ඉතිරි මුදල ඇතුළත් කරන්න.','CashEntryForDate':'තෝරාගත් දිනයේ මුදල් අවසන් කිරීම',
 'CashLedger':'දෛනික මුදල් ඉතිහාසය','SearchExpenses':'වර්ගය හෝ විස්තරය සොයන්න','AllExpenses':'සියලු වියදම්',
 'Last90Days':'අවසන් දින 90','ExpenseTotal':'මුළු වියදම්','CashExpenses':'මුදලින් ගෙවූ වියදම්','BankExpenses':'බැංකුවෙන් ගෙවූ වියදම්',
 'ExportExpenses':'වියදම් බාගන්න','ExpenseRecords':'වියදම් වාර්තා','NoExpenseRecords':'මෙම කාලයට වියදම් නොමැත.',
 'FilterProducts':'භාණ්ඩ පෙරහන් කරන්න','AllProducts':'සියලු භාණ්ඩ','ActiveProductsFilter':'සක්‍රීය','ArchivedProductsFilter':'සඟවා ඇති',
 'ProductCatalogue':'භාණ්ඩ ලැයිස්තුව','ProductCatalogueHelp':'භාණ්ඩ නාම, මිල, ඡායාරූප සහ සක්‍රීය තත්ත්වය කළමනාකරණය කරන්න.',
 'StockSummary':'තොග සාරාංශය','StockCount':'තොග ගණනය','StockCountHistory':'තොග ගණනය ඉතිහාසය',
 'HistoricalSalesHelp':'පෙර භාවිත කළ එක් එක් භාණ්ඩ විකුණුම් முறையின் කියවීමට පමණක් ඇති වාර්තා.',
 'BackToDashboard':'ප්‍රධාන පුවරුවට ආපසු','StoreSettings':'වෙළඳසැල් සැකසුම්','BusinessWorkspace':'ව්‍යාපාර පද්ධතිය',
 'PendingSyncCount':'සමමුහුර්ත කිරීමට ඇති','CountVariance':'ශුද්ධ තොග වෙනස',
 'ReportAccuracyNote':'මෙය ගිණුම් විගණනයක් නොව මෙහෙයුම් ඇස්තමේන්තුවකි. නිවැරදිභාවය සම්පූර්ණ තොග ගණනයන්, චලන, මුදල් සහ වියදම් වාර්තා මත රඳා පවතී.',
 'ReviewPendingCounts':'සමාලෝචනයට ඇති ගණනයන්','ReviewCount':'ගණනය සමාලෝචනය කරන්න','CountedProducts':'ගණනය කළ භාණ්ඩ',
 'AllCaughtUp':'සියලු දත්ත යාවත්කාලීනයි','BusinessNameLabel':'ව්‍යාපාරය','TodayDate':'අද',
 'GrossCashEstimate':'ඇස්තමේන්තුගත මුළු මුදල් ලැබීම්','CashDifference':'අපේක්ෂිත විකුණුම් සහ ඇස්තමේන්තුගත මුදල් අතර වෙනස',
 'NetProfitEstimate':'ඇස්තමේන්තුගත ශුද්ධ ලාභය','EstimatedSales':'අපේක්ෂිත විකුණුම් වටිනාකම',
 'CountInstructions':'වෑන් ගමන අවසන් වූ පසු භෞතික තොගය ගණනය කර හිමිකරුගේ සමාලෝචනයට යොමු කරන්න.'
});
Object.assign(extraDict.ta,{
 'Daily cash':'தினசரி பண முடிப்பு','Manage Store':'கடை அமைப்புகள்','Historical sales':'பழைய விற்பனைப் பதிவுகள்',
 'Overview':'மேலோட்டம்','Daily operations':'தினசரி செயல்பாடுகள்','Inventory':'கையிருப்பு மேலாண்மை','ReportsNav':'அறிக்கைகள்','Management':'நிர்வாகம்',
 'BusinessOverview':'வணிகச் சுருக்கம்','TodayAtAGlance':'இன்றைய நிலை','NetCashRemaining':'மீதமுள்ள நிகரப் பணம்',
 'TodaysExpenses':'இன்றைய செலவுகள்','ActiveProducts':'செயலில் உள்ள தயாரிப்புகள்','LowStockItems':'குறைந்த கையிருப்பு பொருட்கள்',
 'CashCloseout':'இன்றைய பண முடிப்பு','CashCloseoutHelp':'இன்றைய செலவுகளைச் செலுத்திய பிறகு மீதமுள்ள உண்மையான பணத்தைப் பதிவு செய்யவும்.',
 'CashRecorded':'பணம் பதிவு செய்யப்பட்டது','CashNotRecorded':'இன்னும் பதிவு செய்யப்படவில்லை','UpdateCashEntry':'பணப் பதிவைப் புதுப்பி','RecordCash':'பணத்தைப் பதிவு செய்',
 'RecordExpense':'செலவைப் பதிவு செய்','OpenStockCount':'கையிருப்பு கணக்கெடுப்பைத் திற','ViewReport':'அறிக்கையைப் பார்','StockAttention':'கையிருப்பு கவனம்',
 'LatestStockCount':'சமீபத்திய கையிருப்பு கணக்கெடுப்பு','NoStockCountYet':'இதுவரை உடல் கையிருப்பு கணக்கெடுப்பு சமர்ப்பிக்கப்படவில்லை.',
 'NoExpensesToday':'இன்று செலவுகள் எதுவும் பதிவு செய்யப்படவில்லை.','ActiveOnly':'செயலில் உள்ள பொருட்கள்','StockStatus':'கையிருப்பு நிலை',
 'ReportPeriod':'அறிக்கை காலம்','OpeningCount':'தொடக்க கணக்கெடுப்பு','ClosingCount':'முடிவு கணக்கெடுப்பு',
 'ChooseOpeningCount':'தொடக்க கணக்கெடுப்பைத் தேர்ந்தெடு','ChooseClosingCount':'முடிவு கணக்கெடுப்பைத் தேர்ந்தெடு',
 'ChooseTwoCounts':'கையிருப்பு பயன்பாடு, எதிர்பார்க்கப்படும் விற்பனை மற்றும் பணத்தை ஒப்பிட இரண்டு மதிப்பாய்வு செய்யப்பட்ட கணக்கெடுப்புகளைத் தேர்ந்தெடுக்கவும்.',
 'CashShortage':'பணக் குறைவு','CashSurplus':'பண உபரி','NoCashShortage':'பண வேறுபாடு இல்லை',
 'CashReconciliation':'பண ஒப்பீடு','InventoryReconciliation':'கையிருப்பு ஒப்பீடு',
 'PeriodSummary':'காலச் சுருக்கம்','MissingCashDays':'பணப் பதிவு இல்லாத நாட்கள்','CashCollectionMethod':'பண மதிப்பீடு = மீதமுள்ள பணம் + பணமாகச் செலுத்திய செலவுகள்.',
 'CountWorkflow':'கையிருப்பு கணக்கெடுப்பு நடைமுறை','CountStepOne':'செயலில் உள்ள அனைத்து பொருட்களையும் கையிருப்புள்ள மறைக்கப்பட்ட பொருட்களையும் எண்ணவும்.',
 'CountStepTwo':'உரிமையாளர் சமர்ப்பிக்கப்பட்ட அளவுகளை மதிப்பாய்வு செய்து ஒப்பீட்டை அங்கீகரிப்பார்.',
 'CountStepThree':'இரண்டு மதிப்பாய்வு செய்யப்பட்ட கணக்கெடுப்புகளை ஒப்பிட அறிக்கைகளைப் பயன்படுத்தவும்.',
 'CountAlreadySubmitted':'இன்றைய தேதிக்கான கையிருப்பு கணக்கெடுப்பு ஏற்கனவே சமர்ப்பிக்கப்பட்டுள்ளது.',
 'CountSubmitted':'கையிருப்பு கணக்கெடுப்பு உரிமையாளர் மதிப்பாய்வுக்காக சமர்ப்பிக்கப்பட்டது.','AwaitingReview':'உரிமையாளர் மதிப்பாய்வுக்காக காத்திருக்கிறது',
 'CountProducts':'பொருட்களைக் கணக்கிடு','NoReviewedCounts':'கால அறிக்கையை உருவாக்க குறைந்தது இரண்டு மதிப்பாய்வு செய்யப்பட்ட கணக்கெடுப்புகள் தேவை.',
 'EnterCashAmount':'சேமிப்பதற்கு முன் மீதமுள்ள பணத்தை உள்ளிடவும்.','CashEntryForDate':'தேர்ந்தெடுக்கப்பட்ட நாளுக்கான பண முடிப்பு',
 'CashLedger':'தினசரி பண முடிப்பு வரலாறு','SearchExpenses':'வகை அல்லது விளக்கத்தைத் தேடுங்கள்','AllExpenses':'அனைத்து செலவுகள்',
 'Last90Days':'கடந்த 90 நாட்கள்','ExpenseTotal':'மொத்த செலவுகள்','CashExpenses':'பணமாகச் செலுத்திய செலவுகள்','BankExpenses':'வங்கி மூலம் செலுத்திய செலவுகள்',
 'ExportExpenses':'செலவுகளைப் பதிவிறக்கு','ExpenseRecords':'செலவுப் பதிவுகள்','NoExpenseRecords':'இந்தக் காலப்பகுதியில் செலவுகள் இல்லை.',
 'FilterProducts':'தயாரிப்புகளை வடிகட்டு','AllProducts':'அனைத்து தயாரிப்புகள்','ActiveProductsFilter':'செயலில்','ArchivedProductsFilter':'மறைக்கப்பட்ட',
 'ProductCatalogue':'தயாரிப்பு பட்டியல்','ProductCatalogueHelp':'தயாரிப்பு பெயர்கள், விலைகள், படங்கள் மற்றும் செயல்பாட்டை நிர்வகிக்கவும்.',
 'StockSummary':'கையிருப்பு சுருக்கம்','StockCount':'கையிருப்பு கணக்கெடுப்பு','StockCountHistory':'கையிருப்பு கணக்கெடுப்பு வரலாறு',
 'HistoricalSalesHelp':'முந்தைய ஒவ்வொரு பொருள் விற்பனை முறையிலிருந்து வந்த பார்வைக்கு மட்டும் உள்ள பதிவுகள்.',
 'BackToDashboard':'முகப்புப் பலகைக்குத் திரும்பு','StoreSettings':'கடை அமைப்புகள்','BusinessWorkspace':'வணிகப் பணியிடம்',
 'PendingSyncCount':'ஒத்திசைக்க நிலுவை','CountVariance':'நிகர கையிருப்பு வேறுபாடு',
 'ReportAccuracyNote':'இது தணிக்கை செய்யப்பட்ட கணக்கியல் அல்ல; செயல்பாட்டு மதிப்பீடு மட்டுமே. முழுமையான கையிருப்பு கணக்கெடுப்புகள், நகர்வுகள், பணப் பதிவுகள் மற்றும் செலவுப் பதிவுகளின் அடிப்படையில் துல்லியம் அமையும்.',
 'ReviewPendingCounts':'மதிப்பாய்வுக்காக காத்திருக்கும் கணக்கெடுப்புகள்','ReviewCount':'கணக்கெடுப்பை மதிப்பாய்வு செய்','CountedProducts':'எண்ணப்பட்ட தயாரிப்புகள்',
 'AllCaughtUp':'அனைத்தும் புதுப்பிக்கப்பட்டுள்ளன','BusinessNameLabel':'வணிகம்','TodayDate':'இன்று',
 'GrossCashEstimate':'மதிப்பிடப்பட்ட மொத்த பண வசூல்','CashDifference':'எதிர்பார்க்கப்படும் விற்பனை மற்றும் மதிப்பிடப்பட்ட மொத்த பண வசூலின் வேறுபாடு',
 'NetProfitEstimate':'மதிப்பிடப்பட்ட நிகர இலாபம்','EstimatedSales':'எதிர்பார்க்கப்படும் விற்பனை மதிப்பு',
 'CountInstructions':'வான் பயணம் முடிந்ததும் உண்மையான கையிருப்பை எண்ணி உரிமையாளர் மதிப்பாய்வுக்குச் சமர்ப்பிக்கவும்.'
});

Object.assign(extraDict.en,{
 'Van operations':'VAN OPERATIONS','Van stock':'STOCK & MENU','Business insights':'BUSINESS INSIGHTS','Administration':'ADMINISTRATION','VanWorkspace':'VAN WORKSPACE','VanHomeSub':'Your van operations, stock and cash close-out in one simple place.','TodaysVanRun':"TODAY'S VAN RUN",'KeepTheVanMoving':'Ready for the next run?','VanRunDescription':'Record only what matters. No customer-by-customer sales entry.','RecordExpensesStep':'Record outing expenses','ExpenseRecordsToday':'expenses today','CashCloseoutStep':'Cash close-out','CashRemainingAfterExpenses':'Cash remaining after expenses','EnterCashAfterReturn':'Enter once the van returns','AddFuelIceEtc':'Fuel, ice, packaging and other costs','VanStock':'Van stock','CheckRemainingStock':'Check available quantities','StockNeedsAttention':'Stock to watch','ViewAll':'View all','VanStockHealthy':'Your van stock looks healthy','PeriodicStockControl':'PERIODIC STOCK CONTROL','StockCountCycle':'Stock count cycle','CountOnlyWhenNeeded':'Count stock at the end of your chosen period, not after every sale.','PeriodicCountNote':'A physical count is needed to start reconciliation.','Periodic':'Periodic','OwnerOverview':'OWNER OVERVIEW','BusinessAtAGlance':'How is the business performing?','NeedTwoCountsForReconciliation':'Complete two reviewed stock counts to compare stock usage with cash.','OpenOwnerReports':'Open business reports','NoIndividualSalesReminder':'Staff do not need to record individual customer sales. Enter the total physical cash after expenses when the van returns.'
});
Object.assign(extraDict.si,{
 'Van operations':'වෑන් මෙහෙයුම්','Van stock':'තොගය සහ මෙනුව','Business insights':'ව්‍යාපාර වාර්තා','Administration':'පරිපාලනය','VanWorkspace':'වෑන් වැඩපොළ','VanHomeSub':'වෑන් මෙහෙයුම්, තොගය සහ මුදල් වසා දැමීම එකම සරල ස්ථානයක.','TodaysVanRun':'අද වෑන් ගමන','KeepTheVanMoving':'ඊළඟ ගමනට සූදානම්ද?','VanRunDescription':'අවශ්‍ය දේ පමණක් සටහන් කරන්න. එක් එක් පාරිභෝගිකයාගේ විකුණුම් සටහන් අවශ්‍ය නැත.','RecordExpensesStep':'ගමන් වියදම් සටහන් කරන්න','ExpenseRecordsToday':'අද වියදම්','CashCloseoutStep':'දෛනික මුදල් අවසන් කිරීම','CashRemainingAfterExpenses':'වියදම් පසු ඉතිරි මුදල','EnterCashAfterReturn':'වෑන් රථය ආපසු පැමිණි පසු එක් වරක් ඇතුළත් කරන්න','AddFuelIceEtc':'ඉන්ධන, අයිස්, ඇසුරුම් සහ අනෙකුත් වියදම්','VanStock':'වෑන් තොගය','CheckRemainingStock':'ඉතිරි ප්‍රමාණ පරීක්ෂා කරන්න','StockNeedsAttention':'අවධානය අවශ්‍ය තොගය','ViewAll':'සියල්ල බලන්න','VanStockHealthy':'වෑන් තොගය හොඳ තත්ත්වයේ ඇත','PeriodicStockControl':'කාලානුරූප තොග පාලනය','StockCountCycle':'තොග ගණන් කිරීමේ වාරය','CountOnlyWhenNeeded':'සෑම විකුණුමකටම පසු නොව, තෝරාගත් කාලය අවසානයේ තොගය ගණන් කරන්න.','PeriodicCountNote':'සංසන්දනය ආරම්භ කිරීමට භෞතික තොග ගණනයක් අවශ්‍යයි.','Periodic':'කාලානුරූප','OwnerOverview':'හිමිකරුගේ සාරාංශය','BusinessAtAGlance':'ව්‍යාපාරයේ තත්ත්වය කෙසේද?','NeedTwoCountsForReconciliation':'තොග භාවිතය සහ මුදල් සංසන්දනයට සමාලෝචිත තොග ගණන් දෙකක් අවශ්‍යයි.','OpenOwnerReports':'ව්‍යාපාර වාර්තා විවෘත කරන්න','NoIndividualSalesReminder':'එක් එක් පාරිභෝගිකයාගේ විකුණුම් සටහන් කිරීම අවශ්‍ය නැත. වෑන් රථය ආපසු පැමිණි පසු වියදම් අඩු කළ භෞතික මුදල ඇතුළත් කරන්න.'
});
Object.assign(extraDict.ta,{
 'Van operations':'வான் செயல்பாடுகள்','Van stock':'கையிருப்பு மற்றும் மெனு','Business insights':'வணிக அறிக்கைகள்','Administration':'நிர்வாகம்','VanWorkspace':'வான் பணியிடம்','VanHomeSub':'வான் செயல்பாடுகள், கையிருப்பு மற்றும் பண முடிப்பு அனைத்தும் ஒரே எளிய இடத்தில்.','TodaysVanRun':'இன்றைய வான் பயணம்','KeepTheVanMoving':'அடுத்த பயணத்திற்குத் தயாரா?','VanRunDescription':'தேவையானவற்றை மட்டும் பதிவு செய்யுங்கள். ஒவ்வொரு வாடிக்கையாளரின் விற்பனையையும் பதிவு செய்ய வேண்டாம்.','RecordExpensesStep':'பயணச் செலவுகளைப் பதிவு செய்','ExpenseRecordsToday':'இன்றைய செலவுகள்','CashCloseoutStep':'பயண முடிவுப் பணம்','CashRemainingAfterExpenses':'செலவுகளுக்குப் பின் மீதமுள்ள பணம்','EnterCashAfterReturn':'வான் திரும்பியதும் ஒருமுறை பதிவு செய்யுங்கள்','AddFuelIceEtc':'எரிபொருள், ஐஸ், பொதியிடல் மற்றும் பிற செலவுகள்','VanStock':'வான் கையிருப்பு','CheckRemainingStock':'மீதமுள்ள அளவுகளைப் பார்க்கவும்','StockNeedsAttention':'கவனம் தேவைப்படும் கையிருப்பு','ViewAll':'அனைத்தையும் காண்க','VanStockHealthy':'வான் கையிருப்பு நன்றாக உள்ளது','PeriodicStockControl':'காலமுறை கையிருப்பு கட்டுப்பாடு','StockCountCycle':'கையிருப்பு கணக்கெடுப்பு சுழற்சி','CountOnlyWhenNeeded':'ஒவ்வொரு விற்பனைக்குப் பிறகும் அல்ல; தேர்ந்தெடுத்த காலத்தின் முடிவில் கையிருப்பைக் கணக்கிடுங்கள்.','PeriodicCountNote':'ஒப்பீட்டைத் தொடங்க ஒரு நேரடி கையிருப்பு கணக்கெடுப்பு தேவை.','Periodic':'காலமுறை','OwnerOverview':'உரிமையாளர் பார்வை','BusinessAtAGlance':'வணிகம் எவ்வாறு செயல்படுகிறது?','NeedTwoCountsForReconciliation':'கையிருப்பு பயன்பாட்டையும் பணத்தையும் ஒப்பிட இரண்டு மதிப்பாய்வு செய்யப்பட்ட கணக்கெடுப்புகள் தேவை.','OpenOwnerReports':'வணிக அறிக்கைகளைத் திறக்கவும்','NoIndividualSalesReminder':'ஒவ்வொரு வாடிக்கையாளரின் விற்பனையையும் ஊழியர்கள் பதிவு செய்ய வேண்டியதில்லை. வான் திரும்பியதும் செலவுகளுக்குப் பின் உள்ள மொத்த பணத்தை உள்ளிடுங்கள்.'
});
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
 const modalClass=options.wide?'modal modal-wide':'modal';
 $('#app').insertAdjacentHTML('beforeend','<div class="modal-bg" id="modal"><div class="'+modalClass+'" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">'+title+'</h2><button type="button" class="modal-close" id="modal-close" aria-label="Close">×</button></div><div class="modal-body">'+body+'</div><div class="actions"><button class="btn alt" id="cancel">'+tr('Cancel')+'</button><button class="btn" id="save">'+tr('Save')+'</button></div></div></div>');
 const close=()=>$('#modal')?.remove();
 $('#cancel').onclick=close;$('#modal-close').onclick=close;
 $('#modal').onclick=e=>{if(e.target.id==='modal')close()};
 $('#save').onclick=async()=>{
  if(!navigator.onLine&&!options.allowOffline){toast(tr('Offline'));return}
  const button=$('#save');if(button)button.disabled=true;
  try{await fn();close()}
  catch(e){toast(e.message||'Unable to save. Please try again.')}
  finally{if($('#save'))$('#save').disabled=false}
 };
 const first=$('#modal input:not([type=file]),#modal select');
 if(first)first.focus();
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
const navGroups=[
 {label:'Van operations',items:['Dashboard','Daily cash','Expenses']},
 {label:'Van stock',items:['Stock','Products','Weekly count']},
 {label:'Business insights',items:['Reports','Owner centre']},
 {label:'Administration',items:['Team','Manage Store']}
];
const nav=navGroups.flatMap(group=>group.items);
const mobilePrimaryNav=['Dashboard','Daily cash','Stock','Expenses'];
const navIcons={Dashboard:'⌂','Owner centre':'◫','Daily cash':'＄',Stock:'▦',Expenses:'↗',Products:'◈','Weekly count':'▤',Reports:'▥','Historical sales':'◷',Team:'♙','Manage Store':'⚙'};
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
 const activityResult=await db.from('business_activity_events').select('*').eq('business_id',bid).order('created_at',{ascending:false}).limit(1000);
 activityEvents=activityResult.error?null:(activityResult.data||[]);
 const sums=Object.fromEntries((b.data||[]).map(x=>[x.product_id,Number(x.on_hand)]));
 stock=products.map(x=>({...x,on_hand:sums[x.id]??0}));
 pendingSales=loadPendingSales(user.id);
 saveSnapshot();
}


function layout(){
 const visibleGroups=navGroups.map(g=>({...g,items:g.items.filter(x=>x!=='Owner centre'||role==='owner')})).filter(g=>g.items.length);
 const desktopNav=visibleGroups.map(group=>'<section class="nav-group"><div class="nav-group-title">'+tr(group.label)+'</div>'+group.items.map(x=>'<button type="button" data-page="'+x+'" class="nav-item '+(x===page?'active':'')+'"><span class="nav-item-icon" aria-hidden="true">'+(navIcons[x]||'·')+'</span><span>'+tr(x)+'</span></button>').join('')+'</section>').join('');
 const visibleNav=visibleGroups.flatMap(g=>g.items),moreNav=visibleNav.filter(x=>!mobilePrimaryNav.includes(x));
 $('#app').innerHTML='<div class="shell"><aside class="side"><div class="brand-lockup"><img class="side-logo" src="'+esc(mediaUrl(storeSettings.logo_path)||'./assets/logo.webp')+'" alt="Janushan Ice Cream" onerror="this.onerror=null;this.src=\'./icon.svg\'"><div class="brand-copy"><strong>JANUSHAN</strong><span>VAN BUSINESS MANAGER</span></div></div><div class="sidebar-business"><span class="side-business-dot"></span><span>'+esc(storeSettings.display_name||biz.name)+'</span></div><nav class="nav desktop-nav" aria-label="Main navigation">'+desktopNav+'</nav><div class="side-footer"><span class="side-footer-mark">●</span><span>'+tr('VanWorkspace')+'</span></div><nav class="mobile-nav" aria-label="Main navigation">'+mobilePrimaryNav.map(x=>'<button type="button" data-page="'+x+'" class="'+(x===page?'active':'')+'"><span class="nav-icon" aria-hidden="true">'+navIcons[x]+'</span><span class="nav-label">'+tr(x)+'</span></button>').join('')+'<button type="button" id="more-nav" class="'+(mobilePrimaryNav.includes(page)?'':'active')+'" aria-controls="more-menu" aria-expanded="false"><span class="nav-icon" aria-hidden="true">•••</span><span class="nav-label">'+tr('More')+'</span></button></nav><div class="more-scrim" id="more-scrim" hidden></div><div class="more-menu" id="more-menu" hidden role="menu">'+moreNav.map(x=>'<button type="button" role="menuitem" data-page="'+x+'">'+tr(x)+'</button>').join('')+'<div class="more-menu-tools">'+languageButtons()+'<button type="button" class="more-logout" id="mobile-logout">'+tr('Signout')+'</button></div></div></aside><main class="main"><header class="top"><div class="top-context"><span class="top-overline">'+tr('VanWorkspace')+'</span><div class="top-title-row"><h1 id="title">'+tr(page)+'</h1><span class="top-separator">/</span><span class="top-business">'+esc(storeSettings.display_name||biz.name)+'</span></div></div><div class="top-actions"><span id="net-state" class="network-pill"></span>'+languageButtons()+'<button class="pill logout-button" id="logout">'+tr('Signout')+'</button></div></header><div class="content" id="view"></div></main></div>';
 document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{page=b.dataset.page;closeMobileMore();render()});
 bindLanguages();updateNetworkState();
 $('#more-nav').onclick=toggleMobileMore;$('#more-scrim').onclick=closeMobileMore;
 const handleLogout=async()=>{if(pendingSales.length&&!confirm(tr('PendingLogoutWarning')))return;const uid=user?.id;await db.auth.signOut();localStorage.removeItem('janushan.lastUser');if(uid)localStorage.removeItem(snapshotKey(uid));login()};
 $('#logout').onclick=handleLogout;$('#mobile-logout').onclick=handleLogout;
 render();applyAccessibilitySettings();
}

function table(headers,rows){return '<div class="scroll"><table><thead><tr>'+headers.map(x=>'<th>'+x+'</th>').join('')+'</tr></thead><tbody>'+(rows.length?rows.map(r=>'<tr>'+r.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join(''):'<tr><td colspan="'+headers.length+'" class="empty">'+tr('NoData')+'</td></tr>')+'</tbody></table></div>'}
function card(label,value,detail=''){return '<div class="card"><small>'+label+'</small><strong>'+value+'</strong>'+(detail?'<span class="card-detail">'+detail+'</span>':'')+'</div>'}


function dateOffset(days){const d=new Date();d.setDate(d.getDate()-days);return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Colombo'}).format(d)}
function periodSales(days){const start=days===0?today():dateOffset(days-1);return sales.filter(x=>colomboDate(x.sold_at)>=start&&colomboDate(x.sold_at)<=today())}
async function recordBusinessActivity(eventType,entityType,entityId,summary){if(!biz?.id||!user?.id||!navigator.onLine)return false;try{const {error}=await db.rpc('log_business_activity',{p_business_id:biz.id,p_event_type:eventType,p_entity_type:entityType,p_entity_id:String(entityId||''),p_summary:String(summary||'').slice(0,180)});return !error}catch{return false}}
function saleNet(x){return Number(x.gross_total||0)-Number(x.discount_total||0)}
function knownGrossProfit(x){return (x.sale_items||[]).reduce((a,i)=>i.unit_cost_snapshot==null?a:a+Number(i.line_net_total??i.line_total??0)-Number(i.unit_cost_snapshot)*Number(i.quantity||0),0)}
function downloadCsv(filename,rows){const csv='\\uFEFF'+rows.map(r=>r.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\\r\\n');const u=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=u;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000)}
function printReceipt(saleId){const x=sales.find(s=>s.id===saleId);if(!x)return;const rows=(x.sale_items||[]).map(i=>'<tr><td>'+esc(i.product_name_snapshot)+'</td><td>'+i.quantity+'</td><td>'+money(i.unit_price_snapshot)+'</td><td>'+money(i.line_net_total??i.line_total)+'</td></tr>').join('');const w=window.open('','_blank','width=420,height=720');if(!w){toast('Allow pop-ups to print receipts.');return}w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Receipt #'+x.receipt_no+'</title><style>body{font:14px Arial;max-width:360px;margin:24px auto;color:#17243a}h1{text-align:center;font-size:22px}p{text-align:center;color:#64748b}table{width:100%;border-collapse:collapse;margin:18px 0}td,th{padding:8px 3px;border-bottom:1px dashed #cbd5e1;text-align:left;font-size:12px}.total{text-align:right;font-size:20px;font-weight:bold}</style></head><body><h1>'+esc(storeSettings.display_name||biz.name)+'</h1><p>ICE CREAM · SALES RECEIPT</p><p>Receipt #'+x.receipt_no+'<br>'+esc(dateTime(x.sold_at))+'</p><table><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>'+rows+'</table><p>Gross: '+money(x.gross_total)+'<br>Discount: '+money(x.discount_total)+'</p><div class="total">TOTAL '+money(saleNet(x))+'</div><p>Cash: '+money(x.cash_received)+'<br>Bank / QR: '+money(x.bank_received)+'<br>Credit: '+money(x.credit_amount)+'</p><p>'+esc(x.notes||'')+'</p><p>Thank you for choosing Janushan Ice Cream!</p><script>window.onload=()=>window.print()<\\/script></body></html>');w.document.close()}
function chartSvg(values){const w=680,h=190,p=22,max=Math.max(1,...values.map(x=>x.value)),pts=values.map((x,i)=>({x:p+i*(w-2*p)/Math.max(1,values.length-1),y:h-p-(x.value/max)*(h-2*p)})),path=pts.map((x,i)=>(i?'L':'M')+x.x.toFixed(1)+' '+x.y.toFixed(1)).join(' ');return '<svg class="sales-chart" viewBox="0 0 '+w+' '+h+'" role="img" aria-label="Sales trend"><defs><linearGradient id="salesFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#4f8cff" stop-opacity=".3"/><stop offset="100%" stop-color="#4f8cff" stop-opacity=".02"/></linearGradient></defs><path d="'+path+' L '+(w-p)+' '+(h-p)+' L '+p+' '+(h-p)+' Z" fill="url(#salesFill)"/><path d="'+path+'" fill="none" stroke="#3677ec" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'+pts.map(x=>'<circle cx="'+x.x+'" cy="'+x.y+'" r="4" fill="#fff" stroke="#3677ec" stroke-width="3"/>').join('')+'</svg>'}
function render(){
 if(!biz)return;
 $('#title').textContent=tr(page);
 const businessLabel=$('.top-business');if(businessLabel)businessLabel.textContent=storeSettings.display_name||biz.name;
 document.querySelectorAll('.desktop-nav [data-page],.mobile-nav [data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
 const moreButton=$('#more-nav');if(moreButton)moreButton.classList.toggle('active',!mobilePrimaryNav.includes(page));
 const v=$('#view');if(!v)return;
 

if(page==='Dashboard'){
 const d=today(),entry=dailyCashEntries.find(x=>x.entry_date===d);
 const todayExp=expenses.filter(x=>colomboDate(x.spent_at)===d);
 const cashExpenses=todayExp.filter(x=>x.paid_from==='cash').reduce((a,x)=>a+Number(x.amount||0),0);
 const totalExpenses=todayExp.reduce((a,x)=>a+Number(x.amount||0),0);
 const grossCash=entry?Number(entry.net_cash_after_expenses)+cashExpenses:null;
 const active=products.filter(x=>x.active);
 const low=stock.filter(x=>x.active&&availableStock(x.id)<=Number(x.low_stock_threshold||0));
 const zero=low.filter(x=>availableStock(x.id)<=0);
 const latestCount=counts.slice().sort((a,b)=>b.count_date.localeCompare(a.count_date))[0];
 const pendingReview=counts.filter(x=>x.status==='submitted').length;
 const reviewed=counts.filter(x=>x.status==='reviewed').sort((a,b)=>a.count_date.localeCompare(b.count_date));
 const pair=reviewed.length>1?periodReconciliation(reviewed[reviewed.length-2],reviewed[reviewed.length-1]):null;
 const canEdit=role!=='viewer';
 const stockAlert=low.length?'<div class="van-alert-list">'+low.slice(0,4).map(x=>'<div class="van-alert-item"><span class="van-alert-icon">'+(availableStock(x.id)<=0?'!':'↓')+'</span><span><strong>'+esc(x.name)+'</strong><small>'+availableStock(x.id)+' '+esc(x.unit||'pcs')+' remaining</small></span><em class="'+(availableStock(x.id)<=0?'danger':'warning')+'">'+(availableStock(x.id)<=0?tr('ZeroStock'):tr('LowStock'))+'</em></div>').join('')+'</div>':'<div class="van-clear-state"><span>✓</span><div><strong>'+tr('VanStockHealthy')+'</strong><small>'+tr('NoLowStockAlerts')+'</small></div></div>';
 const countState=latestCount?'<span class="van-state-dot '+(latestCount.status==='reviewed'?'done':'waiting')+'"></span><strong>'+latestCount.count_date+'</strong><small>'+(latestCount.status==='reviewed'?tr('Reviewed'):tr('Submitted'))+' · '+(latestCount.stock_count_lines||[]).length+' '+tr('CountedProducts')+'</small>':'<span class="van-state-dot waiting"></span><strong>'+tr('NoStockCountYet')+'</strong><small>'+tr('PeriodicCountNote')+'</small>';
 const greeting=lang==='ta'?'வணக்கம்':lang==='si'?'ආයුබෝවන්':'Welcome back';
 v.innerHTML=
 '<section class="van-welcome"><div class="van-welcome-copy"><span class="eyebrow">'+tr('VanWorkspace')+' · '+d+'</span><h1>'+greeting+'</h1><p>'+tr('VanHomeSub')+'</p></div><button class="van-refresh" id="refresh" aria-label="'+tr('Refresh')+'">↻</button></section>'+
 '<section class="van-run-card"><div class="van-run-top"><div><span class="van-run-kicker">'+tr('TodaysVanRun')+'</span><h2>'+tr('KeepTheVanMoving')+'</h2><p>'+tr('VanRunDescription')+'</p></div><div class="van-run-illustration" aria-hidden="true"><img src="./assets/logo.webp" alt=""><small>JANUSHAN</small></div></div><div class="van-run-status"><div class="van-run-step '+(todayExp.length?'complete':'')+'"><span>'+(todayExp.length?'✓':'01')+'</span><div><strong>'+tr('RecordExpensesStep')+'</strong><small>'+todayExp.length+' '+tr('ExpenseRecordsToday')+'</small></div></div><div class="van-run-step '+(entry?'complete':'current')+'"><span>'+(entry?'✓':'02')+'</span><div><strong>'+tr('CashCloseoutStep')+'</strong><small>'+(entry?tr('CashRecorded'):tr('CashNotRecorded'))+'</small></div></div></div><div class="van-run-bottom"><div><small>'+tr('CashRemainingAfterExpenses')+'</small><strong>'+(entry?money(entry.net_cash_after_expenses):'—')+'</strong><span>'+(entry?tr('GrossCashEstimate')+': '+money(grossCash):tr('CashCloseoutHelp'))+'</span></div><button class="btn van-run-button" id="enter-cash" '+(canEdit?'':'disabled')+'>'+(entry?tr('UpdateCashEntry'):tr('RecordCash'))+' <span>→</span></button></div></section>'+
 '<section class="van-quick-actions"><button class="van-action-tile" id="quick-cash" '+(canEdit?'':'disabled')+'><span class="van-action-icon cash">＄</span><span><strong>'+tr('CashCloseoutStep')+'</strong><small>'+tr('EnterCashAfterReturn')+'</small></span><b>→</b></button><button class="van-action-tile" id="quick-expense" '+(canEdit?'':'disabled')+'><span class="van-action-icon expense">＋</span><span><strong>'+tr('RecordExpense')+'</strong><small>'+tr('AddFuelIceEtc')+'</small></span><b>→</b></button><button class="van-action-tile" id="quick-stock"><span class="van-action-icon stock">▦</span><span><strong>'+tr('VanStock')+'</strong><small>'+tr('CheckRemainingStock')+'</small></span><b>→</b></button></section>'+
 '<div class="van-home-grid"><section class="panel van-panel"><div class="van-panel-heading"><div><span class="eyebrow">'+tr('VanStock')+'</span><h2>'+tr('StockNeedsAttention')+'</h2><p>'+active.length+' '+tr('ActiveProducts')+' · '+low.length+' '+tr('LowStockItems')+'</p></div><button class="text-link" id="open-stock">'+tr('ViewAll')+' →</button></div>'+stockAlert+'</section>'+
 '<section class="panel van-panel"><div class="van-panel-heading"><div><span class="eyebrow">'+tr('PeriodicStockControl')+'</span><h2>'+tr('StockCountCycle')+'</h2><p>'+tr('CountOnlyWhenNeeded')+'</p></div><span class="van-count-badge">'+(pendingReview?pendingReview+' '+tr('AwaitingReview'):'● '+tr('Periodic'))+'</span></div><div class="van-count-state">'+countState+'</div><div class="van-panel-actions"><button class="btn btn-secondary" id="open-count">'+tr('StockCountHistory')+'</button>'+(role==='owner'&&pendingReview?'<button class="btn" id="review-counts">'+tr('ReviewCount')+'</button>':'')+'</div></section></div>'+
 (role==='owner'?'<section class="van-owner-strip"><div><span class="eyebrow">'+tr('OwnerOverview')+'</span><h2>'+tr('BusinessAtAGlance')+'</h2><p>'+(pair?pair.start+' → '+pair.end:tr('NeedTwoCountsForReconciliation'))+'</p></div>'+(pair?'<div class="van-owner-metric"><small>'+tr('ExpectedSales')+'</small><strong>'+money(pair.expectedSales)+'</strong></div><div class="van-owner-metric"><small>'+tr('CashDifference')+'</small><strong class="'+(pair.cashVariance>0?'danger':pair.cashVariance<0?'warning':'')+'">'+money(Math.abs(pair.cashVariance))+'</strong></div><div class="van-owner-metric"><small>'+tr('NetProfitEstimate')+'</small><strong>'+money(pair.netProfit)+'</strong></div>':'<div class="van-owner-empty">'+tr('NeedTwoCountsForReconciliation')+'</div>')+'<button class="btn btn-light" id="open-report">'+tr('OpenOwnerReports')+' →</button></section>':'')+
 '<section class="van-footnote"><span>i</span><p>'+tr('NoIndividualSalesReminder')+'</p></section>';
 $('#enter-cash').onclick=()=>{page='Daily cash';render()};
 $('#quick-cash').onclick=()=>{page='Daily cash';render()};
 $('#quick-expense').onclick=()=>expenseModal();
 $('#quick-stock').onclick=()=>{page='Stock';render()};
 $('#open-stock').onclick=()=>{page='Stock';render()};
 $('#open-count').onclick=()=>{page='Weekly count';render()};
 $('#review-counts')?.addEventListener('click',()=>{page='Weekly count';render()});
 $('#open-report')?.addEventListener('click',()=>{page='Reports';render()});
 $('#refresh').onclick=async()=>{if(!navigator.onLine)return toast(tr('Offline'));try{await load();render()}catch(e){toast(e.message)}};
}

else if(page==='Products'){
  const cards=stock.map(x=>'<article class="product-card" data-product-card data-search="'+esc((x.name+' '+(x.category||'')).toLowerCase())+'"><div class="product-photo-stage"><img src="'+esc(mediaUrl(x.image_url)||'./assets/cone.webp')+'" alt="'+esc(x.name)+'" loading="lazy" onerror="this.onerror=null;this.src=\'./assets/cone.webp\'"></div><div class="product-info"><div class="product-title-line"><h3>'+esc(x.name)+'</h3>'+(x.active?'<span class="tag">Active</span>':'<span class="tag warn">'+tr('Archived')+'</span>')+'</div><p class="product-category">'+esc(x.category||tr('Product'))+'</p><div class="product-meta"><strong class="product-price">'+money(x.selling_price)+'</strong><span class="stock-chip">'+tr('Available')+': '+availableStock(x.id)+' '+esc(x.unit||'pcs')+'</span></div>'+(role!=='viewer'?'<div class="product-actions"><button type="button" class="btn alt" data-edit-product="'+x.id+'">'+tr('Edit')+'</button><button type="button" class="pill" data-toggle-product="'+x.id+'">'+(x.active?tr('Archive'):tr('Restore'))+'</button></div>':'')+'</div></article>').join('');
  v.innerHTML='<div class="page-heading"><div><span class="eyebrow">'+tr('Inventory')+'</span><h1>'+tr('ProductCatalogue')+'</h1><p class="muted">'+tr('ProductCatalogueHelp')+'</p></div>'+(role!=='viewer'?'<button class="btn" id="add">＋ '+tr('AddProduct')+'</button>':'')+'</div><section class="catalogue-toolbar"><label class="product-search"><span class="sr-only">'+tr('SearchProducts')+'</span><input id="product-filter" type="search" placeholder="⌕  '+tr('SearchProducts')+'" autocomplete="off"></label><select id="product-status-filter" aria-label="'+tr('FilterProducts')+'"><option value="all">'+tr('AllProducts')+'</option><option value="active">'+tr('ActiveProductsFilter')+'</option><option value="archived">'+tr('ArchivedProductsFilter')+'</option></select></section>'+(cards?'<div class="product-grid">'+cards+'</div>':'<section class="empty-catalogue panel"><div class="empty-catalogue-icon" aria-hidden="true">🍦</div><div><h2>'+tr('StartCatalogue')+'</h2><p class="muted">'+tr('StartCatalogueHelp')+'</p></div>'+(role!=='viewer'?'<button class="btn" id="empty-add">'+tr('AddProduct')+'</button>':'')+'</section>');
  if(role!=='viewer'){$('#add')?.addEventListener('click',productModal);$('#empty-add')?.addEventListener('click',productModal);document.querySelectorAll('[data-edit-product]').forEach(b=>b.onclick=()=>editProductModal(b.dataset.editProduct));document.querySelectorAll('[data-toggle-product]').forEach(b=>b.onclick=async()=>{const p=products.find(x=>x.id===b.dataset.toggleProduct);if(!p)return;if(!confirm(p.active?tr('ConfirmArchive'):tr('ConfirmRestore')))return;const {error}=await db.rpc('set_product_active',{p_product_id:p.id,p_business_id:biz.id,p_active:!p.active});if(error)toast(error.message);else{await load();render()}})}
  const filterProducts=()=>{const q=$('#product-filter').value.trim().toLowerCase(),state=$('#product-status-filter').value;document.querySelectorAll('[data-product-card]').forEach(c=>{const product=products.find(p=>p.id===c.querySelector('[data-edit-product]')?.dataset.editProduct)||products.find(p=>(p.name+' '+(p.category||'')).toLowerCase()===c.dataset.search);c.hidden=!c.dataset.search.includes(q)||(state==='active'&&!c.querySelector('.tag:not(.warn)'))||(state==='archived'&&!c.querySelector('.tag.warn'))})};$('#product-filter').oninput=filterProducts;$('#product-status-filter').onchange=filterProducts;
 }
 
else if(page==='Stock'){
 const q=(window.janStockSearch||'').toLowerCase(),low=!!window.janStockLowOnly;
 const filtered=stock.filter(x=>(!q||(x.name+' '+(x.category||'')).toLowerCase().includes(q))&&(!low||availableStock(x.id)<=Number(x.low_stock_threshold||0)));
 const active=stock.filter(x=>x.active),lowCount=active.filter(x=>availableStock(x.id)<=Number(x.low_stock_threshold||0)).length;
 const zeroCount=active.filter(x=>availableStock(x.id)<=0).length;
 const value=active.reduce((a,x)=>a+Math.max(0,availableStock(x.id))*Number(x.unit_cost||0),0);
 const rows=filtered.map(x=>'<tr data-stock-row data-search="'+esc((x.name+' '+(x.category||'')).toLowerCase())+'" data-low="'+(availableStock(x.id)<=Number(x.low_stock_threshold||0))+'"><td><strong>'+esc(x.name)+'</strong><small class="table-subtext">'+esc(x.category||tr('Product'))+'</small></td><td><strong>'+availableStock(x.id)+'</strong> '+esc(x.unit||'pcs')+'</td><td>'+Number(x.low_stock_threshold||0)+'</td><td>'+(availableStock(x.id)<=0?'<span class="status-pill status-danger">'+tr('ZeroStock')+'</span>':availableStock(x.id)<=Number(x.low_stock_threshold||0)?'<span class="status-pill status-warning">'+tr('LowStock')+'</span>':'<span class="status-pill status-success">'+tr('InStock')+'</span>')+'</td><td>'+money(Math.max(0,availableStock(x.id))*Number(x.unit_cost||0))+'</td><td>'+(role!=='viewer'?'<button class="btn btn-small btn-secondary" data-adj="'+x.id+'">'+tr('Adjust')+'</button>':'—')+'</td></tr>').join('');
 v.innerHTML='<div class="page-heading"><div><span class="eyebrow">'+tr('Inventory')+'</span><h1>'+tr('Stock')+'</h1><p>'+tr('StockSummary')+' · '+money(value)+'</p></div><button class="btn btn-secondary" id="stock-count-link">'+tr('CountProducts')+' →</button></div>'+
 '<section class="dashboard-kpis stock-kpis">'+card(tr('ActiveProducts'),active.length)+card(tr('LowStockItems'),lowCount)+card(tr('ZeroStock'),zeroCount)+card(tr('StockValue'),money(value))+'</section>'+
 '<section class="panel table-panel"><div class="table-toolbar"><div><h2>'+tr('Stock')+'</h2><p>'+tr('StockSummary')+'</p></div><div class="table-controls"><input id="stock-search" type="search" placeholder="⌕  '+tr('SearchStock')+'" value="'+esc(window.janStockSearch||'')+'"><label class="filter-check"><input id="stock-low" type="checkbox" '+(low?'checked':'')+'> '+tr('LowOnly')+'</label></div></div>'+
 '<div class="scroll"><table><thead><tr><th>'+tr('Product')+'</th><th>'+tr('Available')+'</th><th>'+tr('Threshold')+'</th><th>'+tr('StockStatus')+'</th><th>'+tr('StockValue')+'</th><th></th></tr></thead><tbody id="stock-rows">'+(rows||'<tr><td colspan="6" class="empty">'+tr('NoData')+'</td></tr>')+'</tbody></table></div></section>';
 $('#stock-count-link').onclick=()=>{page='Weekly count';render()};
 const applyStockFilters=()=>{const search=$('#stock-search').value.trim().toLowerCase(),onlyLow=$('#stock-low').checked;window.janStockSearch=search;window.janStockLowOnly=onlyLow;document.querySelectorAll('[data-stock-row]').forEach(r=>r.hidden=!r.dataset.search.includes(search)||(onlyLow&&r.dataset.low!=='true'))};
 $('#stock-search').oninput=applyStockFilters;$('#stock-low').onchange=applyStockFilters;
 document.querySelectorAll('[data-adj]').forEach(b=>b.onclick=()=>adjustModal(b.dataset.adj));
}
else if(page==='Historical sales'){
 const q=(window.janSalesSearch||'').toLowerCase(),days=window.janSalesRange??30,rows=days===-1?sales:periodSales(days),filtered=rows.filter(x=>String(x.receipt_no).includes(q)||(x.sale_items||[]).some(i=>String(i.product_name_snapshot||'').toLowerCase().includes(q)));
 v.innerHTML='<div class="page-heading"><div><span class="eyebrow">'+tr('ReportsNav')+'</span><h1>'+tr('Historical sales')+'</h1><p class="muted">'+tr('HistoricalSalesHelp')+'</p></div></div><div class="sales-toolbar"><input id="sales-search" type="search" placeholder="'+tr('SearchSales')+'" value="'+esc(window.janSalesSearch||'')+'"><select id="sales-range"><option value="0" '+(days===0?'selected':'')+'>'+tr('TodayOnly')+'</option><option value="7" '+(days===7?'selected':'')+'>'+tr('Last7Days')+'</option><option value="30" '+(days===30?'selected':'')+'>'+tr('Last30Days')+'</option><option value="-1" '+(days===-1?'selected':'')+'>All time</option></select><button class="btn alt" id="export-sales">'+tr('ExportCSV')+'</button></div><div class="cards sales-summary">'+card(tr('GrossSales'),money(filtered.reduce((a,x)=>a+Number(x.gross_total),0)))+card(tr('NetSales'),money(filtered.reduce((a,x)=>a+saleNet(x),0)))+card(tr('TotalItems'),filtered.reduce((a,x)=>a+(x.sale_items||[]).reduce((n,i)=>n+Number(i.quantity||0),0),0))+'</div><section class="panel">'+table([tr('Receipt'),tr('Date'),tr('Payment'),tr('Gross'),tr('Discount'),tr('Net'),tr('Print')],filtered.map(x=>['#'+x.receipt_no,dateTime(x.sold_at),tr(x.payment_method),money(x.gross_total),money(x.discount_total),money(saleNet(x)),'<button class="pill" data-print="'+x.id+'">'+tr('Print')+'</button>']))+'</section>'+(pendingSales.length?'<section class="panel"><h3>'+tr('PendingSales')+'</h3>'+table([tr('Date'),tr('Product'),tr('Net'),tr('Status'),''],pendingSales.map(x=>{const names=(x.priceSnapshot||[]).map(p=>esc(p.name)).join(', '),amount=(x.priceSnapshot||[]).reduce((a,p)=>{const line=(x.payload.p_items||[]).find(i=>i.product_id===p.product_id);return a+Number(p.price||0)*Number(line?.quantity||0)},0)-Number(x.payload.p_discount||0);return [dateTime(x.payload.p_sold_at),names,money(amount),'<span class="tag">'+tr('PendingSync')+'</span>','<button class="pill" data-remove-pending="'+esc(x.id)+'">'+tr('Remove')+'</button>']}))+'</section>':'');
 if(role!=='viewer')$('#addsale')?.remove();
 $('#sales-search').oninput=()=>{window.janSalesSearch=$('#sales-search').value;const p=$('#sales-search').selectionStart;render();$('#sales-search').focus();$('#sales-search').setSelectionRange(p,p)};
 $('#sales-range').onchange=()=>{window.janSalesRange=Number($('#sales-range').value);render()};
 $('#export-sales').onclick=()=>downloadCsv('janushan-sales-'+today()+'.csv',[['Receipt','Date','Payment','Gross LKR','Discount LKR','Net LKR','Cash LKR','Bank LKR','Credit LKR','Notes'],...filtered.map(x=>[x.receipt_no,x.sold_at,x.payment_method,x.gross_total,x.discount_total,saleNet(x),x.cash_received,x.bank_received,x.credit_amount,x.notes||''])]);
 document.querySelectorAll('[data-print]').forEach(b=>b.onclick=()=>printReceipt(b.dataset.print));
 document.querySelectorAll('[data-remove-pending]').forEach(b=>b.onclick=()=>{if(confirm(tr('PendingRemovalWarning'))){savePendingSales(pendingSales.filter(x=>x.id!==b.dataset.removePending));render()}});
}
else if(page==='Expenses'){
 const days=window.janExpenseRange??30,q=(window.janExpenseSearch||'').toLowerCase();
 const rows=expenses.filter(x=>days===-1||colomboDate(x.spent_at)>=dateOffset(days-1));
 const filtered=rows.filter(x=>(x.category+' '+(x.description||'')).toLowerCase().includes(q));
 const total=filtered.reduce((a,x)=>a+Number(x.amount),0),cash=filtered.filter(x=>x.paid_from==='cash').reduce((a,x)=>a+Number(x.amount),0),bank=filtered.filter(x=>x.paid_from==='bank').reduce((a,x)=>a+Number(x.amount),0);
 const body=filtered.map(x=>'<tr data-expense-row><td>'+dateTime(x.spent_at)+'</td><td><span class="category-chip">'+esc(tr(x.category)||x.category)+'</span></td><td>'+esc(x.description||'—')+'</td><td>'+tr(x.paid_from==='cash'?'CashPaid':'BankPaid')+'</td><td class="amount-cell">'+money(x.amount)+'</td></tr>').join('');
 v.innerHTML='<div class="page-heading"><div><span class="eyebrow">'+tr('Finance')+'</span><h1>'+tr('Expenses')+'</h1><p>'+tr('ExpenseRecords')+'</p></div>'+(role!=='viewer'?'<button class="btn" id="addexp">＋ '+tr('RecordExpense')+'</button>':'')+'</div>'+
 '<section class="dashboard-kpis expense-kpis">'+card(tr('ExpenseTotal'),money(total))+card(tr('CashExpenses'),money(cash))+card(tr('BankExpenses'),money(bank))+'</section>'+
 '<section class="panel table-panel"><div class="table-toolbar"><div><h2>'+tr('ExpenseRecords')+'</h2><p>'+filtered.length+' '+tr('AllExpenses')+'</p></div><div class="table-controls"><input id="expense-search" type="search" placeholder="⌕  '+tr('SearchExpenses')+'" value="'+esc(window.janExpenseSearch||'')+'"><select id="expense-range"><option value="7" '+(days===7?'selected':'')+'>'+tr('Last7Days')+'</option><option value="30" '+(days===30?'selected':'')+'>'+tr('Last30Days')+'</option><option value="90" '+(days===90?'selected':'')+'>'+tr('Last90Days')+'</option><option value="-1" '+(days===-1?'selected':'')+'>'+tr('AllExpenses')+'</option></select><button class="btn btn-secondary" id="export-expenses">'+tr('ExportExpenses')+'</button></div></div>'+
 '<div class="scroll"><table><thead><tr><th>'+tr('Date')+'</th><th>'+tr('Category')+'</th><th>'+tr('Description')+'</th><th>'+tr('Paid')+'</th><th>'+tr('Amount')+'</th></tr></thead><tbody>'+(body||'<tr><td colspan="5" class="empty">'+tr('NoExpenseRecords')+'</td></tr>')+'</tbody></table></div></section>';
 if(role!=='viewer')$('#addexp').onclick=expenseModal;
 $('#expense-search').oninput=()=>{window.janExpenseSearch=$('#expense-search').value;const search=window.janExpenseSearch.toLowerCase();document.querySelectorAll('[data-expense-row]').forEach(r=>r.hidden=!r.textContent.toLowerCase().includes(search))};
 $('#expense-range').onchange=()=>{window.janExpenseRange=Number($('#expense-range').value);render()};
 $('#export-expenses').onclick=()=>downloadCsv('janushan-expenses-'+today()+'.csv',[['Date','Category','Description','Paid from','Amount LKR'],...filtered.map(x=>[x.spent_at,x.category,x.description||'',x.paid_from,x.amount])]);
}
else if(page==='Daily cash')dailyCashPage(v);
 else if(page==='Cash book')dailyCashPage(v);
 else if(page==='Weekly count')countPage(v);
 else if(page==='Reports')reportsPage(v);
 else if(page==='Owner centre')ownerCentrePage(v);
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
function applyAccessibilitySettings(){const root=document.documentElement;root.dataset.theme='blue';root.style.setProperty('--font-scale',String(Number(storeSettings.font_scale)||1.12));root.classList.toggle('reduce-motion',!!storeSettings.reduce_motion)}
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
 v.innerHTML='<div class="store-heading"><div><h1>'+tr('ManageStore')+'</h1><p class="muted">'+tr('ManageStoreSub')+'</p></div><span class="tag">'+(owner?tr('OwnerControls'):tr('ReadOnly'))+'</span></div><div class="store-grid"><section class="panel"><h2>'+tr('Branding')+'</h2><div class="brand-preview"><img id="store-logo-preview" class="store-logo-preview" src="'+esc(mediaUrl(storeSettings.logo_path)||'./assets/logo.webp')+'" alt="Logo" onerror="this.onerror=null;this.src=\'./icon.svg\'"><div><strong>'+esc(storeSettings.display_name||biz.name)+'</strong><small>'+tr('LivePreview')+'</small></div></div><label class="field">'+tr('StoreName')+'<input id="store-name" value="'+esc(biz.name)+'" maxlength="80" '+(owner?'':'disabled')+'></label><label class="field">'+tr('BannerImage')+'<input id="store-banner-file" type="file" accept="image/jpeg,image/png,image/webp" '+(owner?'':'disabled')+'></label><img id="banner-preview" class="banner-preview" src="'+esc(mediaUrl(storeSettings.banner_path)||'./assets/menu-banner.webp')+'" alt="Banner preview"><label class="field">'+tr('LogoImage')+'<input id="store-logo-file" type="file" accept="image/jpeg,image/png,image/webp" '+(owner?'':'disabled')+'></label><div class="brand-lock-note"><span class="brand-lock-mark">✓</span><div><strong>Janushan brand colours</strong><small>Deep navy, white and blue are fixed across the application.</small></div></div><button class="btn" id="save-brand" '+(owner?'':'disabled')+'>'+tr('SaveChanges')+'</button></section><section class="panel"><h2>'+tr('Accessibility')+'</h2><p class="muted">'+tr('AccessibilitySub')+'</p><label class="field">'+tr('TextSize')+'<select id="font-scale" '+(owner?'':'disabled')+'><option value="1">Standard</option><option value="1.12">Large</option><option value="1.25">Extra large</option><option value="1.35">Very large</option></select></label><label class="switch-row"><input id="reduce-motion" type="checkbox" '+(storeSettings.reduce_motion?'checked':'')+' '+(owner?'':'disabled')+'><span>'+tr('ReduceMotion')+'</span></label><p class="muted">'+tr('MotionHelp')+'</p><div class="preview-buttons"><button class="btn alt" id="preview-large">'+tr('PreviewText')+'</button><button class="btn alt" id="preview-motion">'+tr('PreviewEffects')+'</button></div><hr><h2>'+tr('Language')+'</h2><p class="muted">'+tr('LanguageHelp')+'</p>'+languageButtons()+'</section></div><section class="panel"><h2>'+tr('ProductManagement')+'</h2><p class="muted">'+tr('ProductManagementSub')+'</p><div class="store-shortcuts"><button class="btn" id="store-add-product">'+tr('AddProduct')+'</button><button class="btn alt" id="store-products">'+tr('ViewProducts')+'</button></div></section>';
 $('#font-scale').value=String(storeSettings.font_scale||1.12);bindLanguages();
  $('#store-banner-file').onchange=()=>{const f=$('#store-banner-file').files[0];if(f)$('#banner-preview').src=URL.createObjectURL(f)};
  $('#store-logo-file').onchange=()=>{const f=$('#store-logo-file').files[0];if(f)$('#store-logo-preview').src=URL.createObjectURL(f)};
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
  const {error}=await db.rpc('save_business_settings',{p_business_id:biz.id,p_display_name:name,p_banner_path:banner,p_logo_path:logo,p_theme:'blue',p_font_scale:Number($('#font-scale').value),p_reduce_motion:$('#reduce-motion').checked});
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

function adjustModal(pid){let p=products.find(x=>x.id===pid);if(!p)return;const current=stock.find(x=>x.id===pid)?.on_hand??0;modal('Stock movement · '+esc(p.name),'<div class="grid2"><label class="field">Movement<select id="mt"><option value="received">Received</option><option value="damaged">Damaged</option><option value="free">Free item</option><option value="return_in">Customer return</option><option value="return_out">Return to supplier</option><option value="adjustment_in">Adjustment in</option><option value="adjustment_out">Adjustment out</option></select></label>'+field('Quantity','mq','number','1','min="1" step="1" inputmode="numeric" required')+field(tr('Reason'),'mr','text','','maxlength="180" required')+'</div><p>Current available stock: <strong>'+current+' '+esc(p.unit||'pcs')+'</strong></p><p class="muted">Record a stock receipt, loss, return or correction with a clear reason. Physical period counts are handled separately.</p>',async()=>{const typ=$('#mt').value,raw=$('#mq').value,n=Number(raw),reason=$('#mr').value.trim(),neg=['damaged','free','return_out','adjustment_out'].includes(typ);if(raw.trim()===''||!Number.isInteger(n)||n<1)throw Error('Enter a whole-number quantity greater than zero.');if(!reason)throw Error('Enter a reason for this stock movement.');const {error}=await db.rpc('add_stock_movement',{p_movement_id:id(),p_business_id:biz.id,p_product_id:pid,p_movement_type:typ,p_quantity_delta:neg?-n:n,p_reason:reason,p_unit_cost:p.unit_cost});if(error)throw error;await recordBusinessActivity('stock_movement_recorded','stock_movement','',typ+' · '+n+' '+(p.unit||'units'));await load();render();toast('Stock movement saved.')})}

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

function expenseModal(){
 const date=today();
 modal(tr('RecordExpense'),
 '<div class="expense-entry-intro"><strong>Record a cost for this van outing</strong><span>Choose how it was paid. Cash-paid expenses are used when calculating estimated gross cash collected.</span></div>'+
 '<div class="grid2">'+field(tr('Amount'),'ea','number','','min=".01" step=".01" inputmode="decimal" placeholder="0.00" required')+
 '<label class="field"><span>'+tr('Category')+'</span><select id="ec"><option value="Fuel">'+tr('Fuel')+'</option><option value="Maintenance">'+tr('Maintenance')+'</option><option value="Ice">'+tr('Ice')+'</option><option value="Packaging">'+tr('Packaging')+'</option><option value="Food">'+tr('Food')+'</option><option value="Other">'+tr('Other')+'</option></select></label>'+
 '<label class="field"><span>Expense date</span><input id="edate" type="date" value="'+date+'" max="'+date+'" required></label>'+
 '<label class="field"><span>'+tr('Paid')+'</span><select id="ef"><option value="cash">'+tr('CashPaid')+'</option><option value="bank">'+tr('BankPaid')+'</option></select></label>'+
 field(tr('Description'),'ed','text','','maxlength="250" placeholder="Optional details"')+'</div>',
 async()=>{const raw=$('#ea').value,amount=Number(raw),expenseDate=$('#edate').value;if(raw.trim()===''||!Number.isFinite(amount)||amount<=0)throw Error(tr('Amount'));if(!expenseDate||expenseDate>today())throw Error('Choose a valid expense date.');const spentAt=new Date(expenseDate+'T12:00:00+05:30').toISOString();const {error}=await db.rpc('record_expense',{p_expense_id:id(),p_business_id:biz.id,p_amount:amount,p_category:$('#ec').value,p_description:$('#ed').value,p_paid_from:$('#ef').value,p_spent_at:spentAt});if(error)throw error;await recordBusinessActivity('expense_recorded','expense','', 'Expense recorded: '+$('#ec').value);await load();render();toast('Expense saved.')})
}
function dailyCashPage(v){
 const d=today(),entry=dailyCashEntries.find(x=>x.entry_date===d);
 const rows=dailyCashEntries.slice(0,60);
 const cashExpenseFor=date=>expenses.filter(e=>e.paid_from==='cash'&&colomboDate(e.spent_at)===date).reduce((sum,e)=>sum+Number(e.amount||0),0);
 const totalTodayCashExpense=cashExpenseFor(d);
 const gross=entry?Number(entry.net_cash_after_expenses)+totalTodayCashExpense:null;
 const ledger=rows.map(x=>{const e=cashExpenseFor(x.entry_date);return [x.entry_date,money(x.net_cash_after_expenses),money(e),money(Number(x.net_cash_after_expenses)+e)]});
 v.innerHTML='<div class="page-heading"><div><span class="eyebrow">'+tr('Finance')+'</span><h1>'+tr('Daily cash')+'</h1><p>'+tr('CashCloseoutHelp')+'</p></div><span class="status-pill '+(entry?'status-success':'status-warning')+'">'+(entry?tr('CashRecorded'):tr('CashNotRecorded'))+'</span></div>'+
 '<section class="cash-work-instruction"><span class="cash-work-number">01</span><div><strong>When the van returns</strong><p>Count the physical cash remaining after paying outing expenses. Enter that amount once. Do not enter individual customer sales here.</p></div></section>'+
 '<section class="dashboard-kpis cash-kpis">'+card(tr('NetCashRemaining'),entry?money(entry.net_cash_after_expenses):'—')+card(tr('CashExpenses'),money(totalTodayCashExpense))+card(tr('GrossCashEstimate'),gross===null?'—':money(gross))+'</section>'+
 '<section class="panel cash-form-panel"><div class="section-heading"><div><h2>'+tr('CashCloseout')+'</h2><p>Enter the cash physically counted after expenses. Cash-paid expenses are added back for the gross collection estimate.</p></div><span class="step-label">'+tr('TodayDate')+' · '+d+'</span></div>'+
 '<div class="cash-form-grid"><label class="field"><span>'+tr('CashDate')+'</span><input id="dc-date" type="date" value="'+d+'" max="'+d+'"></label><label class="field cash-amount-field"><span>'+tr('NetCashRemaining')+'</span><div class="cash-input-wrap"><span class="cash-currency">'+esc(storeSettings.currency||'OMR')+'</span><input id="dc-amount" type="number" value="'+esc(entry?.net_cash_after_expenses??'')+'" min="0" step=".01" inputmode="decimal" placeholder="0.00" required></div><small>Physical cash in hand after expenses</small></label>'+field(tr('CashNote'),'dc-note','text',entry?.notes||'','maxlength="250" placeholder="Optional note"')+'</div>'+
 '<div class="cash-entry-hint"><span class="hint-icon">i</span><span>'+tr('CashCollectionMethod')+'</span></div><div class="form-actions"><button class="btn" id="save-daily-cash">'+(entry?tr('UpdateCashEntry'):tr('RecordCash'))+' →</button></div></section>'+
 '<section class="panel table-panel"><div class="table-toolbar"><div><h2>'+tr('CashLedger')+'</h2><p>Recent recorded van outings · '+rows.length+' '+tr('CashEntries')+'</p></div><span class="table-note">Amounts in '+esc(storeSettings.currency||'OMR')+'</span></div>'+table([tr('Date'),tr('NetCash'),tr('CashExpense'),tr('GrossCash')],ledger)+'</section>';
 $('#dc-date').onchange=()=>{const selected=$('#dc-date').value,e=dailyCashEntries.find(x=>x.entry_date===selected);$('#dc-amount').value=e?.net_cash_after_expenses??'';$('#dc-note').value=e?.notes||'';$('#save-daily-cash').textContent=(e?tr('UpdateCashEntry'):tr('RecordCash'))+' →'};
 $('#save-daily-cash').onclick=async()=>{const date=$('#dc-date').value,raw=$('#dc-amount').value,amount=Number(raw);if(!date||raw.trim()===''||!Number.isFinite(amount)||amount<0)return toast(tr('EnterCashAmount'));const b=$('#save-daily-cash');b.disabled=true;try{const {error}=await db.rpc('save_daily_cash_entry',{p_entry_id:id(),p_business_id:biz.id,p_entry_date:date,p_net_cash_after_expenses:amount,p_notes:$('#dc-note').value});if(error)throw error;await recordBusinessActivity('cash_closeout_saved','daily_cash',date,'Daily cash close-out saved');await load();render();toast(tr('CashEntrySaved'))}catch(e){toast(e.message)}finally{if($('#save-daily-cash'))$('#save-daily-cash').disabled=false}};
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
function reportsPage(v){
 const reviewed=counts.filter(x=>x.status==='reviewed').sort((a,b)=>a.count_date.localeCompare(b.count_date));
 if(reviewed.length<2){
  v.innerHTML='<div class="page-heading"><div><span class="eyebrow">'+tr('ReportsNav')+'</span><h1>'+tr('Reports')+'</h1><p>'+tr('ChooseTwoCounts')+'</p></div></div><section class="panel report-empty"><span class="empty-icon">▥</span><h2>'+tr('NoReviewedCounts')+'</h2><p>'+tr('CountStepThree')+'</p><button class="btn" id="report-count-link">'+tr('OpenStockCount')+' →</button></section>';
  $('#report-count-link').onclick=()=>{page='Weekly count';render()};return;
 }
 const defaultOpening=reviewed[reviewed.length-2].id,defaultClosing=reviewed[reviewed.length-1].id;
 const openingId=window.janReportOpening||defaultOpening,closingId=window.janReportClosing||defaultClosing;
 const opening=reviewed.find(x=>x.id===openingId)||reviewed[reviewed.length-2];
 const closing=reviewed.find(x=>x.id===closingId)||reviewed[reviewed.length-1];
 const valid=opening.count_date<closing.count_date;
 const report=valid?periodReconciliation(opening,closing):null;
 const option=(x,selected)=>'<option value="'+x.id+'" '+(selected?'selected':'')+'>'+x.count_date+'</option>';
 const selectors='<section class="panel report-selector"><div><span class="eyebrow">'+tr('ReportPeriod')+'</span><h2>'+tr('PeriodReconciliation')+'</h2><p>'+tr('ChooseTwoCounts')+'</p></div><div class="report-select-grid"><label class="field"><span>'+tr('OpeningCount')+'</span><select id="report-opening">'+reviewed.map(x=>option(x,x.id===opening.id)).join('')+'</select></label><label class="field"><span>'+tr('ClosingCount')+'</span><select id="report-closing">'+reviewed.map(x=>option(x,x.id===closing.id)).join('')+'</select></label></div></section>';
 let content='';
 if(!valid){
  content='<section class="panel report-empty"><h2>'+tr('ChooseTwoCounts')+'</h2><p class="muted">'+tr('OpeningCount')+' must be earlier than '+tr('ClosingCount')+'.</p></section>';
 }else{
  const gap=report.cashVariance,varianceLabel=gap>0?tr('CashShortage'):gap<0?tr('CashSurplus'):tr('NoCashShortage');
  const varianceClass=gap>0?'status-danger':gap<0?'status-warning':'status-success';
  const productRows=report.lines.map(x=>[esc(x.name),x.sold,money(x.price),money(x.revenue),money(x.cost),money(x.cogs)]);
  const expenseRows=expenses.filter(x=>colomboDate(x.spent_at)>report.start&&colomboDate(x.spent_at)<=report.end);
  const categories={};expenseRows.forEach(x=>categories[x.category]=(categories[x.category]||0)+Number(x.amount));
  content='<section class="report-kpis">'+card(tr('EstimatedSales'),money(report.expectedSales),tr('UnitsSold')+': '+report.units)+card(tr('GrossCashEstimate'),money(report.grossCash),tr('CashCollectionMethod'))+card(varianceLabel,money(Math.abs(gap)),'<span class="'+varianceClass+'">'+varianceLabel+'</span>')+card(tr('NetProfitEstimate'),money(report.netProfit),tr('CostOfGoods')+': '+money(report.cogs))+'</section>'+
  '<div class="report-grid"><section class="panel report-detail"><div class="section-heading"><div><span class="eyebrow">'+tr('InventoryReconciliation')+'</span><h2>'+tr('Stock movement')+'</h2><p>'+report.start+' → '+report.end+'</p></div></div>'+table([tr('Product'),tr('UnitsSold'),tr('Price'),tr('ExpectedSales'),tr('UnitCost'),tr('CostOfGoods')],productRows)+'</section>'+
  '<section class="panel report-detail"><div class="section-heading"><div><span class="eyebrow">'+tr('CashReconciliation')+'</span><h2>'+tr('PeriodSummary')+'</h2><p>'+report.start+' → '+report.end+'</p></div></div>'+table([tr('Description'),tr('Amount')],[[tr('NetCash'),money(report.cashNet)],[tr('CashExpenses'),money(report.cashExpenses)],[tr('GrossCashEstimate'),money(report.grossCash)],[tr('ExpectedSales'),money(report.expectedSales)],[tr('CashDifference'),money(gap)],[tr('TotalExpenses'),money(report.totalExpenses)],[tr('CostOfGoods'),money(report.cogs)],[tr('NetProfitEstimate'),money(report.netProfit)]])+
  '<div class="report-warning"><strong>'+tr('ReportAccuracyNote')+'</strong><p>'+tr('MissingCashDays')+': '+report.missingCashDays+'</p></div></section></div>'+
  '<section class="panel report-expense-breakdown"><div class="section-heading"><div><span class="eyebrow">'+tr('Finance')+'</span><h2>'+tr('ExpenseRecords')+'</h2></div></div>'+table([tr('Category'),tr('Amount')],Object.entries(categories).map(([name,amount])=>[esc(name),money(amount)]))+'</section>'+
  '<div class="report-actions"><button class="btn btn-secondary" id="export-recon">'+tr('ExportCSV')+'</button><button class="btn" id="report-count-link">'+tr('OpenStockCount')+' →</button></div>';
 }
 v.innerHTML='<div class="page-heading"><div><span class="eyebrow">'+tr('ReportsNav')+'</span><h1>'+tr('Reports')+'</h1><p>'+tr('ChooseTwoCounts')+'</p></div></div>'+selectors+content;
 $('#report-opening').onchange=()=>{window.janReportOpening=$('#report-opening').value;render()};
 $('#report-closing').onchange=()=>{window.janReportClosing=$('#report-closing').value;render()};
 $('#report-count-link').onclick=()=>{page='Weekly count';render()};
 if(report&&valid)$('#export-recon').onclick=()=>downloadCsv('janushan-reconciliation-'+report.start+'-'+report.end+'.csv',[['Product','Estimated units sold','Selling price','Expected sales','Unit cost','COGS'],...report.lines.map(x=>[x.name,x.sold,x.price,x.revenue,x.cost,x.cogs]),[],['Opening count',report.start],['Closing count',report.end],['Expected sales',report.expectedSales],['Gross cash collections',report.grossCash],['Cash variance',report.cashVariance],['COGS',report.cogs],['Expenses',report.totalExpenses],['Estimated net profit',report.netProfit]]);
}


async function ownerCentrePage(v){
 if(role!=='owner'){
  v.innerHTML='<section class="panel report-empty"><h2>Owner access required</h2><p>This control centre is available to the business owner only.</p></section>';
  return;
 }
 const days=Number(window.janOwnerPeriod||30),start=dateOffset(days-1),end=today();
 const inRange=(date)=>date>=start&&date<=end;
 const cashRows=dailyCashEntries.filter(x=>inRange(x.entry_date));
 const expenseRows=expenses.filter(x=>inRange(colomboDate(x.spent_at)));
 const cashExpenses=expenseRows.filter(x=>x.paid_from==='cash').reduce((a,x)=>a+Number(x.amount||0),0);
 const bankExpenses=expenseRows.filter(x=>x.paid_from!=='cash').reduce((a,x)=>a+Number(x.amount||0),0);
 const netCash=cashRows.reduce((a,x)=>a+Number(x.net_cash_after_expenses||0),0);
 const grossCash=netCash+cashExpenses;
 const totalExpenses=expenseRows.reduce((a,x)=>a+Number(x.amount||0),0);
 const stockCostValue=stock.reduce((a,x)=>a+Number(x.on_hand||0)*Number(x.unit_cost||0),0);
 const reviewed=counts.filter(x=>x.status==='reviewed').sort((a,b)=>a.count_date.localeCompare(b.count_date));
 const closing=reviewed.filter(x=>x.count_date<=end).slice(-1)[0];
 const opening=closing?reviewed.filter(x=>x.count_date<closing.count_date&&x.count_date<=start).slice(-1)[0]:null;
 const recon=opening&&closing?periodReconciliation(opening,closing):null;
 const stockVariance=closing?(closing.stock_count_lines||[]).reduce((a,x)=>a+Math.abs(Number(x.variance||0)),0):null;
 const cashVariance=recon?recon.cashVariance:null;
 const daily=Array.from({length:days},(_,i)=>{
  const date=dateOffset(days-1-i),entry=cashRows.find(x=>x.entry_date===date);
  const exp=expenseRows.filter(x=>x.paid_from==='cash'&&colomboDate(x.spent_at)===date).reduce((a,x)=>a+Number(x.amount||0),0);
  return {date,value:entry?Number(entry.net_cash_after_expenses||0)+exp:0,recorded:!!entry};
 });
 const recordedValues=daily.filter(x=>x.recorded&&x.value>0).map(x=>x.value).sort((a,b)=>a-b);
 const median=values=>{if(!values.length)return 0;const mid=Math.floor(values.length/2);return values.length%2?values[mid]:(values[mid-1]+values[mid])/2};
 const cashMedian=median(recordedValues),dailyExpenseMap={};expenseRows.forEach(x=>{const d=colomboDate(x.spent_at);dailyExpenseMap[d]=(dailyExpenseMap[d]||0)+Number(x.amount||0)});
 const expenseValues=Object.values(dailyExpenseMap).filter(x=>x>0).sort((a,b)=>a-b),expenseMedian=median(expenseValues),anomalies=[];
 if(recordedValues.length>=5&&cashMedian>0)daily.filter(x=>x.recorded).forEach(x=>{if(x.value>cashMedian*2.5)anomalies.push({level:'review',title:'Unusually high cash close-out',detail:x.date+' · '+money(x.value)+' vs typical '+money(cashMedian)});else if(x.value<cashMedian*.35)anomalies.push({level:'check',title:'Unusually low cash close-out',detail:x.date+' · '+money(x.value)+' vs typical '+money(cashMedian)})});
 if(expenseValues.length>=4&&expenseMedian>0)Object.entries(dailyExpenseMap).forEach(([date,value])=>{if(value>expenseMedian*2.5)anomalies.push({level:'review',title:'Expense spike',detail:date+' · '+money(value)+' vs typical '+money(expenseMedian)})});
 new Set(expenseRows.map(x=>colomboDate(x.spent_at))).forEach(date=>{if(!cashRows.some(x=>x.entry_date===date))anomalies.push({level:'check',title:'Expense without cash close-out',detail:date+' · verify whether a cash close-out is pending'})});
 if(stockVariance!==null&&stockVariance>5)anomalies.push({level:'review',title:'Physical stock count variance',detail:'Latest reviewed count has '+stockVariance+' units of absolute variance'});
 if(recon&&Math.abs(recon.cashVariance)>0)anomalies.push({level:Math.abs(recon.cashVariance)>cashMedian*1.5?'review':'check',title:'Stock-to-cash difference',detail:'Estimated sales and reconstructed gross cash differ by '+money(Math.abs(recon.cashVariance))});
 const avgPerOuting=cashRows.length?grossCash/cashRows.length:0,forecast7=avgPerOuting*7,forecast30=avgPerOuting*30,confidence=cashRows.length>=20?'Higher sample':cashRows.length>=8?'Moderate sample':cashRows.length?'Limited sample':'No data';
 const anomalyHtml=anomalies.length?anomalies.slice(0,12).map(a=>'<div class="owner-alert-row '+(a.level==='review'?'alert-review':'alert-check')+'"><span class="owner-alert-mark">'+(a.level==='review'?'!':'i')+'</span><div><strong>'+esc(a.title)+'</strong><small>'+esc(a.detail)+'</small></div></div>').join(''):'<div class="owner-empty"><strong>No rule-based review signals found.</strong><p>This does not guarantee that every record is correct.</p></div>';
 const maxDaily=Math.max(1,...daily.map(x=>x.value));
 const bars=daily.map(x=>'<div class="owner-bar-col" title="'+x.date+' · '+(x.recorded?money(x.value):'No cash record')+'"><div class="owner-bar-track"><span class="owner-bar '+(x.recorded?'':'is-empty')+'" style="height:'+Math.max(x.recorded?3:0,x.value/maxDaily*100)+'%"></span></div><small>'+x.date.slice(8)+'</small></div>').join('');
 const categories={};expenseRows.forEach(x=>{const k=x.category||'Other';categories[k]=(categories[k]||0)+Number(x.amount||0)});
 const categoryRows=Object.entries(categories).sort((a,b)=>b[1]-a[1]).map(([k,n])=>'<div class="owner-category-row"><span>'+esc(k)+'</span><div class="owner-category-track"><i style="width:'+Math.max(2,n/Math.max(1,totalExpenses)*100)+'%"></i></div><strong>'+money(n)+'</strong></div>').join('');
 const membersResult=await db.rpc('list_business_members',{p_business_id:biz.id});
 const members=membersResult.error?[]:(membersResult.data||[]);
 const staffStats=new Map(members.map(m=>[m.user_id,{email:m.email||'Team member',role:m.role,cash:0,expenses:0,counts:0,movements:0,events:0}]));
 const eventRows=Array.isArray(activityEvents)?activityEvents.filter(x=>inRange(colomboDate(x.created_at))):[];
 for(const event of eventRows){const stat=staffStats.get(event.actor_user_id);if(!stat)continue;stat.events++;if(event.event_type==='cash_closeout_saved')stat.cash++;else if(event.event_type==='expense_recorded')stat.expenses++;else if(event.event_type==='stock_count_submitted'||event.event_type==='stock_count_reviewed')stat.counts++;else if(event.event_type==='stock_movement_recorded')stat.movements++}
 const attributable=eventRows.filter(x=>staffStats.has(x.actor_user_id)).length;
 const staffRows=attributable?Array.from(staffStats.values()).map(s=>'<tr><td><strong>'+esc(s.email)+'</strong><small class="table-subtext">'+esc(s.role)+'</small></td><td>'+s.cash+'</td><td>'+s.expenses+'</td><td>'+s.counts+'</td><td>'+s.movements+'</td><td>'+s.events+'</td></tr>').join(''):'';
 const trendRows=daily.filter(x=>x.recorded).map(x=>[x.date,money(x.value)]);
 const reportRows=[
  ['Metric','Value'],['Period start',start],['Period end',end],['Cash entries',cashRows.length],
  ['Net cash after expenses',netCash],['Cash-paid expenses added back',cashExpenses],['Estimated gross cash collected',grossCash],
  ['Total expenses',totalExpenses],['Cash expenses',cashExpenses],['Bank expenses',bankExpenses],
  ['Current stock cost value',stockCostValue],['Stock count absolute variance (latest reviewed)',stockVariance??'Not available'],
  ['Expected sales from reviewed stock-count pair',recon?.expectedSales??'Not available'],
  ['Cash discrepancy from reviewed stock-count pair',cashVariance??'Not available'],
  ['Estimated COGS from reviewed stock-count pair',recon?.cogs??'Not available'],
  ['Estimated net profit from reviewed stock-count pair',recon?.netProfit??'Not available']
 ];
 v.innerHTML='<div class="page-heading owner-heading"><div><span class="eyebrow">OWNER CONTROL CENTRE</span><h1>Business intelligence</h1><p>Operational and financial visibility from your existing cash close-outs, stock counts, movements and expenses.</p></div><div class="heading-actions"><label class="owner-period-label">Reporting window<select id="owner-period"><option value="7" '+(days===7?'selected':'')+'>Last 7 days</option><option value="30" '+(days===30?'selected':'')+'>Last 30 days</option><option value="90" '+(days===90?'selected':'')+'>Last 90 days</option></select></label><button class="btn btn-secondary" id="owner-refresh">↻ Refresh</button></div></div>'+
 '<section class="owner-kpis">'+
 '<article class="owner-kpi"><span>Estimated gross cash collected</span><strong>'+money(grossCash)+'</strong><small>'+cashRows.length+' recorded outing days · cash expenses added back</small></article>'+
 '<article class="owner-kpi"><span>Cash remaining after expenses</span><strong>'+money(netCash)+'</strong><small>Physical cash close-out entries only</small></article>'+
 '<article class="owner-kpi"><span>Total recorded expenses</span><strong>'+money(totalExpenses)+'</strong><small>Cash '+money(cashExpenses)+' · Bank '+money(bankExpenses)+'</small></article>'+
 '<article class="owner-kpi"><span>Current stock cost value</span><strong>'+money(stockCostValue)+'</strong><small>On-hand quantity × recorded unit cost</small></article>'+
 '</section>'+
 '<div class="owner-grid">'+
 '<section class="panel owner-panel owner-trend"><div class="section-heading"><div><span class="eyebrow">CASH COLLECTION</span><h2>Cash collection trend</h2><p>Daily gross cash estimate = physical cash remaining + cash-paid expenses</p></div></div><div class="owner-chart">'+bars+'</div><div class="owner-chart-legend"><span>Recorded outing day</span><span>No cash close-out entered</span></div></section>'+
 '<section class="panel owner-panel"><div class="section-heading"><div><span class="eyebrow">COST CONTROL</span><h2>Expense mix</h2><p>'+expenseRows.length+' records in this period</p></div></div>'+(categoryRows||'<p class="muted">No expense records in this period.</p>')+'<div class="owner-total-row"><span>Total expenses</span><strong>'+money(totalExpenses)+'</strong></div></section>'+
 '</div>'+
 '<div class="owner-grid owner-grid-equal">'+
 '<section class="panel owner-panel"><div class="section-heading"><div><span class="eyebrow">EARLY WARNING</span><h2>Operational review signals</h2><p>Rule-based indicators for owner review; not fraud findings</p></div><span class="status-pill '+(anomalies.length?'status-warning':'status-success')+'">'+anomalies.length+' signals</span></div>'+anomalyHtml+'</section>'+
 '<section class="panel owner-panel"><div class="section-heading"><div><span class="eyebrow">PLANNING</span><h2>Cash collection run-rate</h2><p>Projection per future business outing, not calendar-day sales</p></div></div><div class="owner-forecast-main"><span>Average gross cash per recorded outing</span><strong>'+money(avgPerOuting)+'</strong><small>'+cashRows.length+' recorded outing(s) · '+confidence+'</small></div><div class="owner-stat-list"><div><span>Next 7 business outings</span><strong>'+money(forecast7)+'</strong></div><div><span>Next 30 business outings</span><strong>'+money(forecast30)+'</strong></div></div><p class="owner-footnote">Simple run-rate forecast. Assumes future outings resemble the selected period; it does not account for seasonality or closures.</p></section>'+
 '</div>'+
 '<section class="owner-grid owner-grid-equal">'+
 '<section class="panel owner-panel"><div class="section-heading"><div><span class="eyebrow">STOCK CONTROL</span><h2>Inventory health</h2><p>Live stock position from existing stock balances</p></div></div><div class="owner-stat-list"><div><span>Active products</span><strong>'+products.filter(x=>x.active).length+'</strong></div><div><span>Low-stock products</span><strong>'+stock.filter(x=>x.active&&Number(x.on_hand||0)<=Number(x.low_stock_threshold||0)).length+'</strong></div><div><span>Out of stock</span><strong>'+stock.filter(x=>x.active&&Number(x.on_hand||0)<=0).length+'</strong></div><div><span>Latest reviewed count</span><strong>'+(closing?closing.count_date:'Not available')+'</strong></div><div><span>Absolute count variance</span><strong>'+(stockVariance===null?'—':stockVariance.toLocaleString('en-LK'))+'</strong></div></div></section>'+
 '<section class="panel owner-panel"><div class="section-heading"><div><span class="eyebrow">CASH VS STOCK</span><h2>Discrepancy analysis</h2><p>Requires two reviewed physical stock counts</p></div></div>'+(recon?'<div class="owner-recon-highlight '+(cashVariance>0?'is-warning':cashVariance<0?'is-info':'is-good')+'"><span>Estimated cash discrepancy</span><strong>'+money(Math.abs(cashVariance))+'</strong><small>'+(cashVariance>0?'Expected stock-based sales exceed estimated cash collected':cashVariance<0?'Estimated cash collected exceeds stock-based expected sales':'No estimated difference')+'</small></div><div class="owner-stat-list"><div><span>Expected sales from stock usage</span><strong>'+money(recon.expectedSales)+'</strong></div><div><span>Estimated gross cash collected</span><strong>'+money(recon.grossCash)+'</strong></div><div><span>Estimated units used</span><strong>'+recon.units.toLocaleString('en-LK')+'</strong></div><div><span>Estimated cost of goods</span><strong>'+money(recon.cogs)+'</strong></div><div><span>Estimated net profit</span><strong>'+money(recon.netProfit)+'</strong></div></div><p class="owner-footnote">Count comparison: '+recon.start+' → '+recon.end+'. This is an operational estimate, not an audited accounting result.</p>':'<div class="owner-empty"><strong>More stock-count data needed</strong><p>Complete and review two physical stock counts to unlock stock-versus-cash discrepancy analysis.</p><button class="btn btn-secondary" id="owner-open-count">Open stock count</button></div>')+'</section>'+
 '</section>'+
 '<section class="panel owner-panel owner-staff"><div class="section-heading"><div><span class="eyebrow">TEAM OPERATIONS</span><h2>Staff activity and performance</h2><p>Operational workload indicators only. No individual sales or staff sales targets are used.</p></div><span class="status-pill status-neutral">'+members.length+' team members</span></div>'+
 (activityEvents===null?'<div class="owner-empty"><strong>Staff activity audit is not enabled yet.</strong><p>Apply the additive Supabase migration <code>supabase/migrations/20261114_business_activity_log.sql</code>. Existing tables and records are not changed.</p></div>':attributable?'<div class="scroll"><table><thead><tr><th>Team member</th><th>Cash close-outs</th><th>Expenses logged</th><th>Stock counts</th><th>Stock movements</th><th>Total actions</th></tr></thead><tbody>'+staffRows+'</tbody></table></div><p class="owner-footnote">Counts include only actions recorded after activity logging is enabled. Legacy records are not retrospectively attributed.</p>':'<div class="owner-empty"><strong>No attributable staff actions in this period.</strong><p>New cash close-outs, expenses, stock counts and stock movements are attributed to the authenticated member who saved them.</p></div>')+
 '</section>'+
 '<section class="panel owner-panel owner-finance"><div class="section-heading"><div><span class="eyebrow">FINANCIAL REPORTING</span><h2>Owner financial snapshot</h2><p>'+start+' → '+end+' · based on recorded cash close-outs and expenses</p></div><button class="btn btn-secondary" id="owner-export">Export CSV</button><button class="btn" id="owner-print">Print / Save PDF</button></div><div class="owner-finance-grid"><div><span>Net cash remaining</span><strong>'+money(netCash)+'</strong></div><div><span>Cash expenses</span><strong>'+money(cashExpenses)+'</strong></div><div><span>Bank expenses</span><strong>'+money(bankExpenses)+'</strong></div><div><span>Gross cash estimate</span><strong>'+money(grossCash)+'</strong></div></div><div class="owner-total-row"><span>Cash close-out records in selected period</span><strong>'+cashRows.length+'</strong></div><p class="owner-footnote">Gross cash is reconstructed from the physical cash remaining after expenses plus expenses paid from cash. Bank-paid expenses are not added to cash collections.</p></section>'+
 '<section class="owner-actions"><button class="btn btn-secondary" id="owner-open-reports">Open detailed reconciliation reports</button><button class="btn btn-secondary" id="owner-open-team">Manage team</button><button class="btn btn-secondary" id="owner-open-expenses">Review expenses</button></section>';
 $('#owner-period').onchange=()=>{window.janOwnerPeriod=Number($('#owner-period').value);render()};
 $('#owner-refresh').onclick=async()=>{try{await load();render();toast('Business intelligence refreshed.')}catch(e){toast(e.message)}};
 $('#owner-export').onclick=()=>downloadCsv('janushan-owner-financial-report-'+start+'-'+end+'.csv',reportRows);
 $('#owner-print').onclick=()=>{
  const rows=reportRows.map((r,i)=>'<tr><'+(i===0?'th':'td')+'>'+r.map(x=>'<span>'+esc(String(x??''))+'</span>').join('</'+(i===0?'th':'td')+'><'+(i===0?'th':'td')+'>')+'</'+(i===0?'th':'td')+'></tr>').join('');
  const w=window.open('','_blank','width=900,height=900');if(!w){toast('Allow pop-ups to print the owner report.');return}
  w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Janushan Owner Report</title><style>body{font:14px Arial,sans-serif;color:#17243a;margin:32px}h1{font-size:24px;margin:0 0 5px}p{color:#64748b;margin:0 0 22px}table{width:100%;border-collapse:collapse}td,th{text-align:left;padding:11px;border-bottom:1px solid #e5eaf0}th{background:#f3f6fa}@media print{body{margin:12mm}tr{break-inside:avoid}}</style></head><body><h1>'+esc(storeSettings.display_name||biz.name)+' · Owner Financial Report</h1><p>Reporting period: '+start+' to '+end+' · Generated '+new Date().toLocaleString()+'</p><table>'+rows+'</table><script>window.onload=()=>window.print()<\\/script></body></html>');
  w.document.close();
 };
 $('#owner-open-count')?.addEventListener('click',()=>{page='Weekly count';render()});
 $('#owner-open-reports').onclick=()=>{page='Reports';render()};
 $('#owner-open-team').onclick=()=>{page='Team';render()};
 $('#owner-open-expenses').onclick=()=>{page='Expenses';render()};
}

function countPage(v){
 const sorted=counts.slice().sort((a,b)=>b.count_date.localeCompare(a.count_date));
 const todayCount=sorted.find(x=>x.count_date===today());
 const submitted=sorted.filter(x=>x.status==='submitted');
 const reviewed=sorted.filter(x=>x.status==='reviewed');
 const rows=sorted.map(x=>[x.count_date,'<span class="status-pill '+(x.status==='reviewed'?'status-success':'status-warning')+'">'+tr(x.status==='reviewed'?'Reviewed':'Submitted')+'</span>',(x.stock_count_lines||[]).length,(x.stock_count_lines||[]).reduce((a,z)=>a+Number(z.variance||0),0)]);
 const eligible=products.filter(p=>p.active||Number(stock.find(x=>x.id===p.id)?.on_hand||0)>0);
 v.innerHTML='<div class="page-heading"><div><span class="eyebrow">'+tr('Inventory')+'</span><h1>'+tr('StockCount')+'</h1><p>'+tr('CountInstructions')+'</p></div><button class="btn" id="startcount" '+(todayCount||role==='viewer'?'disabled':'')+'>'+ (todayCount?tr('CountAlreadySubmitted'):tr('CountProducts'))+' →</button></div>'+
 '<section class="panel count-workflow"><div class="section-heading"><div><h2>'+tr('CountWorkflow')+'</h2><p>'+tr('ReconcileHint')+'</p></div><span class="status-pill status-neutral">'+eligible.length+' '+tr('Products')+'</span></div><div class="workflow-steps"><div><span>01</span><strong>'+tr('CountStepOne')+'</strong></div><div><span>02</span><strong>'+tr('CountStepTwo')+'</strong></div><div><span>03</span><strong>'+tr('CountStepThree')+'</strong></div></div></section>'+
 '<section class="dashboard-kpis count-kpis">'+card(tr('CountedProducts'),todayCount?(todayCount.stock_count_lines||[]).length:'—')+card(tr('AwaitingReview'),submitted.length)+card(tr('Reviewed'),reviewed.length)+card(tr('CountVariance'),todayCount?(todayCount.stock_count_lines||[]).reduce((a,z)=>a+Number(z.variance||0),0):'—')+'</section>'+
 (submitted.length?'<section class="panel review-queue"><div class="section-heading"><div><span class="eyebrow">'+tr('Management')+'</span><h2>'+tr('ReviewPendingCounts')+'</h2><p>'+tr('AwaitingReview')+'</p></div></div>'+submitted.map(x=>'<div class="review-row"><div><strong>'+x.count_date+'</strong><small>'+(x.stock_count_lines||[]).length+' '+tr('CountedProducts')+'</small></div>'+(role==='owner'?'<button class="btn btn-secondary" data-review-count="'+x.id+'">'+tr('ReviewCount')+' →</button>':'<span class="status-pill status-warning">'+tr('AwaitingReview')+'</span>')+'</div>').join('')+'</section>':'')+
 '<section class="panel table-panel"><div class="table-toolbar"><div><h2>'+tr('StockCountHistory')+'</h2><p>'+sorted.length+' '+tr('AllProducts')+'</p></div></div>'+table([tr('Date'),tr('Status'),tr('CountedProducts'),tr('CountVariance')],rows)+'</section>';
 $('#startcount').onclick=()=>{
  if(todayCount)return toast(tr('CountAlreadySubmitted'));
  if(!eligible.length)return toast(tr('AddProductsFirst'));
  const body='<div class="count-modal-intro"><strong>'+tr('CountInstructions')+'</strong><p>Count the physical stock remaining for this period. This is a periodic count, not a daily sales task.</p></div><label class="count-search-field"><span>Find a product</span><input id="count-search" type="search" placeholder="Search product name or category"></label><div class="count-input-list">'+eligible.map(p=>'<label class="count-input-row" data-count-search="'+esc((p.name+' '+(p.category||'')).toLowerCase())+'"><span><strong>'+esc(p.name)+'</strong><small>'+esc(p.category||tr('Product'))+' · '+esc(p.unit||'pcs')+'</small></span><input id="ct'+p.id+'" type="number" min="0" step="1" inputmode="numeric" placeholder="Enter count" required></label>').join('')+'</div><div class="count-entry-total"><span>'+eligible.length+' products to count</span><strong>Enter actual physical quantities only</strong></div>';
  modal(tr('CountProducts'),body,async()=>{const lines=eligible.map(p=>({product_id:p.id,actual_quantity:$('#ct'+p.id).value===''?null:Number($('#ct'+p.id).value)}));if(lines.some(x=>!Number.isInteger(x.actual_quantity)||x.actual_quantity<0))throw Error(tr('Actual'));const {error}=await db.rpc('submit_stock_count',{p_count_id:id(),p_business_id:biz.id,p_count_date:today(),p_lines:lines});if(error)throw error;await recordBusinessActivity('stock_count_submitted','stock_count',id(),'Physical stock count submitted');await load();render();toast(tr('CountSubmitted'))},{wide:true});
  const countSearch=$('#count-search');if(countSearch)countSearch.oninput=()=>{const q=countSearch.value.trim().toLowerCase();document.querySelectorAll('.count-input-row[data-count-search]').forEach(row=>row.hidden=!row.dataset.countSearch.includes(q))};
 };
 document.querySelectorAll('[data-review-count]').forEach(b=>b.onclick=()=>{const count=counts.find(x=>x.id===b.dataset.reviewCount);if(!count)return;const variance=(count.stock_count_lines||[]).reduce((a,x)=>a+Number(x.variance||0),0);modal(tr('ReviewCount'),'<div class="review-summary"><strong>'+count.count_date+'</strong><span>'+tr('CountVariance')+': '+variance+'</span></div>'+field(tr('ReviewNotes'),'review-notes','text',''),async()=>{const {error}=await db.rpc('review_stock_count',{p_count_id:count.id,p_business_id:biz.id,p_review_notes:$('#review-notes').value});if(error)throw error;await recordBusinessActivity('stock_count_reviewed','stock_count',count.id,'Physical stock count reviewed');await load();render()})});
}
async function teamPage(v){let {data,error}=await db.rpc('list_business_members',{p_business_id:biz.id});if(error)return v.innerHTML='<section class="panel">'+esc(error.message)+'</section>';v.innerHTML='<div class="row"><h1>'+tr('Team')+'</h1>'+(role==='owner'?'<button class="btn" id="addmember">Add member</button>':'')+'</div><section class="panel">'+table(['Email','Role','Joined',''],data.map(m=>[esc(m.email),m.role,new Date(m.joined_at).toLocaleDateString(),role==='owner'&&m.role!=='owner'?'<button class="pill" data-remove="'+m.user_id+'">Remove</button>':'']))+'</section>';if(role==='owner'){$('#addmember').onclick=()=>modal('Add team member',field(tr('Email'),'me','email')+'<label class="field">Role<select id="mr"><option value="operator">Operator</option><option value="viewer">Viewer</option></select></label><small>They must sign up first.</small>',async()=>{let {error}=await db.rpc('add_business_member_by_email',{p_business_id:biz.id,p_email:$('#me').value,p_role:$('#mr').value});if(error)throw error;render()});document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=async()=>{if(!confirm('Remove this member?'))return;let {error}=await db.rpc('remove_business_member',{p_business_id:biz.id,p_user_id:b.dataset.remove});if(error)toast(error.message);else render()})}}
db.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_OUT'){authRecoveryActive=false;login()}if(event==='PASSWORD_RECOVERY'){authRecoveryActive=true;login('new-password')}});
window.addEventListener('online',async()=>{updateNetworkState();toast(tr('Online'));if(user&&biz){try{await syncPendingSales();await load();render()}catch(e){toast(e.message)}}});
window.addEventListener('offline',()=>{updateNetworkState();toast(tr('Offline'))});
function installUpdateExperience(reg){
 const announce=()=>{
  if(!reg.waiting||document.getElementById('jan-update-banner'))return;
  const banner=document.createElement('aside');
  banner.id='jan-update-banner';banner.className='update-banner';banner.setAttribute('role','status');
  banner.innerHTML='<span class="update-spark" aria-hidden="true">✦</span><span class="update-copy"><strong>New Janushan update ready</strong><small>Your records stay in the cloud. Save or finish any open form before refreshing.</small></span><button type="button" class="btn btn-small" id="jan-apply-update">Update now</button><button type="button" class="update-dismiss" aria-label="Dismiss update">×</button>';
  document.body.append(banner);
  banner.querySelector('.update-dismiss').onclick=()=>banner.remove();
  banner.querySelector('#jan-apply-update').onclick=()=>{
   if(!confirm('Apply the new version now? Save any unfinished form first.'))return;
   banner.querySelector('#jan-apply-update').disabled=true;
   reg.waiting?.postMessage({type:'SKIP_WAITING'});
  };
 };
 if(reg.waiting)announce();
 reg.addEventListener('updatefound',()=>{
  const worker=reg.installing;if(!worker)return;
  worker.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller)announce()});
 });
}
if('serviceWorker'in navigator){
 let hadController=!!navigator.serviceWorker.controller;
 navigator.serviceWorker.addEventListener('controllerchange',()=>{
  if(hadController){window.location.reload();return}
  hadController=true;
 });
 navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'})
  .then(reg=>{installUpdateExperience(reg);reg.update().catch(()=>{});document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')reg.update().catch(()=>{})})})
  .catch(()=>{});
}
boot().catch(e=>{toast(authErrorMessage(e));if(!navigator.onLine){const last=localStorage.getItem('janushan.lastUser');if(last&&restoreSnapshot(last)){layout();toast(tr('OfflineReadOnly'));return}}login('login',authRecoveryActive?tr('RecoveryLinkInvalid'):'')});