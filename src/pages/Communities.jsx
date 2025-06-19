import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Searchbar from '@/shared/components/Searchbar'
import FeaturedCardGroup from '@/shared/components/FeaturedCard/FeaturedCardGroup'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import { useState } from 'react'
import React from 'react'
import CardEventHorizontal from '@/shared/components/CardEvent/CardEventHorizontal'
export default function Communities() {
  const [page, setPage] = useState(1)
  const groups = [
    ['comunidade 1', 'comunidade 2'],
    ['comunidade 3', 'comunidade 4'],
    ['comunidade 5', 'comunidade 6'],
    ['comunidade 7', 'comunidade 8'],
    ['comunidade 9']
  ]

  const groupsPerPage = 2
  const pageCount = Math.ceil(groups.length / groupsPerPage)

  const groupsToShow = groups.slice((page - 1) * groupsPerPage, page * groupsPerPage)

  const handleChangePage = (_communities, value) => {
    setPage(value)
  }
  return (
    <Container
      maxWidth='xl'
      sx={{ paddingTop: '4.5rem' }}>
      <Typography
        component='div'
        maxWidth='xl'>
        <Typography
          variant='h3'
          component='h1'
          gutterBottom
          sx={{ fontWeight: 'semibold' }}>
          Comunidades
        </Typography>

        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ marginBottom: '1rem' }}>
          Encontre comunidades de desenvolvedores para participar de eventos e discussões.
        </Typography>
      </Typography>
      <Searchbar
        showToggle={false}
        placeholderText={'Buscar comunidade...'}
        filterOptions={[
          { value: 'recent', label: 'Mais recentes' },
          { value: 'popular', label: 'Mais populares' },
          { value: 'alphabetical', label: 'Ordem alfabética' }
        ]}
      />
      {groupsToShow.map((groupCommunities, index) => (
        <FeaturedCardGroup
          key={index}
          communities={groupCommunities}
        />
      ))}

      {pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChangePage}
          />
        </Box>
      )}
    </Container>
  )
}
