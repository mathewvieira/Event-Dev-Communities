import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Searchbar from '@/shared/components/Searchbar'
import EventTypeSelector from '@/shared/components/EventType'
import CardEventGroup from '@/shared/components/CardEvent/CardEventGroup'
import Box from '@mui/material/Box'
import React from 'react'

export default function Events() {
  return (
    <Box>
      <Container
        sx={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}
        maxWidth='xl'>
        <Typography
          component='div'
          maxWidth='xl'>
          <Typography
            variant='h3'
            component='h1'
            gutterBottom
            sx={{ fontWeight: 'semibold' }}>
            Eventos
          </Typography>

          <Typography
            variant='body1'
            color='text.secondary'
            paragraph>
            Encontre eventos de tecnologia em todo o Nordeste, presencial e online. Filtre por tipo e data.
          </Typography>
        </Typography>
        <Searchbar />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box>
            <EventTypeSelector />
          </Box>
          <Box>
            <CardEventGroup />
            <CardEventGroup />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
