import { useState } from 'react'

import Box from '@mui/material/Box'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function ToogleCommunityProfile() {
  const [eventType, setEventType] = useState('eventos')

  const options = ['eventos', 'sobre']

  return (
    <Box>
      <Box
        sx={{
          p: '6px',
          my: '1rem',
          borderRadius: '8px',
          display: 'inline-flex',
          backgroundColor: '#f4f6f8'
        }}>
        <ToggleButtonGroup
          value={eventType}
          exclusive
          onChange={(_, val) => val && setEventType(val)}
          sx={{ gap: 1 }}>
          {options.map((type) => (
            <ToggleButton
              key={type}
              value={type}
              sx={{
                '&': {
                  py: 1,
                  px: 3,
                  fontSize: '12px',
                  border: 'none',
                  textWrap: 'nowrap',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: eventType === type ? 700 : 500,
                  color: eventType === type ? '#111827' : '#6b7280',
                  backgroundColor: eventType === type ? '#fff' : 'transparent'
                },
                '&:hover': {
                  backgroundColor: eventType === type ? '#fff' : '#e5e7eb'
                },
                '&.Mui-selected, &.Mui-selected:hover': {
                  backgroundColor: '#fff'
                }
              }}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}
