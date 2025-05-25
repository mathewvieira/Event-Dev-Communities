import Box from '@mui/material/Box'
import CardEvent from '..'

export function CardEventGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px',
        marginTop: '1.5rem'
      }}
    >
      <CardEvent />
      <CardEvent />
      <CardEvent />
    </Box>
  )
}
