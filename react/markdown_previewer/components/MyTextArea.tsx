import { useEffect, useState} from 'react'
import { Collapse, Ripple, initTE } from "tw-elements";
initTE({ Collapse, Ripple });

interface TextChangeProps {
    defaultValue: string;
    onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function MyTextArea({defaultValue, onInputChange} : TextChangeProps) {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        initTE({ Collapse, Ripple });
      }, []);

    return (
        <div className="mx-auto my-8 w-3/4 shadow-lg ">
            <div className="w-full leading-normal rounded-t-lg transition duration-250 ease-in-out bg-blue-950 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
                    onClick={handleToggleExpand}
                    data-te-ripple-init
                    data-te-ripple-color="light">
                <a className="font-sans flex justify-between items-center"
                    data-te-collapse-init
                    href="#collapseExample"
                    role="button"
                    aria-expanded={expanded}
                    aria-controls="collapseExample">
                    <h1 className="my-4 ml-4 text-4xl">Write your Markdown here...</h1>
                    {expanded ? (
                        <i className="fa fa-chevron-up py-2 px-6"></i>
                    ) : (
                        <i className="fa fa-chevron-down py-2 px-6"></i>
                    )}
                </a>
            </div>
            <div className="!visible hidden" id="collapseExample" data-te-collapse-item>
                <textarea
                    className=" w-full mb-3 h-64 p-2 text-white bg-gray-800 rounded-b-lg border border-transparent px-5 py-4 hover:border-gray-300  hover:dark:border-neutral-700"
                    rows={3}
                    defaultValue={defaultValue}
                    onChange={onInputChange}/>
                <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200">
                </label>
            </div>
        </div>
    )
}