import { DefaultSeo } from 'next-seo';
import Layout from '../components/Layout/';

import '../styles/globals.css';
import { fetchAPI } from "../lib/api";

import App from "next/app";

function MyApp({ Component, pageProps, seo }) {
  return (
    <>
      <DefaultSeo 
        defaultTitle = { seo.SiteName }
        titleTemplate = { "%s - " + seo.TitleTemplate}

        openGraph = {{
          type: "website",
          url: seo.URL,
          title: seo.SiteName,
          description: seo.Description,
          locale: seo.Locale
        }}
      />
      <Layout>
        <Component {...pageProps} />      
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const seo = await fetchAPI("/general-seo");

  return { ...appProps, seo }
}

export default MyApp