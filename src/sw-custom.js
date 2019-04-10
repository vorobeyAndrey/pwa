(function () {
  'use strict';
  self.addEventListener('install', (event) => {
    console.log('Установлен', event);
    self.addEventListener('fetch', (event) => {
      console.log('Происходит запрос на сервер');
  });
});

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
          // Подробнее про ETag можно прочитать тут
          // https://en.wikipedia.org/wiki/HTTP_ETag
          const message = {
              type: 'refresh',
              url: 'response.url',
              eTag: '123'
          };
          // Уведомляем клиент об обновлении данных.
          client.postMessage(JSON.stringify(message));
      });
  });
});
}());