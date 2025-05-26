import Box from '@mui/material/Box'

import CardEvent from '@/shared/components/CardEvent'

export default function CardEventGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: '1rem',
        columnGap: '1rem',
        justifyContent: { sm: 'space-evenly', md: 'space-between' }
      }}
    >
      <CardEvent />
      <CardEvent />
      <CardEvent />
    </Box>
  )
}
