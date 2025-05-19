import MuiButton from '@mui/material/Button'

export default function Button(props) {
  const { variant, color, size, startIcon, endIcon, text, ...other } = props

  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      {...other}>
      {text}
    </MuiButton>
  )
}
