import Container from '@mui/material/Container'

import Footer from '@/shared/components/Footer'
import Navbar from '@/shared/components/Navbar'
import HeroSection from '@/shared/components/HeroSection'
import CallToAction from '@/shared/components/CallToAction'
import SectionHeader from '@/shared/components/SectionHeader'
import { FeaturedCardGroup } from '@/shared/components/FeaturedCard'

export default function Home() {
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

      <CallToAction
        title='Crie seu próprio evento'
        subtitles={['Tem uma ideia para um evento na sua comunidade dev?', 'Crie e compartilhe agora mesmo!']}
        buttonText='Começar agora'
      />

      <Footer />
    </>
  )
}
