import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import styles from './HeroSection.module.css'
import image from '@/shared/assets/static/images/img.png'

export default function HeroSection() {
  return (
    <Box className={styles.heroSection}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant='h3'
              className={styles.title}
            >
              Conecte-se com as <br />
              melhores comunidades dev
            </Typography>

            <Typography
              variant='h6'
              className={styles.subtitle}
            >
              Descubra, participe e crie eventos incríveis com <br />
              comunidades de desenvolvedores do Nordeste.
            </Typography>

            <Box className={styles.buttonsContainer}>
              <Button
                variant='contained'
                color='secondary'
                size='large'
              >
                Explorar Eventos
              </Button>

              <Button
                variant='contained'
                color='inherit'
                size='large'
                className={styles.whiteButton}
              >
                Criar Eventos
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'end'
            }}
          >
            <Box
              src={image}
              alt='Evento'
              component='img'
              className={styles.image}
              sx={{
                margin: '0px !important',
                padding: '0px !important'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
