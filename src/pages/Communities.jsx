import CalendarView from '@/shared/components/CalendarView'
import Container from '@mui/material/Container'

export default function Communities() {
  return (
    <Container
      maxWidth='xl'
      sx={{ paddingTop: '4.5rem' }}>
      <h1>Comunidades</h1>
      <CalendarView />
    </Container>
  )
}
