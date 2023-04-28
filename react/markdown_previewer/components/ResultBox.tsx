import { marked } from 'marked';
import { useState } from 'react'

interface ResultBoxProps {
    markdownContent: string;
}

export default function ResultBox({markdownContent}: ResultBoxProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div>
            <div className="mx-auto w-3/4 border rounded-tl-2xl border-transparent px-2 py-2 border-gray-800 bg-slate-900 hover:border-gray-300  hover:dark:border-neutral-700">
                <h1 className="text-white text-4xl font-bold">Output: </h1>
            </div>
            <div id="ResultBox" className="mx-auto mb-8 w-3/4 rounded-br-2xl border-gray-800 border border-transparent px-5 py-4 ">
                <div className="markdown-content" dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
            </div>
        </div>
    );
}