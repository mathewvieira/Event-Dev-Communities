import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function TipCard() {
  return (
    <Card
      elevation={1}
      sx={{ maxWidth: 380, padding: 2, borderRadius: 2, maxHeight: 500 }}
    >
      <CardContent>
        <Typography
          textAlign='justify'
          variant='subtitle1'
          fontWeight='bold'
          fontSize='20px'
          pb='1rem'
          gutterBottom
        >
          Dicas para criar um bom evento
        </Typography>

        <Typography
          variant='subtitle1'
          fontSize='15px'
          fontWeight='bold'
          gutterBottom
        >
          Título claro e objetivo
        </Typography>

        <Typography
          variant='subtitle1'
          fontSize='12px'
          pb='1rem'
          color='#64748B'
        >
          Escolha um título que descreva claramente o que as pessoas aprenderão ou experimentarão.
        </Typography>

        <Typography
          variant='subtitle1'
          fontWeight='bold'
          fontSize='15px'
          pb='1rem'
        >
          Descrição detalhada
        </Typography>

        <Typography
          variant='subtitle1'
          fontSize='12px'
          pb='1rem'
          color='#64748B'
        >
          Explique o que vai acontecer, quem deve participar e por que é valioso.
        </Typography>

        <Typography
          variant='subtitle1'
          fontWeight='bold'
          fontSize='15px'
          pb='1rem'
        >
          Imagem atrativa
        </Typography>

        <Typography
          variant='subtitle1'
          fontSize='12px'
          pb='1rem'
          color='#64748B'
        >
          Use uma imagem relevante e de alta qualidade para chamar atenção.
        </Typography>

        <Typography
          variant='subtitle1'
          fontWeight='bold'
          fontSize='15px'
          pb='1rem'
        >
          Data e Horário
        </Typography>

        <Typography
          variant='subtitle1'
          fontSize='12px'
          pb='1rem'
          color='#64748B'
        >
          Planeje sua participação sem imprevistos! Verifique se há outros eventos na sua cidade na mesma data e horário para que os participantes
          possam aproveitar todas as oportunidades.
        </Typography>
      </CardContent>
    </Card>
  )
}
