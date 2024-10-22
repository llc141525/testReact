// 评论功能

import { Box, Button, Card, Grid2, TextField, Typography } from "@mui/material";

export default function Comment() {
    return (
        <>
            <Card sx={{ marginTop: 3 }}>
                <Typography variant="h4">评论区</Typography>
                <Grid2 container spacing={2} sx={{margin:3}}>
                    <Grid2 size={10}>
                        <TextField fullWidth></TextField>
                    </Grid2>
                    <Grid2 size={2} display="flex">
                        <Button variant="contained">评论</Button>
                    </Grid2>
                </Grid2>
            </Card>
        </>
    );
}
