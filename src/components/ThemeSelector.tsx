import { useState, useEffect } from 'react'
import { getTheme, setTheme } from '../utils/utils'

const ThemeSelector = (): JSX.Element => {
  const [theme, themeSet] = useState(getTheme())

  const themeHandler = (): void => {
    themeSet(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const baseEl = document.documentElement

    if (theme === 'light') baseEl.classList.remove('dark')
    else baseEl.classList.add('dark')
    setTheme(theme)
  }, [theme])

  return (
    <button
      className="w-16 h-8 bg-slate-900 rounded-full relative"
      onClick={() => themeHandler()}
    >
      <div
        className={`sun flex items-center justify-center ${
          theme === 'light'
            ? 'bg-yellow-400 translate-x-2'
            : 'bg-slate-200 translate-x-9'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
</svg>

        <div className={`moon ${theme === 'light' ? 'h-0 w-0' : 'w-3 h-3 '}`} />
      </div>
    </button>
  )
}

export default ThemeSelector
