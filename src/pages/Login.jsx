import Container from '@mui/material/Container'
import FormLogin from '@/shared/components/FormLogin'

export default function Login() {
  return (
    <Container
      maxWidth='xl'
      sx={{ paddingTop: '3.5rem' }}
    >
      <FormLogin />
    </Container>
  )
}
