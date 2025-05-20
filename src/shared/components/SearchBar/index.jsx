import { useState } from 'react'

import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import GridViewIcon from '@mui/icons-material/GridView'
import InputAdornment from '@mui/material/InputAdornment'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

function SearchBar() {
  const [filter, setFilter] = useState('Mais próximos')

  return (
    <Box
      gap={1}
      display='flex'
      alignItems='center'
      sx={{ backgroundColor: '#f9fafb', padding: 2 }}
    >
      <TextField
        variant='outlined'
        placeholder='Buscar eventos...'
        size='small'
        sx={{ flex: 1 }}
        input={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />

      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        size='small'
        sx={{ minWidth: 150 }}
      >
        <MenuItem value='Mais próximos'>Mais próximos</MenuItem>
        <MenuItem value='Mais recentes'>Mais recentes</MenuItem>
        <MenuItem value='Mais populares'>Mais populares</MenuItem>
      </Select>

      <IconButton>
        <GridViewIcon />
      </IconButton>

      <IconButton
        sx={{
          '&': {
            backgroundColor: '#ff6b00',
            color: 'white'
          },
          '&:hover': { backgroundColor: '#e65c00' }
        }}
      >
        <CalendarMonthIcon />
      </IconButton>
    </Box>
  )
}

export default SearchBar
