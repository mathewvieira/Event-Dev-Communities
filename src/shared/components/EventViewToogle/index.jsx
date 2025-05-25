import React, { useState } from 'react'
import Box from '@mui/material/Box'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

export default function EventViewToogle() {
  const [eventType, setEventType] = useState('proximos')
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#f4f6f8',
          borderRadius: '8px',
          p: '6px',
          display: 'inline-flex'
        }}
      >
        <ToggleButtonGroup
          value={eventType}
          exclusive
          onChange={(e, val) => val && setEventType(val)}
          sx={{ gap: 1 }}
        >
          {['proximos', 'online'].map((type) => (
            <ToggleButton
              key={type}
              value={type}
              sx={{
                'textTransform': 'none',
                'px': 3,
                'py': 1,
                'border': 'none',
                'borderRadius': '8px',
                'fontWeight': eventType === type ? 700 : 500,
                'color': eventType === type ? '#111827' : '#6b7280',
                'backgroundColor': eventType === type ? '#fff' : 'transparent',
                '&:hover': {
                  backgroundColor: eventType === type ? '#fff' : '#e5e7eb'
                },
                '&.Mui-selected, &.Mui-selected:hover': {
                  backgroundColor: '#fff'
                }
              }}
            >
              {type === 'proximos' && 'Próximos Eventos'}
              {type === 'online' && 'Eventos Online'}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}
