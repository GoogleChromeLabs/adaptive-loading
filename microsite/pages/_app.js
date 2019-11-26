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

import App from 'next/app';

import Layout from '../hoc/Layout';
// workaround inspired by
// https://github.com/zeit/next-plugins/issues/282
// https://github.com/zeit/next.js/issues/5598#issuecomment-437619043
// https://github.com/zeit/next.js/issues/5291
// https://github.com/zeit/next.js/issues/5598#issuecomment-443319470
// https://github.com/zeit/next.js/issues/5264#issuecomment-424000127
import '../public/static/styles/jank-empty.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
