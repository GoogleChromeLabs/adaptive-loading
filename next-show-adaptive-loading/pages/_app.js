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

import Head from '../components/Head';
import Layout from '../hoc/Layout';
import { EmulationContext } from '../contexts';
import { useLiteModeDebugging } from '../utils/hooks';

const MyApp = ({ Component, pageProps }) => {
  const {
    manualEnabled,
    isLiteModeOn,
    enableManualTestingHandler,
    toggleLiteModeHandler
  } = useLiteModeDebugging();

  return (
    <>
      <Head>
        <meta httpEquiv='Accept-CH' content='DPR, Width, Viewport-Width, ECT, Device-Memory' />
        <meta httpEquiv='Accept-CH-Lifetime' content='86400' />
      </Head>
      <EmulationContext.Provider
        value={{
          manualEnabled,
          isLiteModeOn,
          enableManualTestingHandler,
          toggleLiteModeHandler
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EmulationContext.Provider>
    </>
  );
};

export default MyApp;
