import '@/App.css'
import Navbar from '@/components/Navbar'
import Container from '@mui/material/Container'
import Button from './components/Button'

export default function App() {
  return (
    <Container>
      <Navbar />
      <Button
        variant='contained'
        color='success'
        text='testeeee'
      />
    </Container>
  )
}
