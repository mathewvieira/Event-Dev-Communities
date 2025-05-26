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
        sx={{ paddingTop: '4.5rem' }}
        maxWidth='xl'
      >
        <Typography maxWidth='xl'>
          <main className='px-6 py-10 max-w-7xl mx-auto'>
            <h1 className='text-3xl font-semibold mb-2'>Eventos</h1>
            <p className='text-gray-500 mb-6'>Encontre eventos de tecnologia em todo o Nordeste, presencial e online. Filtre por tipo e data.</p>
          </main>
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
