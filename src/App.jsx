import Container from '@mui/material/Container'

import Navbar from '@/shared/components/Navbar'

import { FeaturedCardGroup } from '@/shared/components/FeaturedCard'
import SearchBar from './shared/components/Searchbar'
import SearchBarGroup from './shared/components/Searchbar'

export default function App() {
  return (
    <Container>
      <Navbar />
      <FeaturedCardGroup />
      <SearchBarGroup />
    </Container>
  )
}
