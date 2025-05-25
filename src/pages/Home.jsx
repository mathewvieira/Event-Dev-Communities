import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import HeroSection from '@/shared/components/HeroSection'
import CallToAction from '@/shared/components/CallToAction'
import SectionHeader from '@/shared/components/SectionHeader'
import EventViewToggle from '@/shared/components/EventViewToggle'
import CardEventGroup from '@/shared/components/CardEvent/CardEventGroup'
import FeaturedCardGroup from '@/shared/components/FeaturedCard/FeaturedCardGroup'

export default function Home() {
  return (
    <Box sx={{ paddingTop: '4.5rem' }}>
      <HeroSection />
      <Container maxWidth='xl'>
        <SectionHeader
          title='Eventos em Destaque'
          subtitle='Descubra os próximos eventos das comunidades.'
          link='/eventos'
          linkText='Ver todos os eventos'
        />
        <EventViewToggle />
        <CardEventGroup />
        <SectionHeader
          title='Comunidades em Destaque'
          subtitle='Conheça as comunidades dev mais ativas da plataforma'
          link='/comunidades'
          linkText='Ver todas as Comunidades'
        />
        <FeaturedCardGroup />
      </Container>
      <CallToAction
        title='Crie seu próprio evento'
        subtitles={['Tem uma ideia para um evento na sua comunidade dev?', 'Crie e compartilhe agora mesmo!']}
        buttonText='Começar agora'
        link='/eventos'
      />
    </Box>
  )
}
