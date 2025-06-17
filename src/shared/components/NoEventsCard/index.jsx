import React from 'react'
import styles from './NoEventsCard.module.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const NoEventsCard = ({ selectedDate }) => {
  const formattedDate = new Date(selectedDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <Card className={styles.noEventsCard}>
      <CardContent>
        <Typography
          variant='subtitle1'
          className={styles.dateText}
        >
          {formattedDate}
        </Typography>

        <Box className={styles.iconBox}>
          <CalendarMonthIcon className={styles.icon} />
        </Box>

        <Typography
          variant='h6'
          className={styles.mainMessage}
        >
          Nenhum evento nesta data
        </Typography>

        <Typography
          variant='body2'
          className={styles.subMessage}
        >
          Experimente selecionar outra data no calendário.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoEventsCard
