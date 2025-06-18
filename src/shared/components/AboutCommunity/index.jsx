import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import LanguageIcon from '@mui/icons-material/Language'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function AboutCommunity() {
  return (
    <Box sx={{ p: 4, borderRadius: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography
        variant='h5'
        gutterBottom
        fontWeight='bold'>
        Sobre a comunidade
      </Typography>
      <Typography
        variant='body1'
        color='text.secondary'>
        Somos uma comunidade dedicada ao aprendizado e compartilhamento de conhecimento. Buscamos promover eventos, workshops e espaços de discussão
        para que todos possam crescer profissionalmente e construir conexões valiosas na área tech.
      </Typography>

      <Typography
        variant='h5'
        gutterBottom
        fontWeight='bold'
        sx={{ mt: 4 }}>
        Canais oficiais
      </Typography>
      <Stack spacing={1}>
        <Stack
          direction='row'
          spacing={1}
          alignItems='center'>
          <LanguageIcon
            fontSize='small'
            color='action'
          />
          <Link
            href='https://housejs.dev/'
            target='_blank'
            rel='noopener'
            underline='hover'>
            https://housejs.dev/
          </Link>
        </Stack>
        <Stack
          direction='row'
          spacing={1}
          alignItems='center'>
          <GitHubIcon
            fontSize='small'
            color='action'
          />
          <Link
            href='https://www.github.com/housejs'
            target='_blank'
            rel='noopener'
            underline='hover'>
            https://www.github.com/housejs
          </Link>
        </Stack>
        <Stack
          direction='row'
          spacing={1}
          alignItems='center'>
          <InstagramIcon
            fontSize='small'
            color='action'
          />
          <Link
            href='https://www.instagram.com/comunidadehousejs'
            target='_blank'
            rel='noopener'
            underline='hover'>
            https://www.instagram.com/comunidadehousejs
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}
