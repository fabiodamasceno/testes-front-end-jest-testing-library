import {
  TextField,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Search } from '@mui/icons-material'
import { repositoriosAPI } from '../../../infraestrutura/apis/repositorios.api'
import { useState } from 'react'
import TituloLista from './TituloLista'
import Lista from './Lista'

export default () => {
  const [lista, setLista] = useState([])
  const [nomeUsuario, setNomeUsuario] = useState('')

  const buscarRepositorios = async () => {
    const resposta = await repositoriosAPI.obter(nomeUsuario)
    setLista(resposta.data)
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={3} justifyContent='center'>
          <img src='https://octodex.github.com/images/codercat.jpg' width='200' alt='Octocat 2010' />
        </Grid>
        <Grid item lg={9}>
          <Typography variant='h2' component='h2'>
            Buscador do Github
          </Typography>
          <Typography variant='body1' component='p'>
            Testando o comportamento da sua app com Jest e Testing Library
          </Typography>
        </Grid>
        <Grid item lg={10}>
          <TextField
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            id='usuario'
            label='Digite o nome do usuário'
            variant='standard'
            fullWidth
          />
        </Grid>
        <Grid item lg={2}>
          <LoadingButton id="buscar" color='primary' variant='contained' onClick={buscarRepositorios}>
            <Search /> Buscar
          </LoadingButton>
        </Grid>
        <Grid item lg={12} />
        <TituloLista lista={lista} />
        <Grid item lg={12}>
          <Lista lista={lista} />
        </Grid>
      </Grid>
    </Container>
  )
}



