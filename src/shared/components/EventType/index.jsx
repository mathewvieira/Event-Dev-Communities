import React, { useState } from 'react'
import Box from '@mui/material/Box'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

export default function EventTypeSelector() {
  const [eventType, setEventType] = useState('todos')

  return (
    <Box>
      {/* Botões */}
      <Box
        sx={{
          p: '6px',
          mb: '2rem',
          borderRadius: '8px',
          display: 'inline-flex',
          backgroundColor: '#F1F5F9 '
        }}
      >
        <ToggleButtonGroup
          value={eventType}
          exclusive
          onChange={(e, val) => val && setEventType(val)}
          sx={{ gap: 1 }}
        >
          {['todos', 'online', 'presencial'].map((type) => (
            <ToggleButton
              key={type}
              value={type}
              disableRipple
              sx={{
                'textTransform': 'none',
                'px': 3,
                'py': 1,
                'border': 'none',
                'borderRadius': '10px',
                'fontWeight': eventType === type ? 700 : 500,
                'backgroundColor': eventType === type ? '#fff' : 'transparent',
                'color': eventType === type ? '#111827' : '#6b7280',
                '&.Mui-selected': {
                  backgroundColor: '#fff',
                  color: '#111827'
                },
                '&:hover': {
                  backgroundColor: eventType === type ? '#fff' : '#e2e8f0'
                }
              }}
            >
              {type === 'todos' && 'Todos'}
              {type === 'online' && 'Online'}
              {type === 'presencial' && 'Presencial'}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}
