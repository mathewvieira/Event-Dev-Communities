import AboutCommunity from '@/shared/components/AboutCommunity'
import CardEvent from '@/shared/components/CardEvent'
import CommunityProfilePicture from '@/shared/components/CommunityProfilePicture'
import ToogleCommunityProfile from '@/shared/components/ToggleCommunityProfile'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Container from '@mui/material/Container'
import React, { useState } from 'react'

function CommunityProfile() {
  const [eventType, setEventType] = useState('eventos')
  const eventosDaComunidade = []

  return (
    <Container
      maxWidth='xl'
      sx={{ paddingTop: '4.5rem', marginTop: '2rem' }}>
      <CommunityProfilePicture />
      <ToogleCommunityProfile
        value={eventType}
        onChange={setEventType}
      />
      {eventType === 'eventos' && (
        <Typography
          variant='h5'
          sx={{ mt: 4 }}>
          Eventos da Comunidade
        </Typography>
      )}
      <Box mt={4}>
        {eventType === 'sobre' ? (
          <AboutCommunity />
        ) : eventosDaComunidade.length > 0 ? (
          eventosDaComunidade.map((evento) => (
            <CardEvent
              key={evento.id}
              evento={evento}
            />
          ))
        ) : (
          <Typography color='text.secondary'>Não existe nenhum evento agendado para essa comunidade.</Typography>
        )}
      </Box>
    </Container>
  )
}

export default CommunityProfile
