import Box from '@mui/material/Box'

import FeaturedCard from '@/shared/components/FeaturedCard'

export default function FeaturedCardGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '1.5rem',
        rowGap: { xs: '20px', sm: '10px' },
        columnGap: { sm: '10px', md: '10px' },
        justifyContent: { sm: 'stretch', md: 'space-between' }
      }}>
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
    </Box>
  )
}
