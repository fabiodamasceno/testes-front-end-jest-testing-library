import { Grid, Typography } from '@mui/material'

export const TituloLista = ({ lista }) => (
  lista.length > 0 && (
    <Grid item lg={12}>
      <Typography variant='h4' component='h4'>
        Repositórios encontrados:
      </Typography>
    </Grid>
  )
)
