import notfound from '@/shared/assets/static/images/not-found.png'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <>
      <Box sx={{ display: 'flex', position: 'relative', width: '100%', height: '60vh', mt: '5rem' }}>
        <Container>
          <Typography
            variant='h1'
            position='relative'
            right={'23rem'}
            left={'5rem'}
            top={'3rem'}
            fontSize={'105px'}
            color='#4285F4'>
            404
          </Typography>

          <Typography
            variant='h4'
            fontFamily={'Inter'}
            position='relative'
            left={'5rem'}
            right={'23rem'}
            top={'4rem'}>
            OOOps! <br />
            Página não Encontrada
          </Typography>
          <Typography
            variant='h4'
            fontFamily={'Inter'}
            color='#B0B0B0'
            fontSize={'1rem'}
            position='relative'
            left={'5rem'}
            right={'23rem'}
            top={'5rem'}>
            Esta página não existe ou foi removida! <br />
            Sugerimos que você volte para a página inicial.
          </Typography>
        </Container>
        <Box sx={{ display: 'flex', position: 'relative', width: '100%', pl: '12rem', height: '65vh', mt: '0.5rem' }}>
          <img
            src={notfound}
            alt='Page Not Found'
          />
        </Box>
      </Box>
      <Button
        path='/'
        variant='contained'
        color='primary'
        sx={{ position: 'relative', left: '6.5rem', mt: '1rem' }}>
        Voltar para Home
      </Button>
      <Box sx={{ display: 'flex', justifyContent: 'end', mr: '12rem' }}>
        <Typography
          component={Link}
          sx={{ color: '#B0B0B0', textDecoration: 'none' }}
          to='https://www.figma.com/@thisuix571'>
          Design by: Mohammed Jawed
        </Typography>
      </Box>
    </>
  )
}
