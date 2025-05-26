import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default function SectionHeader(props) {
  const { title, subtitle, link, linkText } = props

  return (
    <Box
      sx={{
        mt: '3rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: { sm: 'block', md: 'flex' },
        textAlign: { xs: 'center', sm: 'center', md: 'left' }
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
          underline='hover'
        >
          {linkText}
        </Link>
      </Box>
    </Box>
  )
}
