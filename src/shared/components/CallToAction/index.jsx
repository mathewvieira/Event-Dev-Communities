import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function CallToAction(props) {
  const { title, subtitles, buttonText } = props

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
        margin: '5rem 0'
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
            <>
              {subtitle} <br key={subtitle} />
            </>
          ))}
        </Typography>

        <Button
          sx={{ marginTop: '2.5em' }}
          variant='contained'
          color='secondary'
        >
          {buttonText}
        </Button>
      </Box>
    </Container>
  )
}
