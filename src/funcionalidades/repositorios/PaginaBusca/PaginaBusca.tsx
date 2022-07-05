
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'

export default () => (
  <>
    <Container>
      <Grid container spacing={2}>
        <Grid justifyContent='center' container lg={3} >
          <img src="https://octodex.github.com/images/codercat.jpg" width="200" alt="octocat" />
        </Grid>
        <Grid item lg={9}>
          <Typography variant="h2" component="h2">
            Repositórios do Github
          </Typography>
          <Typography variant="body1" component="p">
            Testando o comportamento da sua app com Jest e Testing Library
          </Typography>
        </Grid>

        <Grid item lg={10}>
          <TextField id="standard-basic" label="Localize os repositórios dos usuários do github" variant="standard" fullWidth={true} />
        </Grid>
        <Grid item lg={2}>
          <Button color='primary' variant="contained"><SearchIcon /></Button>
        </Grid>
        <Grid item lg={12} />
        <Grid item lg={12} style={{ backgroundColor: 'white', }}>
          <Typography variant="h4" component="h4">
            Repositórios encontrados:
          </Typography>
        </Grid>
        <Grid item lg={12} style={{ backgroundColor: 'white' }}>
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
                    color="text.primary"
                  >
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
