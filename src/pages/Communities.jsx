import Container from '@mui/material/Container'
import FeaturedCardGroup from '@/shared/components/FeaturedCard/FeaturedCardGroup'

export default function Communities() {
  return (
    <Container
      maxWidth='xl'
      sx={{ paddingTop: '4.5rem', paddingBottom: '2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Comunidades</h1>

      <FeaturedCardGroup />
    </Container>
  )
}
