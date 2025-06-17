import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import housejs_logo from '@/shared/assets/static/images/housejs_logo.jpg'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'

export default function CommunityProfilePicture() {
  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'>
      <Avatar
        variant='square'
        alt='House.js'
        src={housejs_logo}
        sx={{ width: 160, height: 160, borderRadius: 1 }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1 }}>
        <Typography variant='h1'>House js</Typography>
        <Typography
          variant='body2'
          color='text.secondary'>
          Comunidade Javascript em Fortaleza
        </Typography>
        <Stack
          direction='row'
          spacing={1}
          mt={1}>
          <Link
            href='https://github.com/housejs'
            target='_blank'
            rel='noopener'>
            <IconButton
              aria-label='GitHub'
              size='small'>
              <GitHubIcon fontSize='small' />
            </IconButton>
          </Link>
          <Link
            href='https://instagram.com/housejs'
            target='_blank'
            rel='noopener'>
            <IconButton
              aria-label='Instagram'
              size='small'>
              <InstagramIcon fontSize='small' />
            </IconButton>
          </Link>
          <Link
            href='https://housejs.org'
            target='_blank'
            rel='noopener'>
            <IconButton
              aria-label='Website'
              size='small'>
              <LanguageIcon fontSize='small' />
            </IconButton>
          </Link>
        </Stack>
      </Box>
    </Stack>
  )
}
