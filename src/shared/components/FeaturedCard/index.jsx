import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Link from '@mui/material/Link'

import profile from '@/shared/assets/static/images/profile.png'

export default function FeaturedCard() {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '49%', md: '23.5%' },
        flexDirection: 'column',
        textAlign: 'center'
      }}>
      <CardActionArea
        sx={{
          paddingTop: '3rem',
          paddingBottom: '2rem',
          paddingX: { xs: '10%', sm: '20%', md: '5%', lg: '7.5%' }
        }}>
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
            paddingBottom='20px'>
            Lizard
          </Typography>

          <Typography
            variant='body3'
            sx={{
              color: 'text.secondary'
            }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species.
          </Typography>
        </CardContent>

        <Link
          fontWeight={700}
          underline='hover'
          variant='caption'>
          Ver perfil
        </Link>
      </CardActionArea>
    </Card>
  )
}
