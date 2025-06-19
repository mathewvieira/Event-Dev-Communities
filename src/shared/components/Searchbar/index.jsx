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

export default function Searchbar({
  view,
  setView,
  showToggle = true,
  placeholderText,
  filterOptions = [
    { value: 'nearby', label: 'Mais próximos' },
    { value: 'recent', label: 'Mais recentes' },
    { value: 'popular', label: 'Populares' }
  ]
}) {
  // const [filter, setFilter] = useState('nearby')
  const [filter, setFilter] = useState(filterOptions[0]?.value || '')

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
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' },
          width: '100%',
          gap: 2
        }}>
        <TextField
          placeholder={placeholderText}
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
          {filterOptions.map((opt) => (
            <MenuItem
              key={opt.value}
              value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
        {showToggle && (
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={(_, val) => {
              if (val) setView(val)
            }}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              alignSelf: { xs: 'stretch', sm: 'auto' },
              border: '1px solid #E2E7F0',
              borderRadius: '12px'
            }}>
            <ToggleButton
              value='grid'
              selected={view === 'grid'}
              sx={{
                'flex': 1,
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
                'flex': 1,
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
        )}
      </Box>
    </Box>
  )
}
