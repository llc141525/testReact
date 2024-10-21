// 登录组件, 放在Dialog中.

import { AccountCircle, Key } from "@mui/icons-material";
import {
    Card,
    Typography,
    TextField,
    Button,
    Box,
    Container,
    InputAdornment,
} from "@mui/material";

export default function Login({ log2Nav }: { log2Nav: () => void }) {
    return (
        <>
            <Card
                sx={{
                    padding: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography>登陆界面</Typography>
                    </Box>
                    <Box sx={{ margin: 2 }}>
                        <TextField
                            label="输入用户名"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{ margin: 2 }}>
                        <TextField
                            label="输入密码"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Key />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Box>
                    <Box>
                        <Button onClick={log2Nav} color="primary" variant="contained">
                            <Typography>登录</Typography>
                        </Button>
                    </Box>{" "}
                </Container>
            </Card>
        </>
    );
}
