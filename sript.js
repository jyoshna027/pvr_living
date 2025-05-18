// console.log("PVR Co-living website loaded successfully.");
const cacheName = 'pvr-coliving-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  '/images/logo-icon-192.png',
  '/images/logo-icon-512.png'
];

// Install service worker and cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

// Fetch cached resources when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
