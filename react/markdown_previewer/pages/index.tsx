import Layout from "../components/Layout"
import MyTextArea from "../components/MyTextArea"
import ResultBox from "../components/ResultBox"
import {useState} from 'react'
import { defaultStr } from "../types/types"
import { marked } from 'marked'

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
            <MyTextArea defaultValue={inputStr} onInputChange={handleInputChange} />
            <ResultBox markdownContent={outputStr}/>
        </Layout>
    )
}