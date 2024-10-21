import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import { alertTitleClasses, InputAdornment, TextField, Grid2, Typography } from '@mui/material'
import { useState } from 'react'
import {AccountBox, Add, Delete, Settings} from "@mui/icons-material"




export default function DialogTest() {
  
  const [open, setOpen] = useState(false)
  function showDialog() {
    setOpen(true)
  }
  function cancel() {
    setOpen(false)
  }

    return (
      <Grid2 container justifyContent='center' >
        <Grid2 >
        <Button variant="contained" color="primary" onClick={showDialog}>
          按我
        </Button>
        <Dialog open={open}  >
          <DialogTitle >
            <Typography variant="h2" color="initial">Login</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
           <TextField
                label="input"
                sx={{margin:'20px'}}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                         <AccountBox />
                      </InputAdornment>
                  )
                }
              }}
           />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary" startIcon={<Settings />} >
               登录
            </Button>
            <Button onClick={cancel} color="error" variant='text' endIcon={< Delete />}>
              关闭
            </Button>
          </DialogActions>
        </Dialog></Grid2>
    </Grid2>
        
    )
}