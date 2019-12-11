/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Head from 'next/head';

// TODO: manifest
// import { head } from '../../styles/images';

export default ({ title, description, keywords, canonical, children }) => (
  <Head>
    {title && <title>{title}</title>}
    <meta charSet='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords || ''} />
    <meta name='format-detection' content='telephone=no' />
    <meta name='msapplication-TileColor' content='#da532c' />
    {/* <meta name='msapplication-config' content='/static/head/browserconfig.xml' /> */}
    <meta name='theme-color' content='#ffffff' />
    {/* <link rel='apple-touch-icon' sizes='180x180' href={head.appleTouchIcon} /> */}
    {/* <link rel='icon' type='image/png' sizes='32x32' href={head.favicon32} /> */}
    {/* <link rel='icon' type='image/png' sizes='16x16' href={head.favicon16} /> */}
    {/* <link rel='manifest' href='/static/head/site.webmanifest' /> */}
    <link rel='canonical' href={canonical} />
    {children}
  </Head>
);
