import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Randomizer from '../components/Randomizer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className='app'>
        <header>
          <h1>Bloons Tower Defense Battles 2 Randomizer</h1>
        </header>
        <main>
          <p>
            BTDB2 randomizer is a tool to generate random heroes, towers, or both for Bloons Tower Defense Battles 2. 
            Click the generate hero button to generate a random hero, the generate tower button to generate a random tower, 
            or the generate loadout button to generate both.
          </p>
          <Randomizer/>
        </main>
        <footer>

        </footer>
    </div>
  )
}
