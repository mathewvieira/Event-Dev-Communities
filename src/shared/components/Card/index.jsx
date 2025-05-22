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
    <Card sx={{ width: 340, borderRadius: 3, boxShadow: 3, height: 450 }}>
      <CardMedia
        component='img'
        height='180'
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography
          variant='h6'
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
