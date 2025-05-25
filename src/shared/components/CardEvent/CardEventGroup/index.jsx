import Box from '@mui/material/Box'

import CardEvent from '@/shared/components/CardEvent'

export default function CardEventGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: '1.5rem'
      }}
    >
      <CardEvent />
      <CardEvent />
      <CardEvent />
    </Box>
  )
}
