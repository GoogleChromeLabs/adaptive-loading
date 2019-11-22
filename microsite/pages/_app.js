
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
