//文章的主体, 有分页功能
import { useEffect, useState } from "react";
import { Card, Container } from "@mui/material";
import MarkdownRenderer from "../components/markdown";
import {MuiMarkdown} from 'mui-markdown'
export default function Article() {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch("../../README.md")
            .then((res) => res.text())
            .then((content) => setContent(content));
    });
    return (
        <>
            <Container>
                <Card sx={{ padding: 2, backgroundColor: "cornsilk" }}>
                    <MarkdownRenderer content={content} />
                </Card>
            </Container>
        </>
    );
}
