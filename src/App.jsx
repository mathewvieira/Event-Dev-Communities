import Container from '@mui/material/Container'

import Navbar from '@/shared/components/Navbar'

import { FeaturedCardGroup } from '@/shared/components/FeaturedCard'
import EventCard from './components/Card'
import { Grid } from '@mui/material/Grid'

export default function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Grid
          container
          spacing={4}
          justifyContent='center'
        >
          <Grid item>
            <EventCard
              image='/reactconf.jpg'
              title='React Conf Nordeste 2025'
              orgName='Frontend Ceará'
              orgLogo='https://cdn-icons-png.flaticon.com/512/684/684908.png'
              description='A maior conferência de React da América Latina. Palestras, workshops e muito networking'
              date='16/05/2025'
              location='Centro de Eventos - Avenida Washington Soares'
              link='https://www.ingressos.com'
            />
          </Grid>
          <Grid item>
            <EventCard
              image='/pythonnordeste.jpg'
              title='Python Nordeste 2025'
              orgName='Python Nordeste'
              orgLogo='https://cdn-icons-png.flaticon.com/512/919/919852.png'
              description='Promover o aprendizado, o compartilhamento de conhecimento e o fortalecimento de laços entre os participantes.'
              date='20/06/2025 à 22/06/2025'
              location='Teresina - PI'
              link='https://www.even3.com.br/python-nordeste-2025/'
            />
          </Grid>
        </Grid>
        <FeaturedCardGroup />
      </Container>
    </>
  )
}
