
import NavBar from '../components/NavBar'
import SSRProvider from 'react-bootstrap/SSRProvider';
import Head from 'next/head';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/btdb2randomizer.css'
import '../styles/vip.css'
import '../styles/home.css'
import '../styles/navbar.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Bloons Tower Defense Battles 2 Randomizer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content='height=device-height, initial-scale=1'/>
        <meta name="description" content="BTDB2 randomizer is a tool to generate random heroes, towers, or both for Bloons Tower Defense Battles 2. 
            Click the generate hero button to generate a random hero, the generate tower button to generate a random tower, 
            or the generate loadout button to generate both."/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="canonical" href="https://andrewchimney.com"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@btdb2randomizer"/>
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta name="twitter:title" content="Randomizer" />
        <meta name="twitter:description" content="Bloons Tower Defense Battles 2 Randomizer." />
        <meta name="twitter:image" content="https://cdn.cloudflare.steamstatic.com/steam/apps/1276390/header.jpg?t=1638458113"></meta>
      </Head>

      <SSRProvider>
      <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-T35FEHWMFS"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T35FEHWMFS');
        `}
                </Script>
                <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1114753024999011"
                    crossorigin="anonymous" strategy="afterInteractive"></Script>
        <NavBar />
        <Component {...pageProps} />
      </SSRProvider>
    </>
  )
}
export default MyApp
