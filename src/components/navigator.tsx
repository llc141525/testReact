// //导航页

import { AccountCircleRounded } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Icon,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import { ReactNode } from "react";
import { Dialog } from "@mui/material";
import { useState } from "react";
import Login from "../components/login";

export default function Navigator({ Children }: { Children: ReactNode }) {
    const [showLogin, setLogin] = useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        sx={{ flexGrow: 1 }}
                        component="div"
                        variant="h6"
                    >
                        博客
                    </Typography>
                    <IconButton color="inherit" onClick={() => setLogin(true)}>
                        <Icon>
                            <AccountCircleRounded />
                        </Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* 添加一个占位的 Toolbar，防止内容被导航栏遮挡 */}
            <Toolbar />
            {/* 内容区域 */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {Children}
                <Dialog open={showLogin} onClose={() => setLogin(false)}>
                    <Login
                        log2Nav={() => {
                            setLogin(false);
                        }}
                    ></Login>
                </Dialog>
            </Box>
        </Box>
    );
}
