import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PlaceIcon from '@mui/icons-material/Place'
import LinkIcon from '@mui/icons-material/Link'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'

function EventCard(props) {
  const { image, title, orgName, orgLogo, description, date, location, link } = props
  return (
    <Card sx={{ width: 330, borderRadius: 3, boxShadow: 3, height: 510 }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component='img'
          height='250'
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography
            variant='h6'
            sx={{
              position: 'absolute',
              bottom: 8,
              left: 10,
              color: '#F8F9FC',
              padding: '30px 8px',
              borderRadius: 1,
              maxWidth: '90%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontFamily: 'Poppins, Arial, sans-serif'
            }}
            gutterBottom
          >
            {title}
          </Typography>
        </CardContent>
      </Box>
      <CardContent>
        <Typography
          variant='h6'
          sx={{ mt: -5, borderBottom: '1px solid #E8E8E8', left: 2 }}
          gutterBottom
        >
          {title}
        </Typography>
        <Box
          display='flex'
          alignItems='center'
          gap={1}
          mb={1}
        >
          <Avatar
            alt={orgName}
            src={orgLogo}
            sx={{ width: 28, height: 28 }}
          />
          <Typography
            variant='body2'
            color='text.secondary'
          >
            {orgName}
          </Typography>
        </Box>

        <Typography
          variant='body2'
          color='text.secondary'
          mb={2}
        >
          {description}
        </Typography>

        <Stack spacing={1}>
          <Box
            display='flex'
            alignItems='center'
            gap={1}
          >
            <CalendarTodayIcon fontSize='small' />
            <Typography variant='body2'>{date}</Typography>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            gap={1}
          >
            <PlaceIcon fontSize='small' />
            <Typography variant='body2'>{location}</Typography>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            gap={1}
          >
            <LinkIcon fontSize='small' />
            <Link
              href={link}
              target='_blank'
              rel='noopener'
              underline='hover'
            >
              {link}
            </Link>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default EventCard
