import Game from './Game'

const Main = (): JSX.Element => {
  return (
    <main className="big-container py-12 bg-base">
      <div className="responsive">
        <Game />
        <section className="section mt-16">
          <h2>Rooms Available</h2>
          <ul className="grid grid-cols-2 w-full gap-4 place-items-center p-4">
            <li className="">#1239</li>
            <li className="">#5647</li>
            <li className="">#1231</li>
            <li className="">#1485</li>
            <li className="">#3165</li>
            <li className="">#1831</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Main
