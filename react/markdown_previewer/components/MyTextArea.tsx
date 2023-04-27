import { useEffect, useState, ChangeEvent } from 'react'
import { defaultStr } from  "../types/types"

interface TextChangeProps {
    defaultValue: string;
    onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function MyTextArea({defaultValue, onInputChange} : TextChangeProps) {
    return (
        <div className="mx-auto my-8 w-3/4">
            <h1 className="text-white text-4xl my-4 font-bold">Write your Markdown here...</h1>
            <textarea
                className="block w-full mb-3 h-64 p-2 text-white bg-gray-800 rounded-lg border border-transparent px-5 py-4 hover:border-gray-300  hover:dark:border-neutral-700"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={defaultValue}
                onChange={onInputChange}/>
            <label
                htmlFor="exampleFormControlTextarea1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200">
            </label>
        </div>
    )
}