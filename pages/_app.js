
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
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content='height=device-height, initial-scale=1'/>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="canonical" href="https://btdb2randomizer.andrewchimney.com"/>
      </Head>
      <SSRProvider>
        <NavBar/> 
        <Component {...pageProps} />
      </SSRProvider>
    </>
  )
}
export default MyApp
