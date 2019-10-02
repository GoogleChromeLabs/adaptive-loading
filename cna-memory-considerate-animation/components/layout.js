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

import Head from 'next/head';

import MemoryStatus from './MemoryStatus';

const layoutStyle = {
  margin: 10,
  padding: 10,
  border: '1px solid #DDD'
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Head>
      <title>Adaptive Animation</title>
    </Head>
    <MemoryStatus />
    <div className="page-wrapper">
      <div className="content-wrapper">
        {children}
      </div>
      <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-size: 20px;
        line-height: 1.7;
        font-weight: 400;
        background: #fff;
        color: #454545;
        text-rendering: optimizeLegibility;
      }
      a {
        color: #1b789e;
        text-decoration: none;
      }
      a:hover {
        color: #166281;
      }
      img {
        max-width: 100%;
      }
      .content-wrapper {
        max-width: 900px;
        text-align: center;
        margin: 0 auto;
      }
      .container {
        overflow: hidden;
      }
    `}</style>
    </div>
  </div>
);

export default Layout;
