export const setTheme = (theme: string): void =>
  window.localStorage.setItem('theme', theme)

export const getTheme = (): string =>
  window.localStorage.getItem('theme') ?? 'light'
