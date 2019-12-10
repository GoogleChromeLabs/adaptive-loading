
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
