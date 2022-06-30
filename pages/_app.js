import { createContext } from "react";
import Script from "next/script";
import Head from "next/head";
export const GlobalContext = createContext({});
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext.Provider>
      <Head>
        <title>Trady</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        id="googleAnalytics"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-105300964-1`}
      />
      <Script strategy="lazyOnload" id="google-tag">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-105300964-1', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp
