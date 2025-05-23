import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

import profile from '@/shared/assets/static/images/profile.png'

export function FeaturedCardGroup() {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: '1.5em',
        columnGap: '20px',
        marginTop: '1.5rem',
        [theme.breakpoints.down('lg')]: {
          columnGap: '10px'
        },
        [theme.breakpoints.down('sm')]: {
          columnGap: '0',
          justifyContent: 'stretch'
        }
      })}
    >
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
    </Box>
  )
}

export default function FeaturedCard() {
  return (
    <Card
      sx={(theme) => ({
        width: '265px',
        textAlign: 'center',
        display: 'inline-flex',
        flexDirection: 'column',
        [theme.breakpoints.down('lg')]: {
          width: '47.5%'
        },
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        }
      })}
    >
      <Link href='#'>
        <CardActionArea
          sx={(theme) => ({
            paddingTop: '3rem',
            paddingBottom: '2rem',
            [theme.breakpoints.down('lg')]: {
              paddingX: '7.5%'
            },
            [theme.breakpoints.down('sm')]: {
              paddingX: '7.5%'
            }
          })}
        >
          <CardMedia
            component='img'
            image={profile}
            alt='Ícone Comunidade'
            sx={{
              height: '100%',
              width: '100px',
              display: 'flex',
              justifySelf: 'center'
            }}
          />

          <CardContent>
            <Typography
              variant='h5'
              paddingBottom='20px'
            >
              Lizard
            </Typography>

            <Typography
              variant='body3'
              sx={{
                color: 'text.secondary'
              }}
            >
              Lizards are a widespread group of squamate reptiles, with over 6,000 species.
            </Typography>
          </CardContent>

          <Typography
            fontWeight={700}
            variant='caption'
          >
            Ver perfil
          </Typography>
        </CardActionArea>
      </Link>
    </Card>
  )
}
