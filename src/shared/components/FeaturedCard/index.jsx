import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import Link from '@mui/material/Link'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'

import profile from '@/shared/assets/static/images/profile.png'

export function FeaturedCardGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: '1.5em',
        marginTop: '1.5rem'
      }}
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
      sx={{
        maxWidth: '265px',
        textAlign: 'center',
        display: 'inline-flex',
        flexDirection: 'column'
      }}
    >
      <Link
        href='#'
        underline='none'
      >
        <CardActionArea
          sx={{
            paddingTop: '3rem'
          }}
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
              component='div'
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
        </CardActionArea>
      </Link>

      <Link
        href='#'
        underline='none'
      >
        <CardActions
          sx={{
            padding: '1rem 0',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Button
            size='small'
            color='primary'
          >
            Ver perfil
          </Button>
        </CardActions>
      </Link>
    </Card>
  )
}
