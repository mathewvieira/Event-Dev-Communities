import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Searchbar from '@/shared/components/Searchbar'
import EventTypeSelector from '@/shared/components/EventType'
import CardEventGroup from '@/shared/components/CardEvent/CardEventGroup'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import CalendarView from '@/shared/components/CalendarView'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'

export default function Events() {
  const [view, setView] = useState('grid')

  const [page, setPage] = useState(1)

  // cada grupo é uma lista de eventos (aqui só strings para ilustrar)
  const groups = [['Evento 1', 'Evento 2'], ['Evento 3', 'Evento 4'], ['Evento 5', 'Evento 6'], ['Evento 7', 'Evento 8'], ['Evento 9']]

  const groupsPerPage = 2
  const pageCount = Math.ceil(groups.length / groupsPerPage)

  const groupsToShow = groups.slice((page - 1) * groupsPerPage, page * groupsPerPage)

  const handleChangePage = (_event, value) => {
    setPage(value)
  }

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
          placeholderText={'Buscar eventos...'}
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Stack
            direction={{ xs: 'column', md: 'column', lg: 'row' }}
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
                  {groupsToShow.map((groupEvents, index) => (
                    <CardEventGroup
                      key={index}
                      events={groupEvents}
                    />
                  ))}

                  {pageCount > 1 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                      <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handleChangePage}
                      />
                    </Box>
                  )}
                  {/* <CardEventGroup />
                  <CardEventGroup /> */}
                </>
              )}
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
