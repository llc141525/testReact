import { useState } from "react";
import Button from '@mui/material/Button'
import {  Grid2, Container, TextField, InputAdornment, Box, FormControl, FormLabel, FormHelperText } from "@mui/material";
import { Delete, AccountCircle } from "@mui/icons-material"

interface MyButtonProps{
    count: number;
    click: () => void;
}
function MyButton({count, click}:MyButtonProps) {
    return (
       
       <Button variant="outlined" color="primary" onClick={click} startIcon={<Delete/>} >
            {count} 
       </Button>
    );
}

function MyTextField() {
    return (
       <TextField
            InputProps={{
             
         }}
       />
    )
}

export default function Test() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <Container maxWidth="xs" >
        <Grid2  >
       <MyButton count={count} click={handleClick} ></MyButton>
       <MyButton count={count} click={handleClick} ></MyButton>
            </Grid2>
            <Grid2>
                <MyTextField></MyTextField>
            </Grid2>
        </Container>
    )
}
