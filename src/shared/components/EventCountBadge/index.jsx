import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

export default function EventCountChip({ count }) {
  return (
    <Chip
      label={
        <Typography
          variant='body2'
          sx={{ fontWeight: 500, fontSize: '0.75rem' }}>
          {`${count} eventos`}
        </Typography>
      }
      variant='outlined'
      sx={{
        height: 24,
        borderRadius: '12px',
        paddingX: '8px',
        backgroundColor: '#f5f5f5',
        borderColor: '#e0e0e0'
      }}
    />
  )
}
