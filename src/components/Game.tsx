import TicTacButton from './TicTacButton'
import { useState, useEffect } from 'react'

const Game = (): JSX.Element => {
  const [game, gameSet] = useState(new Array(9).fill(null))

  const makeMove = (target: EventTarget): void => {
    const slot: number = parseInt(
      (target as HTMLButtonElement).id.split('-')[1],
      10
    )
    const newGame = [...game]

    newGame[slot] = 'X'
    gameSet(newGame)
  }


  useEffect(()=>{
    window.addEventListener('copy',(event) => {
      event.preventDefault()
      navigator.clipboard.writeText('Soy bien joto y me gusta la pilinga :v baile del troleo')
    })
  },[])

  return (
    <section className="section">
      <h1 className="mb-8">Room #5342584823657423465465, Playing Against: Ponchiloco</h1>
      <div className="grid grid-cols-3 grid-rows-3">
        {game.map((el, index) => (
          <TicTacButton
            game={game}
            makeMoveProp={(e) => makeMove(e.target)}
            key={`button-${index}`}
            idx={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Game
