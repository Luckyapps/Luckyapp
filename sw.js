var CACHE_STATIC_NAME = 'static-v74';
var CACHE_DYNAMIC_NAME = 'dynamic-v74';

self.addEventListener('install', function (event) {
  console.log('Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function (cache) {
        console.log('Precaching App Shell');
        cache.addAll([
          '/',
          '/index.html', // offline page
          '/main/style.css', //main
          '/main/script.js',
          '/main/update.json',
          '/main/wartung.html',
          //'/main/update-list.js',
          '/sw.js', //offline
          '/manifest.json',
          '/OneSignalSDKUpdaterWorker.js', //Onesignal
          '/OneSignalSDKWorker.js',
        `/fastlink/fastlink.css`, //Fastlink
        `/fastlink/fastlink.html`,
        `/fastlink/fastlink.js`,
        '/fastlink/fastlink.json',
        /*`/fastlink/links/amazon/amazon.html`,
        `/fastlink/links/db/db.html`,
        `/fastlink/links/film/film.html`,
        `/fastlink/links/google/google.html`,
        `/fastlink/links/kino/cine.html`,
        `/fastlink/links/kino/kino.html`,
        `/fastlink/links/lern/lern.html`,
        `/fastlink/links/ls/ls.html`,
        `/fastlink/links/Minecraft/Minecraft.html`,
        `/fastlink/links/Minecraft/wiki.html`,
        `/fastlink/links/prog/prog.html`,
        `/fastlink/links/search/search.html`,
        `/fastlink/links/search/search.css`,
        `/fastlink/links/search/search.js`,
        `/fastlink/links/standalone/standalone.html`,
        `/fastlink/links/twitch/twitch.html`,
        `/fastlink/links/wiki/wiki.html`,
        `/fastlink/links/Youtube/youtube.html`,
        `/fastlink/links/standart.html`,*/
        '/images/corona.png', //Images
        '/images/minecraft.png',
        '/images/musik.png',
        '/images/rechner.png',
        '/images/tools.jpg',
        `/images/icons/icon-128x128.png`,
        `/images/icons/icon-144x144.png`,
        `/images/icons/icon-152x152.png`,
        `/images/icons/icon-192x192.png`,
        `/images/icons/icon-384x384.png`,
        `/images/icons/icon-512x512.png`,
        `/images/icons/icon-72x72.png`,
        `/images/icons/icon-96x96.png`,
        '/musik/musik2.html', //Musik
        '/musik/musik2.css',
          '/tools/tools.html', //Tools
          '/tools/tools.css',
          '/tools/tools.js',
          /*'https://assistant.thebuissnescree.repl.co/assistant_core.js',
          'https://geo.thebuissnescree.repl.co/script.js',
          'https://hangman.thebuissnescree.repl.co/script.js',
          'https://hangman.thebuissnescree.repl.co/luckyapp.html',
          'https://hangman.thebuissnescree.repl.co/style.css',
          'https://hangman.thebuissnescree.repl.co/luckyappstyle.css',*/
          '/rechner/rechner.html', //Rechner
          '/rechner/rechner.css'
        ]);
      })
  )
});

self.addEventListener('activate', function (event) {
  console.log('Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the network
    fetch(event.request)
      .then(function(res) {
        return caches.open(CACHE_DYNAMIC_NAME)
          .then(function(cache) {
            // Put in cache if succeeds
            cache.put(event.request.url, res.clone());
            return res;
          })
      })
      .catch(function(err) {
          // Fallback to cache
          return caches.match(event.request);
      })
  );
});