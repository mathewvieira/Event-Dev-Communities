import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SearchBar from '@/shared/components/SearchBar'
import EventTypeSelector from '@/shared/components/EventType'

export default function Events() {
  return (
    <Container sx={{ paddingTop: '4.5rem' }}>
      <Typography maxWidth='xl'>
        <main className='px-6 py-10 max-w-7xl mx-auto'>
          <h1 className='text-3xl font-semibold mb-2'>Eventos</h1>
          <p className='text-gray-500 mb-6'>Encontre eventos de tecnologia em todo o Nordeste, presencial e online. Filtre por tipo e data.</p>
        </main>
      </Typography>

      <SearchBar />
      <EventTypeSelector />
    </Container>
  )
}
