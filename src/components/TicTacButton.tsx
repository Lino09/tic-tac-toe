const TicTacButton = (props: {
  game: Array<string | null>
  makeMoveProp: (arg0: any) => void
  idx: number
}): JSX.Element => {
  const { idx, game, makeMoveProp } = props
  const getClass = (slot: number): string => {
    if (slot === 1 || slot === 7) return 'border-x'
    if (slot === 3 || slot === 5) return 'border-y'
    if (slot === 4) return 'border'

    return ''
  }

  const borderValue = getClass(idx)

  return (
    <button
      onClick={makeMoveProp}
      id={`slot-${idx}`}
      className={`slot ${borderValue}`}
    >
      {game[idx]}
    </button>
  )
}

export default TicTacButton
