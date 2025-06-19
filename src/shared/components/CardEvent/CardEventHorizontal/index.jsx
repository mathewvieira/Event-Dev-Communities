import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'

import LinkIcon from '@mui/icons-material/Link'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

import eventReact from '@/shared/assets/static/images/event-react.jpg'
import logoFrontendCeara from '@/shared/assets/static/images/frontend-ce-logo.jpg'

export default function CardEventHorizontal() {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        borderRadius: 2,
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: 900
      }}>
      <CardMedia
        component='img'
        image={eventReact}
        alt='Evento React'
        sx={{
          width: { xs: '100%', sm: 200 },
          height: { xs: 'auto', sm: 180 },
          objectFit: 'cover',
          borderBottomLeftRadius: { xs: 0, sm: 8 }
        }}
      />
      <CardActionArea
        sx={{
          flex: 1,
          height: { xs: 'auto', sm: 180 },
          border: '1px solid #E5E7EB',
          borderTopRightRadius: 2,
          borderBottomRightRadius: 2,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 2
        }}>
        <CardContent sx={{ paddingRight: 0, paddingLeft: 1, paddingTop: 0, paddingBottom: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, mt: 1 }}>
            <Avatar
              alt='Logo Front-End CE'
              src={logoFrontendCeara}
              sx={{ width: 32, height: 32 }}
            />
            <Typography
              variant='subtitle1'
              sx={{ fontWeight: 500 }}>
              Frontend Ceará
            </Typography>
          </Box>

          <Typography
            variant='body1'
            component='div'
            sx={{ mb: 1, fontWeight: 600 }}>
            React Conf Nordeste 2025
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarTodayIcon sx={{ color: '#64748B' }} />
              <Typography
                variant='body2'
                sx={{ color: '#64748B' }}>
                12 de Junho de 2025
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PlaceOutlinedIcon sx={{ color: '#64748B' }} />
              <Typography
                variant='body2'
                sx={{ color: '#64748B' }}>
                Centro de Eventos - Av. Washington Soares
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LinkIcon sx={{ color: '#64748B' }} />
              <Link
                href='#'
                underline='hover'
                target='_blank'
                rel='noopener'
                sx={{ color: 'primary.main', textDecoration: 'none' }}>
                seu-link.com
              </Link>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
