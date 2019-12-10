
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
