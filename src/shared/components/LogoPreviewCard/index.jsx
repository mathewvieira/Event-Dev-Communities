import ImageIcon from '@mui/icons-material/Image'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export default function LogoPreviewCard() {
  return (
    <Card
      elevation={1}
      sx={{ maxWidth: 380, padding: 2, borderRadius: 2, maxHeight: 650 }}
    >
      <CardContent>
        <Typography
          variant='subtitle1'
          fontWeight='bold'
          gutterBottom
        >
          Prévia da Logo
        </Typography>

        <Box
          sx={{
            width: '100%',
            height: 280,
            backgroundColor: '#f1f5f9',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 2
          }}
        >
          <ImageIcon sx={{ fontSize: 40, color: '#94a3b8' }} />
        </Box>

        <Typography
          variant='subtitle1'
          fontWeight='bold'
          gutterBottom
        >
          Benefícios de cadastrar sua comunidade
        </Typography>

        <List dense>
          {[
            'Divulgue seus eventos para um público mais amplo',
            'Gerencie todos os seus eventos em um só lugar',
            'Aumente a visibilidade da sua comunidade',
            'Conecte-se com outros organizadores de eventos'
          ].map((text, index) => (
            <ListItem
              key={index}
              disableGutters
              sx={{ paddingLeft: 0 }}
            >
              <ListItemText
                primaryTypographyProps={{ fontSize: 14 }}
                primary={`• ${text}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
