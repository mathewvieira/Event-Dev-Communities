import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@/shared/providers/ThemeProvider'

import App from '@/App.jsx'

import '@/shared/styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
)
