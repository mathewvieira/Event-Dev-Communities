import Box from '@mui/material/Box'

import FeaturedCard from '@/shared/components/FeaturedCard'

export default function FeaturedCardGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { sm: 'stretch', md: 'space-between' },
        flexWrap: 'wrap',
        rowGap: { xs: '20px', sm: '10px' },
        columnGap: { sm: '10px', md: '10px' },
        marginTop: '1.5rem'
      }}
    >
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
    </Box>
  )
}
