import { capitalize } from '@mui/material/utils'

import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'

import { UseTheme } from '@/shared/providers/ThemeProvider'

export default function ThemeToggle(props) {
  const { ...other } = props
  const { theme, toggleTheme } = UseTheme()

  return (
    <Box {...other}>
      <span>{`${capitalize(theme)} Mode`}</span>
      <Switch
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
    </Box>
  )
}
