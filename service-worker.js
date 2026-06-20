self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', () => {
    self.clients.claim();
});

self.addEventListener('fetch', () => {
    // ترك فارغاً كما كان في النسخة السابقة
});



