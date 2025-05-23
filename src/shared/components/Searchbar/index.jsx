import { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import SearchIcon from '@mui/icons-material/Search'
import AppsIcon from '@mui/icons-material/Apps'
import EventIcon from '@mui/icons-material/Event'

export default function SearchBarWithControls() {
  const [view, setView] = useState('calendar')
  const [filter, setFilter] = useState('nearby')

  return (
    <Box
      sx={{
        backgroundColor: '#f9fafb',
        p: 2,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1200,
          gap: 2
        }}
      >
        {/* Barra de Pesquisa */}
        <TextField
          placeholder='Buscar eventos...'
          variant='outlined'
          fullWidth
          sx={{
            'backgroundColor': 'white',
            'borderRadius': 2,
            'boxShadow': '0 0 0 1px #e0e0e0',
            'height': 44,
            'minWidth': 150,
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon color='action' />
              </InputAdornment>
            )
          }}
        />

        {/* Filtro de ordenação */}
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{
            'backgroundColor': 'white',
            'borderRadius': 2,
            'boxShadow': '0 0 0 1px #e0e0e0',
            'height': 44,
            'minWidth': 190,
            '& fieldset': {
              border: 'none'
            }
          }}
        >
          <MenuItem value='nearby'>Mais próximos</MenuItem>
          <MenuItem value='recent'>Mais recentes</MenuItem>
          <MenuItem value='popular'>Populares</MenuItem>
        </Select>

        {/* Botões de visualização */}
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, val) => {
            if (val) setView(val)
          }}
        >
          <ToggleButton
            value='grid'
            style={{ backgroundColor: view === 'grid' ? '#FC692D' : '' }}
            sx={{
              border: 'none',
              borderRadius: '10px',
              minWidth: 44,
              height: 44
            }}
          >
            <AppsIcon />
          </ToggleButton>
          <ToggleButton
            value='calendar'
            style={{ backgroundColor: view === 'calendar' ? '#FC692D' : '' }}
            sx={{
              border: 'none',
              borderRadius: '10px',
              minWidth: 44,
              height: 44
            }}
          >
            <EventIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}
