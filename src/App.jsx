import Container from '@mui/material/Container'

import Navbar from '@/shared/components/Navbar'
import HeroSection from '@/shared/components/HeroSection'
import CallToAction from '@/shared/components/CallToAction'
import SectionHeader from '@/shared/components/SectionHeader'

import { FeaturedCardGroup } from '@/shared/components/FeaturedCard'

export default function App() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <Container>
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
