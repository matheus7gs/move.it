import Head from 'next/head'

import { CompletedChallengers } from "../components/CompletedChallengers";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/profile';
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | meve.it</title>
      </Head> 

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallengers />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
   </div>
  )
}
