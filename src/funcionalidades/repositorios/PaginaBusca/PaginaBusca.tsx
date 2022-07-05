import {
  TextField,
  Container,
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Search } from '@mui/icons-material'

export default () => (
  <>
    <Container>
      <Grid container spacing={2}>
        <Grid justifyContent='center' container lg={3} >
          <img src="https://octodex.github.com/images/codercat.jpg" width="200" alt="octocat" />
        </Grid>
        <Grid item lg={9}>
          <Typography variant="h2" component="h2">
            Buscador do Github
          </Typography>
          <Typography variant="body1" component="p">
            Testando o comportamento da sua app com Jest e Testing Library
          </Typography>
        </Grid>
        <Grid item lg={10}>
          <TextField id="standard-basic" label="Digite o nome do usuário" variant="standard" fullWidth={true} />
        </Grid>
        <Grid item lg={2}>
          <LoadingButton color='primary' variant="contained"><Search /></LoadingButton  >
        </Grid>
        <Grid item lg={12} />
        <Grid item lg={12}>
          <Typography variant="h4" component="h4">
            Repositórios encontrados:
          </Typography>
        </Grid>
        <Grid item lg={12}>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Fábio Damasceno" src="https://avatars.githubusercontent.com/u/1590195?v=4" />
              </ListItemAvatar>
              <ListItemText
                primary="workshop-js-experience-2017"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary">
                    Este é a demonstração utilizada no Workshop Testando o comportamento da sua aplicação frontend com Mocha + Chai
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </Grid>
      </Grid>
    </Container>
  </>
)
