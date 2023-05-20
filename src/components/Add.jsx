
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack,} from "@mui/icons-material";
import ImageIcon from '@mui/icons-material/Image';



const StyleModal =styled(Modal)({
    display:"flex",
    alignItems:'center',
    justifyContent:"center"
});

const UserBox =styled(Box)({
    display:"flex",
    alignItems:'center',
    gap:"10px",
    marginBottom:"20px"
});


const Add = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
        <Tooltip onClick={(e)=>setOpen(true)}
        title="Delete" sx={{position:"fixed", bottom:20, }}>
            <Fab color='primary' aria-label='add'>
                <AddIcon/>
            </Fab>

        </Tooltip>
        <StyleModal
  open={open}
  onClick={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography variant='h6' color="gray" textAlign="center">
        
    Create Post
    </Typography>
    <UserBox>
        <Avatar
        src='https://e0.pxfuel.com/wallpapers/46/892/desktop-wallpaper-nezuko-cute-anime-demon.jpg'
        sx={{width:30, height:30}}
        />
            <Typography fontWeight={500} variant='span'>NeZuko</Typography>
        
    </UserBox>
    <TextField
        sx={{width:"100%"}}
          id="standard-multiline-static"
          
          multiline
          rows={2}
          placeholder='Whats on your Fucking Mind'
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary'/>
            <ImageIcon color='secondary'/>
            <VideoCameraBack color='success'/>
            <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup
        fullWidth
        variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><DateRange/></Button>
  
</ButtonGroup>
  </Box>
</StyleModal>
        </>
    )
}

export default Add;