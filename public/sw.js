const CACHE_NAME = 'sw-v1';

const urlsToCache = [
  '/',
  '/static/js/2.4c42b6fc.chunk.js',
  '/static/js/main.63fd41e7.chunk.js',
  '/favicon.ico',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then(cached => {
        let networked = fetch(event.request)
          .then(response => {
            const cacheCopy = response.clone();
            caches
              .open(CACHE_NAME)
              .then(cache => cache.put(event.request, cacheCopy));
            return response;
          })
          .catch(() => caches.match(offlinePage));
        return cached || networked;
      })
    );
  }
  return;
});
