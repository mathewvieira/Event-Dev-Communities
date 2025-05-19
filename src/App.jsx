import Container from '@mui/material/Container'

import Navbar from '@/shared/components/Navbar'

import { FeaturedCardGroup } from '@/shared/components/FeaturedCard'

export default function App() {
  return (
    <Container>
      <Navbar />
      <FeaturedCardGroup />
    </Container>
  )
}
