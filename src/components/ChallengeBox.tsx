import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { 
    activeChallenge, 
    resetChallenge, 
    completedChallenge 
  } = useContext(ChallengesContext);

  const { isActive, resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completedChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return ( 
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (isActive ? (
            <div className={styles.InitCicleActive}>
              <strong>Finalize um ciclo para receber desafios</strong>
              <p>
                <img src="icons/level-up.svg" alt="level up"/>
                Complete-os e ganhe experiência e avance de leve.
              </p>
            </div>
          ) : (
            <div className={styles.challengeNotActive}>
              <strong>Inicie um ciclo para receber desafios</strong>
              <p>
                <img src="icons/level-up.svg" alt="level up"/>
                Avance de level completando os desafios.
              </p>
            </div>
          )
        )}
    </div>
  )
}