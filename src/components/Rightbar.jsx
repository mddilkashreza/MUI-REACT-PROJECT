
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem,  Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


import React from 'react'


const Rightbar = () => {
  return (
    <Box flex={2} p={2}
    sx={{display:{xs:"none", sm:"block"}}}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src="https://scontent.fktm2-2.fna.fbcdn.net/v/t1.6435-9/91982471_118483736461352_9099069885102686208_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sC5S_GEy-eQAX933HsJ&_nc_ht=scontent.fktm2-2.fna&oh=00_AfB-GeupXWg_ZDhWBP09MsL_tX8ycM5mGFZH5CQspbWbZg&oe=648FB8BC" />
      <Avatar alt="Travis Howard" src="https://scontent.fktm2-2.fna.fbcdn.net/v/t1.6435-9/91453116_118483816461344_7215009260109824000_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=a2-PP4oAsBsAX85Y7sf&_nc_ht=scontent.fktm2-2.fna&oh=00_AfDbUgQ7WDswNpCRx91ZHin4WIQDAjsgpbP-O9GmAlH_9Q&oe=648FAC64" />
      <Avatar alt="Agnes Walker" src="https://scontent.fktm2-2.fna.fbcdn.net/v/t1.6435-9/91325237_118483909794668_4876840334161608704_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=czdLR0yIdAcAX-j5p0M&_nc_ht=scontent.fktm2-2.fna&oh=00_AfBASlXgKmAHczI6LxFrv4tb7sUF6n_9HYTeYwe8ZdUUDA&oe=648FA8CB" />
      <Avatar alt="Trevor Henderson" src="https://scontent.fktm2-1.fna.fbcdn.net/v/t1.6435-9/91316088_118483966461329_2713249983275991040_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DMxkfqL_GWMAX-tGvIi&_nc_ht=scontent.fktm2-1.fna&oh=00_AfDFTT62kC6vXhaRYcXj2AhvLzeNf4d_uLl89Z1wYIqbRg&oe=648F9B3E" />
    </AvatarGroup>
    <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
    <ImageList cols={3} rowHeight={120} gap={5}>
      <ImageListItem>
        <img
        src='https://scontent.fktm2-2.fna.fbcdn.net/v/t1.6435-9/91982471_118483736461352_9099069885102686208_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sC5S_GEy-eQAX933HsJ&_nc_ht=scontent.fktm2-2.fna&oh=00_AfB-GeupXWg_ZDhWBP09MsL_tX8ycM5mGFZH5CQspbWbZg&oe=648FB8BC'
        alt=''
        />
      </ImageListItem>
      <ImageListItem>
        <img
        src='https://scontent.fktm2-2.fna.fbcdn.net/v/t1.6435-9/91453116_118483816461344_7215009260109824000_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=a2-PP4oAsBsAX85Y7sf&_nc_ht=scontent.fktm2-2.fna&oh=00_AfDbUgQ7WDswNpCRx91ZHin4WIQDAjsgpbP-O9GmAlH_9Q&oe=648FAC64'
        alt=''
        />
      </ImageListItem>
      <ImageListItem>
        <img
        src='https://scontent.fktm2-1.fna.fbcdn.net/v/t1.6435-9/91316088_118483966461329_2713249983275991040_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DMxkfqL_GWMAX-tGvIi&_nc_ht=scontent.fktm2-1.fna&oh=00_AfDFTT62kC6vXhaRYcXj2AhvLzeNf4d_uLl89Z1wYIqbRg&oe=648F9B3E'
        alt=''
        />
      </ImageListItem>
    </ImageList>
    <Typography variant='h6' fontWeight={100} mt={2}>
      Latest Conversations
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://w0.peakpx.com/wallpaper/450/197/HD-wallpaper-demon-slayer-tanjirou-kamado.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://w0.peakpx.com/wallpaper/450/197/HD-wallpaper-demon-slayer-tanjirou-kamado.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://w0.peakpx.com/wallpaper/450/197/HD-wallpaper-demon-slayer-tanjirou-kamado.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
       
      </Box>
  )
}

export default Rightbar;