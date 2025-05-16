import './Button.module.css'
import MuiButton from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function Button(props) {
  const variant = props.variant
  const text = props.text
  const color = props.color

  return (
    <MuiButton
      variant={variant}
      color={color}>
      {text}
    </MuiButton>
  )
}
