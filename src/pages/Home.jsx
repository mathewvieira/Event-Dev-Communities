import Container from '@mui/material/Container'
import Footer from '@/shared/components/Footer'
import Navbar from '@/shared/components/Navbar'
import HeroSection from '@/shared/components/HeroSection'
import CallToAction from '@/shared/components/CallToAction'
import SectionHeader from '@/shared/components/SectionHeader'
import { FeaturedCardGroup } from '@/shared/components/FeaturedCard'
import { CardEventGroup } from '@/shared/components/CardEvent/CardEventGroup'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container maxWidth='xl'>
        <SectionHeader
          title='Eventos em Destaque'
          subtitle='Descubra os próximos eventos das comunidades.'
          link='#'
          linkText='Ver todos os eventos'
        />

        <SectionHeader
          title='Comunidades em Destaque'
          subtitle='Conheça as comunidades dev mais ativas da plataforma'
          link='#'
          linkText='Ver todas as Comunidades'
        />
        <FeaturedCardGroup />
        <SectionHeader
          title='Eventos em Destaque'
          subtitle='Descubra os próximos eventos das comunidades.'
          link='#'
          linkText='Ver todos os Eventos'
        />
        <CardEventGroup />
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
