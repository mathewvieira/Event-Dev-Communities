import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import image from '@/shared/assets/static/images/img.png'

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #f4c542, #ff9a63)',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        minHeight: '10vh'
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant='h1'
              sx={{
                color: 'white',
                fontSize: '55px',
                fontWeight: 'bold',
                lineHeight: '3.5rem',
                marginBottom: '1rem',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Conecte-se <br />
              com as melhores <br />
              comunidades dev
            </Typography>

            <Typography
              variant='h5'
              sx={{
                color: 'white',
                fontWeight: '300',
                marginBottom: '2.35rem'
              }}
            >
              Descubra, participe e crie eventos incríveis com <br />
              comunidades de desenvolvedores do Nordeste.
            </Typography>

            <Box
              sx={{
                gap: '16px',
                display: 'flex',
                paddingBottom: { xs: '5rem', md: '1rem' },
                justifyContent: { xs: 'center', md: 'start' }
              }}
            >
              <Button
                variant='contained'
                color='primary'
                size='large'
              >
                Explorar Eventos
              </Button>

              <Button
                variant='contained'
                color='secondary'
                size='large'
                sx={{ fontWeight: '700' }}
              >
                Criar Eventos
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'end' }
            }}
          >
            <Box
              component='img'
              src={image}
              alt='Evento'
              sx={{
                borderRadius: '16px',
                width: { xs: '80%', md: '100%' }
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
