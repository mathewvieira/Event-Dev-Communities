import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default function SectionHeader(props) {
  const { title, subtitle, link, linkText } = props

  return (
    <Box
      my={'3rem'}
      sx={{
        display: { sm: 'block', md: 'flex' },
        textAlign: { xs: 'center', sm: 'center', md: 'left' },
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='subtitle1'>{subtitle}</Typography>
      </Box>

      <Box
        sx={{
          mt: { xs: '2rem', sm: '2rem', md: '0' }
        }}
      >
        <Link
          href={link}
          variant='body2'
        >
          {linkText}
        </Link>
      </Box>
    </Box>
  )
}
