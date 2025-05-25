import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function CallToAction(props) {
  const { title, subtitles, buttonText, link } = props

  return (
    <Container
      maxWidth={false}
      sx={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FC692D',
        padding: '75px 0',
        marginTop: '5rem',
        marginBottom: '3rem'
      }}
    >
      <Box>
        <Typography
          color='text.light'
          variant='h3'
          marginBottom='1rem'
        >
          {title}
        </Typography>

        <Typography
          color='text.light'
          variant='body1'
        >
          {subtitles.map((subtitle) => (
            <span key={`span_${subtitle}`}>
              {subtitle} <br key={`br_${subtitle}`} />
            </span>
          ))}
        </Typography>

        <Button
          href={link}
          color='secondary'
          variant='contained'
          sx={{ marginTop: '2.5em' }}
        >
          {buttonText}
        </Button>
      </Box>
    </Container>
  )
}
