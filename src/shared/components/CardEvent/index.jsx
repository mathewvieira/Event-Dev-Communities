import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardActionArea from '@mui/material/CardActionArea'
import eventReact from '@/shared/assets/static/images/event-react.jpg'
import logoFrontendCeara from '@/shared/assets/static/images/frontend-ce-logo.jpg'
import Avatar from '@mui/material/Avatar'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import LinkIcon from '@mui/icons-material/Link'
import Link from '@mui/material/Link'

export default function CardEvent() {
  return (
    <Card sx={{ maxWidth: 450, borderRadius: 2 }}>
      <CardActionArea>
        <Box sx={{ position: 'relative', height: 300 }}>
          <CardMedia
            component='img'
            height='300'
            image={eventReact}
            alt='Evento React'
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.2)', // overlay escuro
              color: '#fff',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'left',
              textAlign: 'center',

              px: 2
            }}
          >
            <Typography
              variant='h5'
              component='div'
              color='common.white'
              sx={{ marginBottom: 2 }}
            >
              React Conf Nordeste 2025
            </Typography>
          </Box>
        </Box>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Avatar
              alt='Remy Sharp'
              src={logoFrontendCeara}
            />
            <Typography
              gutterBottom
              variant='h5'
              sx={{ margin: 0 }}
              component='div'
            >
              Frontend Ceará
            </Typography>
          </Box>
          <Typography
            variant='body2'
            sx={{ color: 'text.secondary', borderTop: '1px solid #e0e0e0', marginTop: 1, py: 2 }}
          >
            A maior conferência de React da América Latina. Palestras, workshops e muito networking.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarTodayIcon sx={{ color: '#64748B' }} />
              <Typography
                variant='body2'
                sx={{ color: '#64748B' }}
              >
                12 de Junho de 2025
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PlaceOutlinedIcon sx={{ color: '#64748B' }} />
              <Typography
                variant='body2'
                sx={{ color: '#64748B' }}
              >
                Centro de Eventos - Avenida Washington Soares
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LinkIcon sx={{ color: '#64748B' }} />
              <Link
                href='#'
                underline='hover'
                target='_blank'
                rel='noopener'
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                seu-link.com
              </Link>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
