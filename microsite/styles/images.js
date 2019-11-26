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

const banners = {
  factorType: {
    svg: '/static/images/factor-type.svg',
    png: '/static/images/factor-type.png',
    alt: 'memory cpu network'
  },
  lowData: {
    webp: '/static/images/low-data.webp',
    jpg: '/static/images/low-data.jpg',
    alt: 'phone with low data'
  }
};

const head = {
  favicon16: '/static/head/favicon-16x16.png',
  favicon32: '/static/head/favicon-32x32.png',
  appleTouchIcon: '/static/head/apple-touch-icon.png'
};

const imagePlaceHolder = '/static/images/placeholder.gif';

export {
  banners,
  head,
  imagePlaceHolder
};
