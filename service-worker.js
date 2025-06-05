const CACHE_NAME = 'recipe-picker-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/recipes-data.js',
  '/manifest.json',
  '/fonts/Jersey-15.woff2',
  '/fonts/Jersey-15.woff',
  '/images/chicken_soup.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
