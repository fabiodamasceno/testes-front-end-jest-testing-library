import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

export const Lista = ({ lista }) => (
  <List>
    {lista && lista.map((item) => (
      <ItemLista key={item.id} item={item} />
    ))}
  </List>
)

const ItemLista = ({ item }) => (
  <>
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar alt={item.owner.login} src={item.owner.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        primary={item.name}
        secondary={(
          <Typography
            component='span'
            variant='body2'
            color='text.primary'
          >
            {item.description}
          </Typography>
        )}
      />
    </ListItem>
    <Divider variant='inset' component='li' />
  </>
)
