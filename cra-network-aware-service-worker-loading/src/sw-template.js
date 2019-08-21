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
  DYNAMIC_NAME: 'responsive-images-v' + CACHE_VERSION
};

const expirationPlugin = new workbox.expiration.Plugin({
  maxEntries: 50,
  maxAgeSeconds: 24 * 60 * 60,
});

// See https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests#force_caching_of_opaque_responses
const cacheOpaqueResponsesPlugin = new workbox.cacheableResponse.Plugin({
  statuses: [0, 200]
});

// See https://developers.google.com/web/tools/workbox/guides/using-plugins#custom_plugins
const normalizeCacheKeyPlugin = {
  cacheKeyWillBeUsed: async ({request, mode}) => {
    // Normalize the cache key.
    // So 'https://example.com/image-max-res.jpg' and 'https://example.com/image-min-res.jpg'
    // would both end up using the same normlized cache key, 'ect-responsive-images'
    // 'https://example.com/4g-video.mp4', 'ect-responsive-video'
    // Because we ignore `mode`, this will be done for both reads and writes.
    const normalizedCacheKey = request.url.search(/max-res|medium-res|min-res/) > -1 ? 'ect-responsive-images' : 'ect-responsive-video';
    return normalizedCacheKey;
  }
};

const responsiveImagesStrategy = new workbox.strategies.CacheFirst({
  cacheName: CURRENT_CACHES.DYNAMIC_NAME,
  plugins: [expirationPlugin, cacheOpaqueResponsesPlugin, normalizeCacheKeyPlugin]
});

workbox.routing.registerRoute(
  // See https://developers.google.com/web/tools/workbox/guides/route-requests#matching_a_route_with_a_regular_expression
  // You could use a different matching strategy if you'd prefer, but for this example, assume that we want to match
  // anything served by the Glitch CDN.
  new RegExp('^https://cdn\\.glitch\\.com/'),
  responsiveImagesStrategy
);
