import React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import GridViewIcon from '@mui/icons-material/GridView'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

function SearchBar() {
  const [filter, setFilter] = React.useState('Mais próximos')

  return (
    <Box
      display='flex'
      gap={1}
      alignItems='center'
      sx={{ backgroundColor: '#f9fafb', padding: 2 }}
    >
      {/* Campo de busca */}
      <TextField
        variant='outlined'
        placeholder='Buscar eventos...'
        size='small'
        sx={{ flex: 1 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />

      {/* Filtro dropdown */}
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

      {/* Botões de visualização */}
      <IconButton>
        <GridViewIcon />
      </IconButton>

      <IconButton sx={{ 'backgroundColor': '#ff6b00', 'color': 'white', '&:hover': { backgroundColor: '#e65c00' } }}>
        <CalendarMonthIcon />
      </IconButton>
    </Box>
  )
}

export default SearchBar
