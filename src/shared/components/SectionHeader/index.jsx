import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default function SectionHeader(props) {
  const { title, subtitle, link, linkText } = props

  return (
    <Box
      my={'3rem'}
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          display: 'block',
          textAlign: 'center'
        }
      })}
    >
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down('sm')]: {
            // display: 'block'
          }
        })}
      >
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='subtitle1'>{subtitle}</Typography>
      </Box>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down('sm')]: {
            mt: '2rem'
          }
        })}
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
