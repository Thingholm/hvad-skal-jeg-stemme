import { PiSmiley, PiSmileyMeh, PiSmileySad } from "react-icons/pi"
import { Answer } from "./Test"

interface Props {
    id: string
    value: string
    label: string
    selected: Answer | undefined
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Radio({ id, value, label, selected, onChange }: Props){
    return(
        <div className="flex-col sm:mx-8 w-full sm:w-28 md:w-32 lg:w-40 sm:h-32">
            <div className="relative h-0 sm:h-auto">
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
                {value == "against" && <PiSmileySad size={selected == value ? 58 : 48} className={"sm:h-auto sm:w-auto duration-200 " + (selected == value ? "fill-blue-500 w-12 h-12" : "fill-gray-500 w-10 h-10")}/>}
                {value == "neither" && <PiSmileyMeh size={selected == value ? 58 : 48} className={"sm:h-auto sm:w-auto duration-200 " + (selected == value ? "fill-blue-500 w-12 h-12" : "fill-gray-500 w-10 h-10")}/>}
                {value == "for" && <PiSmiley size={selected == value ? 58 : 48} className={"sm:h-auto sm:w-auto duration-200 " + (selected == value ? "fill-blue-500 w-12 h-12" : "fill-gray-500 w-10 h-10")}/>}           
                <span className={"block " + (selected == value ? "text-blue-500 font-medium" : "text-gray-500")}>{label}</span>
            </label>
        </div>
        
    )
}