import Container from '@mui/material/Container'

import Navbar from '@/shared/components/Navbar'

import { FeaturedCardGroup } from '@/shared/components/FeaturedCard'
import SectionHeader from './shared/components/SectionHeader'
import CallToAction from './shared/components/CallToAction'

export default function App() {
  return (
    <>
      <Container>
        <Navbar />
        <SectionHeader
          title='Comunidades em Destaque'
          subtitle='Conheça as comunidades dev mais ativas da plataforma'
          link='#'
          linkText='Ver todas as Comunidades'
        />
        <FeaturedCardGroup />
      </Container>

      <CallToAction />
    </>
  )
}
