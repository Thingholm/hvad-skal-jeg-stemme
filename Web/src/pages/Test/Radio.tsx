// import { PiSmiley, PiSmileyMeh, PiSmileySad } from "react-icons/pi";

import { PiSmiley, PiSmileyMeh, PiSmileySad } from "react-icons/pi"
import { Answer } from "./Page"
import { useEffect } from "react"

interface Props {
    id: string
    value: number
    label: string
    selected: Answer | undefined
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Radio({ id, value, label, selected, onChange }: Props){
    return(
        <div className="flex-col mx-8 w-40 h-32">
            <div className="relative">
                <input 
                    type="radio" 
                    name="answer" 
                    id={id} 
                    value={value}
                    className="appearance-none"
                    checked={false}
                    onChange={onChange}
                />
            </div>
            <label htmlFor={id} className="flex flex-col justify-center items-center hover:bg-gray-100 py-4 rounded-lg">
                {value == 0 && <PiSmileySad size={selected == value ? 58 : 48} className={"duration-200 " + (selected == value ? "fill-blue-500" : "fill-gray-500")}/>}
                {value == 1 && <PiSmileyMeh size={selected == value ? 58 : 48} className={"duration-200 " + (selected == value ? "fill-blue-500" : "fill-gray-500")}/>}
                {value == 2 && <PiSmiley size={selected == value ? 58 : 48} className={"duration-200 " + (selected == value ? "fill-blue-500" : "fill-gray-500")}/>}           
                <span className={"block " + (selected == value ? "text-blue-500 font-medium" : "text-gray-500")}>{label}</span>
            </label>
        </div>
        
    )
}