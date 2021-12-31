import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Randomizer from '../components/Randomizer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/Script'

export default function Home() {
  return (
      <main>
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
      <section className="text">
        <header>
          <h1>Bloons Tower Defense Battles 2 Randomizer</h1>
        </header>
          <p>
            BTDB2 randomizer is a tool to generate random heroes, towers, or both for Bloons Tower Defense Battles 2. 
            Click the generate hero button to generate a random hero, the generate tower button to generate a random tower, 
            or the generate loadout button to generate both.
          </p>
      </section>
      <section className="randomizer">
        <Randomizer/>
      </section>
        </main>
  )
}
