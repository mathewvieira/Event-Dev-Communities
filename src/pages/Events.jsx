import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Searchbar from '@/shared/components/Searchbar'
import EventTypeSelector from '@/shared/components/EventType'
import CardEventGroup from '@/shared/components/CardEvent/CardEventGroup'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import CalendarView from '@/shared/components/CalendarView'
import Stack from '@mui/material/Stack'

export default function Events() {
  const [view, setView] = useState('calendar')
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
            sx={{ marginBottom: '1rem' }}>
            Encontre eventos de tecnologia em todo o Nordeste, presencial e online. Filtre por tipo e data.
          </Typography>
        </Typography>
        <Searchbar
          view={view}
          setView={setView}
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            sx={{ width: '100%' }}>
            <Box>
              <EventTypeSelector />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              {view === 'calendar' ? (
                <CalendarView />
              ) : (
                <>
                  <CardEventGroup />
                  <CardEventGroup />
                </>
              )}
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
