import { useEffect, useRef, useState } from 'react'
import dice1 from './assets/images/dice1.png'
import dice2 from './assets/images/dice2.png'
import dice3 from './assets/images/dice3.png'
import dice4 from './assets/images/dice4.png'
import dice5 from './assets/images/dice5.png'
import dice6 from './assets/images/dice6.png'
import './App.css'

const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6]
const rollIntervalMs = 120
const rollDurationMs = 3000

const getRandomDie = () => Math.floor(Math.random() * 6) + 1

function App() {
  const [playerName, setPlayerName] = useState('Player 1')
  const [playerDie, setPlayerDie] = useState(1)
  const [pcDie, setPcDie] = useState(1)
  const [result, setResult] = useState(null)
  const [isRolling, setIsRolling] = useState(false)

  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  const clearTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      clearTimers()
    }
  }, [])

  const displayName = playerName.trim() || 'Player 1'

  const handleRoll = () => {
    if (isRolling) return

    clearTimers()
    setResult(null)
    setIsRolling(true)

    intervalRef.current = setInterval(() => {
      setPlayerDie(getRandomDie())
      setPcDie(getRandomDie())
    }, rollIntervalMs)

    timeoutRef.current = setTimeout(() => {
      clearInterval(intervalRef.current)
      intervalRef.current = null

      const finalPlayer = getRandomDie()
      const finalPc = getRandomDie()

      setPlayerDie(finalPlayer)
      setPcDie(finalPc)

      if (finalPlayer === finalPc) {
        setResult('draw')
      } else if (finalPlayer > finalPc) {
        setResult('player')
      } else {
        setResult('pc')
      }

      setIsRolling(false)
    }, rollDurationMs)
  }

  let statusTitle = 'Hazirsan basla'
  let statusDetail = 'Tek el, tek sans.'

  if (isRolling) {
    statusTitle = 'Zarlar karisiyor...'
    statusDetail = 'Sonuc icin yaklasik 3 saniye bekle.'
  } else if (result === 'player') {
    statusTitle = `${displayName} kazandi!`
    statusDetail = `Kazanan: ${displayName} | Kaybeden: PC`
  } else if (result === 'pc') {
    statusTitle = 'PC kazandi!'
    statusDetail = `Kazanan: PC | Kaybeden: ${displayName}`
  } else if (result === 'draw') {
    statusTitle = 'Berabere!'
    statusDetail = 'Kimse kaybetmedi.'
  }

  const buttonLabel = isRolling ? 'Zarlar atiliyor...' : result ? 'Tekrar at' : 'Zar at'
  const winner = result === 'player' ? 'player' : result === 'pc' ? 'pc' : null

  return (
    <div className="app">
      <main className="arena">
        <header className="app-header">
          <div className="title-block">
            <span className="eyebrow">Patika Week 9 Dice Duel</span>
            <h1>Lucky Clash</h1>
            <p className="subtitle">Tek el, tek şans.</p>
          </div>
          <div className="name-field">
            <label htmlFor="playerName">Oyuncu adı</label>
            <input
              id="playerName"
              type="text"
              maxLength={16}
              value={playerName}
              onChange={(event) => setPlayerName(event.target.value)}
              placeholder="Player 1"
            />
          </div>
        </header>

        <div className="section-divider">Oyuncular</div>

        <section className="board">
          <article className={`player-card ${winner === 'player' ? 'winner' : ''}`}>
            <div className="player-header">
              <div>
                <p className="player-title">{displayName}</p>
                <p className="player-sub">Player 1</p>
              </div>
            </div>
            <div className="dice-wrap">
              <img
                src={diceFaces[playerDie - 1]}
                alt={`${displayName} dice ${playerDie}`}
                className={`dice ${isRolling ? 'rolling' : ''}`}
              />
            </div>
            <div className="score">
              <span>Zar</span>
              <strong>{playerDie}</strong>
            </div>
            {winner === 'player' && <span className="winner-tag">Kazanan</span>}
          </article>

          <div className="versus">
            <span>VS</span>
            <p>Best of one</p>
          </div>

          <article className={`player-card ${winner === 'pc' ? 'winner' : ''}`}>
            <div className="player-header">
              <div>
                <p className="player-title">PC</p>
                <p className="player-sub">Player 2</p>
              </div>
            </div>
            <div className="dice-wrap">
              <img
                src={diceFaces[pcDie - 1]}
                alt={`PC dice ${pcDie}`}
                className={`dice ${isRolling ? 'rolling' : ''}`}
              />
            </div>
            <div className="score">
              <span>Zar</span>
              <strong>{pcDie}</strong>
            </div>
            {winner === 'pc' && <span className="winner-tag">Kazanan</span>}
          </article>
        </section>

        <div className="section-divider">Tur sonucu</div>

        <section className="status-panel">
          <div className="status-message">
            <span className="status-label">Sonuç</span>
            <p className="status-title">{statusTitle}</p>
            <p className="status-detail">{statusDetail}</p>
          </div>
          <button className="roll-button" onClick={handleRoll} disabled={isRolling}>
            {buttonLabel}
          </button>
        </section>

        <footer className="app-footer">
          <p>Zarlar 3 saniye boyunca karışır, sonra sonuç açıklanır.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
