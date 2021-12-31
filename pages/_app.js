
import NavBar from '../components/NavBar'
import SSRProvider from 'react-bootstrap/SSRProvider';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>BTDB2 Randomizer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content='height=device-height, initial-scale=1'/>
        <meta name="description" content="Bloons Tower Defense Battles 2 Randomizer. Randomize towers or heroes."/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="canonical" href="https://btdb2randomizer.andrewchimney.com"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@btdb2randomizer"/>
        <meta name="twitter:creator" content="@SarahMaslinNir"/>
        <meta name="twitter:title" content="Randomizer"/>
        <meta name="twitter:description" content="Bloons Tower Defense Battles 2 Randomizer."/>
        <meta name="twitter:image" content="https://cdn.cloudflare.steamstatic.com/steam/apps/1276390/header.jpg?t=1638458113"></meta>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T35FEHWMFS"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-T35FEHWMFS');
          </script> 
      </Head>
      <SSRProvider>
        <NavBar/> 
        <Component {...pageProps} />
      </SSRProvider>
    </>
  )
}
export default MyApp
