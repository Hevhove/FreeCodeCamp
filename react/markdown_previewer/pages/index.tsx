import Layout from "../components/Layout"
import ResultBox from "../components/ResultBox"
import { useState, useEffect } from 'react'
import { defaultStr } from "../types/types"
import { marked } from 'marked'
import dynamic from "next/dynamic";
const DynamicTextArea = dynamic(() => import("../components/MyTextArea"), { ssr: false });

export default function Home() {
    const [inputStr, setInputStr] = useState(defaultStr);
    const [outputStr, setOutputStr] = useState(marked(inputStr));

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newInputStr = event.target.value;
        setInputStr(newInputStr);
        setOutputStr(marked(newInputStr));
    }

    return (
        <Layout>
            <DynamicTextArea defaultValue={inputStr} onInputChange={handleInputChange} />
            <ResultBox markdownContent={outputStr}/>
        </Layout>
    )
}