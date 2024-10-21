import { Card, CardHeader, Typography, TextField, InputAdornment, Button, FormControl, FormLabel, FormHelperText } from '@mui/material'
import Container from '@mui/material/Container'
import { useState } from 'react'
import { AccountCircle, Key } from "@mui/icons-material";

// import Test from "../components/test"
export default function Login() {
    const [userName, setUserName] = useState('')


    return (<>
    <Container maxWidth="xs">
            <Card >
                <Typography sx={{ textAlign: 'center' }} component="h2" variant='h4'>Login</Typography>
                <FormControl>
                  <FormLabel>输入账号</FormLabel>
                  
                  <FormHelperText></FormHelperText>
                </FormControl>
                <TextField
                  id="userName"
                  label="输入账号"
                  value={userName}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <AccountCircle/>
                                </InputAdornment>
                          )
                      }
                  }}
                />
                <TextField
                  id="password"
                    label="输入密码"

                  value={userName}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Key/>
                                </InputAdornment>
                          )
                      }
                  }}
                />
                <Button variant="contained" color="primary">
                  登录
                </Button>
     </Card>
    </Container>
    </>)
}