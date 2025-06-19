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
        marginBottom: '2rem',
        flexDirection: { xs: 'row', lg: 'row' },
        justifyContent: {
          xs: 'center',
          sm: 'center',
          md: 'space-around',
          lg: 'space-between'
        },
        gap: '1rem'
      }}>
      <CardEvent />
      <CardEvent />
      <CardEvent />
    </Box>
  )
}
