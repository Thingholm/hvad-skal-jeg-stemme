import { Question } from "../../data/queryHooks/useQuestions"
import PartiesContainer from "./PartiesContainer";
import PartyLetter from "./PartyLetter";

interface Props {
    vote: Question
}

export default function Vote({ vote }: Props){
    return(
        <div className="mt-8 mb-12">
            <p className="mb-1">Spørgsmål {vote.id}</p>
            <h4 className="text-lg font-bold mb-4 text-red-700">{vote.question}</h4>
            <div className="flex justify-between">
                <div className="bg-gray-50 w-1/3 px-4 pt-2 rounded-lg">
                    <p className="font-medium">Imod</p>
                    <PartiesContainer vote={vote} voteType="against"/>
                </div>
                <div className="bg-gray-50 w-1/3 mx-4  px-4 pt-2 rounded-lg">
                    <p className="font-medium">Hverken eller</p>
                    <PartiesContainer vote={vote} voteType="neither"/>
                </div>
                <div className="bg-gray-50 w-1/3 px-4 pt-2 rounded-lg">
                    <p className="font-medium">For</p>
                    <PartiesContainer vote={vote} voteType="for"/>
                </div>
            </div>
        </div>
    )
}