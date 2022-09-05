import { useState } from 'react'
import { Gamer } from '../utils/types'
import ThemeSelector from './ThemeSelector'
import LoginModal from './LoginModal'

const Header = (): JSX.Element => {
  
  const [isModalOpen, isModalOpenSet] = useState(false)
  const [user, userSet] = useState<Gamer>({ name: '', password: '', email: '' })
  
  interface InputElement {
    id: keyof typeof user
    value: string
  }

  const setUserInfo = (target: EventTarget): void => {
    const { id, value }: InputElement = target as any as InputElement
    const newState = { ...user }

    newState[id] = value
    userSet(newState)
  }


  const handleLoginModal = (e: {
    target: EventTarget
    currentTarget: EventTarget
  }): void => {
    userSet({ name: '', password: '', email: '' })
    isModalOpenSet(!isModalOpen)
  }

  return (
    <header className="bg-base p-4 flex justify-between items-center border-b border-slate-700">
      <nav>
        <ul className="flex gap-6 items-center">
          <li>About</li>
          <li>Boards</li>
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <button onClick={handleLoginModal}>
          Login
        </button>
        <ThemeSelector />
      </div>
      {isModalOpen && (
        <LoginModal user={user} closeModal={() => isModalOpenSet(false)} setUserInfo={setUserInfo} />
      )}
    </header>
  )
}

export default Header
