import { useState, useEffect, useMemo, createContext, useContext } from 'react'

import { createTheme } from '@mui/material/styles'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
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

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={themeOptions}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
