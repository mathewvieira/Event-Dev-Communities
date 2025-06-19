import React from 'react'
import Stack from '@mui/material/Stack'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Box from '@mui/material/Box'
import DynamicCalendar from '@/shared/components/DynamicCalendar'
import SelectedDatePanel from '@/shared/components/SelectDatePanel'

dayjs.locale('pt-br')

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = React.useState(dayjs())

  const highlightedDays = [7, 8, 16, 20]
  const day = selectedDate.date()
  const eventsCount = highlightedDays.includes(day) ? 1 : 0

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}>
        <Box
          sx={{
            width: { xs: '100%', md: 'auto' },
            minWidth: { md: 350 },
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}>
          <DynamicCalendar
            value={selectedDate}
            onChange={setSelectedDate}
          />
        </Box>
        <SelectedDatePanel
          selectedDate={selectedDate.toISOString()}
          eventsCount={eventsCount}
        />
      </Stack>
    </LocalizationProvider>
  )
}
