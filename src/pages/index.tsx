// 主页, 可以看文章, 登录.
import { Card, Container } from "@mui/material";
import Article from "../components/article";
import Comment from "../components/comment";

export default function Index() {
    return (
        <>
            <Container>

            <Card sx={{padding:2}}>
                <Article />
                <Comment />
            </Card>
            </Container>
        </>
    );
}
