//文章的主体, 有分页功能
import { useEffect, useState } from "react";
import MarkdownRenderer from "../components/markdown";
export default function Article() {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch("../../README.md")
            .then((res) => res.text())
            .then((content) => setContent(content));
    });
    return (
        <>
            <MarkdownRenderer content={content} />
        </>
    );
}
