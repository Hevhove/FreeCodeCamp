import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { HTMLAttributes } from 'react';
import { marked } from 'marked';

interface ResultBoxProps {
    markdownContent: string;
}

export default function ResultBox({markdownContent}: ResultBoxProps) {
    console.log("LOL");
    console.log(marked(markdownContent));
    return (
        <div id="ResultBox" className="mx-auto my-8 w-3/4 prose-lg">
            <div className="markdown-content" dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
        </div>
    );
}