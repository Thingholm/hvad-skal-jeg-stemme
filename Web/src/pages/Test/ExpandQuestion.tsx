import { IoChevronDown } from "react-icons/io5"
import Button from "../../components/Button"
import { Question } from "../../data/queryHooks/useQuestions"
import { useState } from "react"

interface Props {
    question: Question
}

export default function ExpandQuestion({ question }: Props){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="mt-2" key={question.id}>
            <Button type="text" onClick={() => setIsOpen(state => state ? false : true)}>
                <span className="mr-2"> Udvid spørgsmål</span>
                <IoChevronDown className={"inline duration-200 " + (isOpen && "rotate-180")}/>
            </Button>
            <div className={"px-4 sm:px-12 lg:px-24 pt-4 pb-6 mt-2 mb-4 sm:mb-0 bg-gray-100 duration-200 " + (isOpen ? "block opacity-100" : "hidden opacity-0 ")}>
                <a href={question.link} className="underline decoration-dotted hover:decoration-solid">{question.billTag}</a>
                <p className="text-justify my-2">{question.description}</p>
                <div className="flex flex-col sm:flex-row justify-between mt-4">
                    <div className="w-full sm:w-5/12">
                        <h4 className="font-medium text-red-600">Imod</h4>
                        <p className="text-justify">{question.againstExplanation}</p>
                    </div>
                    <div className="w-full sm:w-5/12">
                        <h4 className="font-medium text-green-600">For</h4>
                        <p className="text-justify">{question.forExplanation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}