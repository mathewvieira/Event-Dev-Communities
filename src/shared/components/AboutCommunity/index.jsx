import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import LanguageIcon from '@mui/icons-material/Language'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function AboutCommunity() {
  return (
    <Box sx={{ borderRadius: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
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
      <Box
        spacing={1}
        sx={{ display: 'flex', flexDirection: 'column', gap: 1, flexWrap: 'wrap' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '24px 1fr',
            alignItems: 'center',
            columnGap: 2,
            wordBreak: 'break-word'
          }}>
          <LanguageIcon
            fontSize='small'
            color='action'
          />
          <Link
            href='https://housejs.dev/'
            target='_blank'
            rel='noopener'
            underline='hover'
            sx={{
              wordBreak: 'break-word',
              maxWidth: 'calc(100% - 24px)',
              whiteSpace: 'normal'
            }}>
            https://housejs.dev/
          </Link>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '24px 1fr',
            columnGap: 2,
            wordBreak: 'break-word'
          }}>
          <GitHubIcon
            fontSize='small'
            color='action'
          />
          <Link
            href='https://www.github.com/housejs'
            target='_blank'
            rel='noopener'
            underline='hover'
            sx={{
              wordBreak: 'break-word',
              maxWidth: 'calc(100% - 24px)',
              whiteSpace: 'normal'
            }}>
            https://www.github.com/housejs
          </Link>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '24px 1fr',
            alignItems: 'center',
            columnGap: 2,
            wordBreak: 'break-word'
          }}>
          <InstagramIcon
            fontSize='small'
            color='action'
          />
          <Link
            href='https://www.instagram.com/comunidadehousejs'
            target='_blank'
            rel='noopener'
            underline='hover'
            sx={{
              wordBreak: 'break-word',
              maxWidth: 'calc(100% - 24px)',
              whiteSpace: 'normal'
            }}>
            https://www.instagram.com/comunidadehousejs
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
