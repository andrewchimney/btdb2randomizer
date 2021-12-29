import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Randomizer from '../components/Randomizer'

export default function Home() {
  return (
    <div className='app'>
      <Head>
        <title>BTDB2 Randomizer</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content='height=device-height, initial-scale=1'/>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app"/>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
        <header>
          <h1>Bloons Tower Defense Battles 2 Randomizer</h1>
        </header>
        <main>
          <Randomizer/>
        </main>
    </div>
  )
}
