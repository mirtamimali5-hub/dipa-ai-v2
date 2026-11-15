// Minimal service worker: makes DIPA installable. Never caches the API or pages (always live).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
