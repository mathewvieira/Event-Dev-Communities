import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import styles from './Login.module.css'
import Button from '@mui/material/Button'

export default function Login() {
  return (
    <Box
      className={styles.container}
      component='form'
      noValidate
      autoComplete='on'
    >
      <div className={styles.titleContainer}>
        <Typography
          variant='h2'
          component='h2'
          sx={{ marginBottom: '1rem' }}
        >
          Bem vindo ao <span className={styles.gradientText}>EVENT DEV</span>
        </Typography>
        <Typography
          variant='body1'
          component='p'
          sx={{ color: '#64748B' }}
        >
          Entre na sua conta agora e comece a criar seus eventos.
        </Typography>
      </div>

      <div className={styles.formContainer}>
        <Typography
          component='label'
          htmlFor='email'
          variant='subtitle1'
          fontWeight='bold'
          sx={{ marginTop: '1rem' }}
        >
          Email
        </Typography>
        <TextField
          required
          id='email'
          placeholder='seu@email.com'
          name='email'
          autoComplete='email'
          type='email'
          sx={{ width: '100%' }}
        />
        <Typography
          component='label'
          htmlFor='password'
          variant='subtitle1'
          fontWeight='bold'
          sx={{ marginTop: '1rem' }}
        >
          Senha
        </Typography>
        <TextField
          id='outlined-password-input'
          placeholder='********'
          name='password'
          type='password'
          autoComplete='current-password'
        />
      </div>
      <Button
        className={styles.btn}
        type='submit'
        variant='contained'
      >
        Entrar
      </Button>
      <Typography
        variant='body1'
        component='p'
        sx={{ marginTop: '1.5rem', color: '#64748B', fontSize: '1.20rem' }}
      >
        Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
      </Typography>
    </Box>
  )
}
