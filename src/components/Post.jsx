import React from 'react'
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Checkbox } from '@mui/material';
import {
  Avatar,  Card, CardActions, CardContent,
   CardHeader, CardMedia, IconButton, Typography 
 , } from '@mui/material';

const Post = () => {
  return (
    <Box flex={4} p={2}>
       <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="N">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Nezuko is Love"
        subheader="Feb 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://c4.wallpaperflare.com/wallpaper/629/861/132/kamado-nezuko-kimetsu-no-yaiba-anime-manga-anime-girls-hd-wallpaper-preview.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
         <ShareIcon/>
        </IconButton>
        
      </CardActions>
      
    </Card>
      </Box>
  )
}

export default Post;