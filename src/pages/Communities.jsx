import FeaturedCardGroup from '@/shared/components/FeaturedCard/FeaturedCardGroup'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Searchbar from '@/shared/components/Searchbar'
// import { useLocation } from 'react-router-dom'

export default function Communities() {
  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{ paddingTop: '4.5rem' }}>
        <Typography maxWidth='xl'>
          <main className='px-6 py-10 max-w-7xl mx-auto'>
            <h1 className='text-3xl font-semibold mb-2'>Comunidades </h1>
            <p className='text-gray-500 mb-6'>Encontre comunidades de desenvolvedores para participar de eventos.</p>
          </main>
        </Typography>

        <Searchbar showToggle={false} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FeaturedCardGroup />
        </Box>
      </Container>
    </Box>
  )
}
