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

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev, conf: {distDir: 'build'}});
const handle = app.getRequestHandler();

const BASENAME = '/cna-memory-considerate-animation';

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      app.setAssetPrefix(BASENAME);
      if (req.originalUrl !== BASENAME) {
        req.url = req.originalUrl.replace(BASENAME, '');
      } else {
        req.url = req.originalUrl.replace(BASENAME, '/');
      }
      return handle(req, res);
    });
      
    server.listen(3000, error => {
      if (error) throw error;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(exception => {
    console.error(exception.stack);
    process.exit(1);
  });
