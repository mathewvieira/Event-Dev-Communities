import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Instagram from '@mui/icons-material/Instagram'
import logo from '@/shared/assets/static/images/event-dev.png'
import logoGeracao from '@/shared/assets/static/images/geracao-tech.png'
import logoDigital from '@/shared/assets/static/images/digital-college.png'

export default function Footer() {
  return (
    <Box sx={{ padding: '2rem', width: '100%', marginTop: '2rem' }}>
      <Box sx={{ margin: '0 auto' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: { xs: '100%', md: '60%' },
              minWidth: '280px'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
              <Box sx={{ flex: 1, maxWidth: '400px' }}>
                <Box sx={{ mb: 2 }}>
                  <img
                    src={logo}
                    alt='Logo EventDev'
                  />
                </Box>
                <Typography
                  variant='body2'
                  color='text.secondary'
                >
                  Conectando comunidades de desenvolvedores do nordeste através de eventos incríveis. Encontre eventos, crie sua comunidade e faça
                  parte deste ecossistema.
                </Typography>
              </Box>
              <Box sx={{ minWidth: '120px' }}>
                <Typography
                  variant='subtitle2'
                  fontWeight='bold'
                  sx={{ mb: 1 }}
                >
                  Navegue
                </Typography>
                <Link
                  href='/eventos'
                  underline='hover'
                  color='text.secondary'
                  display='block'
                  sx={{ mb: 1 }}
                >
                  Eventos
                </Link>
                <Link
                  href='/comunidades'
                  underline='hover'
                  color='text.secondary'
                  display='block'
                  sx={{ mb: 1 }}
                >
                  Comunidades
                </Link>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              flexBasis: { xs: '100%', md: '35%' },
              minWidth: '200px'
            }}
          >
            <Typography
              variant='subtitle2'
              fontWeight='bold'
              sx={{ mb: 1 }}
            >
              Apoio:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 8 }}>
              <Link
                href='https://geracaotech.iel-ce.org.br/'
                target='_blank'
                rel='noopener noreferrer'
                sx={{ maxWidth: 130 }}
              >
                <img
                  src={logoGeracao}
                  alt='Geração Tech 2.0'
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
              <Link
                href='https://digitalcollege.com.br/'
                target='_blank'
                rel='noopener noreferrer'
                sx={{ maxWidth: 130 }}
              >
                <img
                  src={logoDigital}
                  alt='Digital College'
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ margin: '0 auto' }}>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid>
            <Typography
              variant='body2'
              color='text.secondary'
            >
              Built with 💙 by the{' '}
              <Link
                href='#'
                underline='hover'
                color='primary'
              >
                EventDev
              </Link>{' '}
              community.
            </Typography>
          </Grid>
          <Grid>
            <Box>
              <IconButton
                href='https://instagram.com'
                target='_blank'
                size='small'
              >
                <Instagram />
              </IconButton>
              <IconButton
                href='https://github.com'
                target='_blank'
                size='small'
              >
                <GitHub />
              </IconButton>
              <IconButton
                href='https://linkedin.com'
                target='_blank'
                size='small'
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
