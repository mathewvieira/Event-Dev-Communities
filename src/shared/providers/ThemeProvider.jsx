import { useState, useEffect, useMemo, createContext, useContext, useCallback } from 'react'

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import lightTheme from '@/shared/themes/light.theme.js'
import darkTheme from '@/shared/themes/dark.theme.js'

const ThemeContext = createContext({
  mode: 'light',
  toggleTheme: () => {}
})

export function UseTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme')
    return savedTheme || 'light'
  })

  useEffect(() => localStorage.setItem('app-theme', theme), [theme])

  const themeOptions = useMemo(() => createTheme(theme === 'light' ? lightTheme : darkTheme), [theme])

  const toggleTheme = useCallback(() => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')), [])

  const themeProviderProps = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={themeProviderProps}>
      <MuiThemeProvider theme={themeOptions}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
