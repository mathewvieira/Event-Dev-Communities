import { useState } from 'react'

import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import InputAdornment from '@mui/material/InputAdornment'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import AppsIcon from '@mui/icons-material/Apps'
import EventIcon from '@mui/icons-material/Event'
import SearchIcon from '@mui/icons-material/Search'

export default function Searchbar() {
  const [view, setView] = useState('calendar')
  const [filter, setFilter] = useState('nearby')

  return (
    <Box
      sx={{
        display: 'flex',
        mb: '2rem',
        justifyContent: 'center',
        backgroundColor: '#f9fafb'
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: 2
        }}>
        <TextField
          placeholder='Buscar eventos...'
          variant='outlined'
          fullWidth
          sx={{
            '&': {
              height: 44,
              Width: '100%',
              borderRadius: 2,
              backgroundColor: 'white',
              boxShadow: '0 0 0 1px #e0e0e0'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            },
            '& .MuiInputBase-root': {
              height: '44px'
            }
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon color='action' />
                </InputAdornment>
              )
            }
          }}
        />

        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{
            '&': {
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0 0 0 1px #e0e0e0',
              height: 44,
              minWidth: 190
            },
            '& fieldset': {
              border: 'none'
            }
          }}>
          <MenuItem value='nearby'>Mais próximos</MenuItem>
          <MenuItem value='recent'>Mais recentes</MenuItem>
          <MenuItem value='popular'>Populares</MenuItem>
        </Select>

        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, val) => {
            if (val) setView(val)
          }}
          sx={{
            border: '1px solid #E2E7F0',
            borderRadius: '12px'
          }}>
          <ToggleButton
            value='grid'
            selected={view === 'grid'}
            sx={{
              'backgroundColor': view === 'grid' ? '#FC692D !important' : '#ffffff',
              'border': 'none',
              'borderRadius': '10px',
              'minWidth': 44,
              'height': 44,
              '&:hover': {
                backgroundColor: view === 'grid' ? '#FC692D !important' : '#f9fafb'
              }
            }}>
            <AppsIcon sx={{ color: view === 'grid' ? '#ffffff' : '#64748B' }} />
          </ToggleButton>

          <ToggleButton
            value='calendar'
            selected={view === 'calendar'}
            sx={{
              'backgroundColor': view === 'calendar' ? '#FC692D !important' : '#ffffff',
              'border': 'none',
              'borderRadius': '10px',
              'minWidth': 44,
              'height': 44,
              '&:hover': {
                backgroundColor: view === 'calendar' ? '#FC692D !important' : '#f9fafb'
              }
            }}>
            <EventIcon sx={{ color: view === 'calendar' ? '#ffffff' : '#64748B' }} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}
