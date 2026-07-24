import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Helio | Predictive Solar Intelligence</title>
        <meta
          name="description"
          content="Helio forecasts solar generation from 15 minutes to days ahead and automatically routes power between solar, battery, and grid."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.svg" type="image/svg+xml" />

        {/* Type system: Space Grotesk (display) / Inter (body) / IBM Plex Mono (data) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        {/* Global wrapper: Paper background, Ink text, Signal Green selection highlight */}
        <div className="font-sans bg-paper text-ink selection:bg-helio-500 selection:text-white min-h-screen">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;