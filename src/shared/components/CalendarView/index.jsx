import React, { useEffect, useState, useCallback } from 'react'
import Stack from '@mui/material/Stack'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Box from '@mui/material/Box'
import DynamicCalendar from '@/shared/components/DynamicCalendar'
import SelectedDatePanel from '@/shared/components/SelectDatePanel'
import { getEventos } from '@/api/eventos'

dayjs.locale('pt-br')

// ...existing imports...

export default function CalendarView({ eventType = 'todos' }) {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [eventos, setEventos] = useState([])
  const [highlightedDays, setHighlightedDays] = useState([])

  useEffect(() => {
    async function fetchEventos() {
      const eventosData = await getEventos()
      setEventos(eventosData)
    }
    fetchEventos()
  }, [])

  // Atualiza os dias destacados ao mudar mês/ano ou filtro
  const handleMonthChange = useCallback(
    (newDate) => {
      const diasComEvento = eventos
        .filter(
          (ev) =>
            dayjs(ev.data_hora_inicial).month() === dayjs(newDate).month() &&
            dayjs(ev.data_hora_inicial).year() === dayjs(newDate).year() &&
            (eventType === 'todos' ||
              (eventType === 'online' && ev.modalidade === 'online') ||
              (eventType === 'presencial' && ev.modalidade === 'presencial') ||
              (eventType === 'híbrido' && ev.modalidade === 'híbrido'))
        )
        .map((ev) => dayjs(ev.data_hora_inicial).date())
      setHighlightedDays([...new Set(diasComEvento)])
    },
    [eventos, eventType]
  )

  useEffect(() => {
    handleMonthChange(selectedDate)
  }, [selectedDate, eventos, eventType, handleMonthChange])

  // Filtra eventos do dia selecionado e pelo tipo
  const eventosDoDia = eventos.filter(
    (ev) =>
      dayjs(ev.data_hora_inicial).isSame(selectedDate, 'day') &&
      (eventType === 'todos' ||
        (eventType === 'online' && ev.modalidade === 'online') ||
        (eventType === 'presencial' && ev.modalidade === 'presencial') ||
        (eventType === 'híbrido' && ev.modalidade === 'híbrido'))
  )

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
            highlightedDays={highlightedDays}
            onMonthChange={handleMonthChange}
          />
        </Box>
        <SelectedDatePanel
          selectedDate={selectedDate.toISOString()}
          eventos={eventosDoDia}
        />
      </Stack>
    </LocalizationProvider>
  )
}
