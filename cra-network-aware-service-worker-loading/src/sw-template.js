/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded!');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}

const CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
const CURRENT_CACHES = {
  DYNAMIC_NAME: 'ect-dynamic-v' + CACHE_VERSION
};

const matchFunction = ({url, event}) => {
  return new RegExp('max-res|medium-res|min-res|4g-video');
};

const expirationManager = new workbox.expiration.CacheExpiration(
  CURRENT_CACHES.DYNAMIC_NAME,
  {
    maxAgeSeconds: 24 * 60 * 60, // 1 Day
    maxEntries: 50
  }
);

const handler = async ({url, event}) => {
  console.log('[sw handler] requesting event.request.url => ', event.request.url);
  const cache = await caches.open(CURRENT_CACHES.DYNAMIC_NAME);
  const response = await cache.match(event.request);
  if (response) {
    console.log('[sw handler] returning match-cached response');
    return response;
  } else {
    console.log('[sw handler] returning fetched response');
    const networkResponse = await fetch(event.request);
    cache.put(event.request, networkResponse.clone());
    await expirationManager.updateTimestamp(event.request.url);
    return networkResponse;
  }
};

workbox.routing.registerRoute(
  matchFunction,
  handler
);
