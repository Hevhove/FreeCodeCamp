import { marked } from 'marked';
import { useState } from 'react'

interface ResultBoxProps {
    markdownContent: string;
}

export default function ResultBox({markdownContent}: ResultBoxProps) {
    return (
        <div>
            <hr className="my-12 mx-auto w-3/4 h-0.5 border-t-0 bg-gray-800 opacity-100 dark:opacity-50" />
            <div id="ResultBox" className="mx-auto mb-8 w-3/4 rounded-br-2xl border-gray-800 border border-transparent px-5 py-4 ">
                <div className="markdown-content" dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
            </div>
        </div>
    );
}