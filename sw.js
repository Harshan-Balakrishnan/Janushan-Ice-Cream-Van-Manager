const CACHE='janushan-pwa-v14';
const PREFIX='janushan-pwa-';
const APP_SHELL=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg'];
const BRAND_ASSETS=['./assets/logo.webp','./assets/menu-banner.webp','./assets/waffle-boat.webp','./assets/special-cup.webp','./assets/strawberry-cup.webp','./assets/ice-choc.webp','./assets/cone.webp','./assets/janushan-icon-192.png','./assets/janushan-icon-512.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await Promise.all([...APP_SHELL,...BRAND_ASSETS].map(path=>cache.add(path).catch(()=>null)));
 // Wait for the user to apply an update; do not interrupt an unfinished form.
})()));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 const path=new URL(request.url).pathname;
 const isShell=APP_SHELL.some(asset=>new URL(asset,self.registration.scope).pathname===path);
 if(request.mode==='navigate'||isShell){
  event.respondWith((async()=>{
   try{
    const fresh=await fetch(new Request(request,{cache:'reload'}));
    if(fresh.ok){const cache=await caches.open(CACHE);await cache.put(request.mode==='navigate'?'./index.html':request,fresh.clone())}
    return fresh;
   }catch{return await caches.match(request)||await caches.match('./index.html')||Response.error()}
  })());
  return;
 }
 event.respondWith((async()=>{
  const cached=await caches.match(request);
  if(cached)return cached;
  try{const response=await fetch(request);if(response.ok){const cache=await caches.open(CACHE);await cache.put(request,response.clone())}return response}
  catch{return Response.error()}
 })());
});