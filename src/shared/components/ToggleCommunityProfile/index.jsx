import Box from '@mui/material/Box'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function ToogleCommunityProfile({ value, onChange }) {
  const options = ['eventos', 'sobre']
  return (
    <Box>
      <Box
        sx={{
          p: '6px',
          my: '1rem',
          borderRadius: '8px',
          display: 'inline-flex',
          backgroundColor: '#f4f6f8'
        }}>
        <ToggleButtonGroup
          value={value}
          exclusive
          onChange={(_, val) => val && onChange(val)}
          sx={{ gap: 1 }}>
          {options.map((type) => (
            <ToggleButton
              key={type}
              value={type}
              sx={{
                '&': {
                  py: 1,
                  px: 3,
                  fontSize: '12px',
                  border: 'none',
                  textWrap: 'nowrap',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: value === type ? 700 : 500,
                  color: value === type ? '#111827' : '#6b7280',
                  backgroundColor: value === type ? '#fff' : 'transparent'
                },
                '&:hover': {
                  backgroundColor: value === type ? '#fff' : '#e5e7eb'
                },
                '&.Mui-selected, &.Mui-selected:hover': {
                  backgroundColor: '#fff'
                }
              }}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}
