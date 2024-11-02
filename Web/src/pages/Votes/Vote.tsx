import { Question } from "../../data/queryHooks/useQuestions"
import PartiesContainer from "./PartiesContainer";
import PartyLetter from "./PartyLetter";

interface Props {
    vote: Question
}

export default function Vote({ vote }: Props){
    return(
        <div className="mt-8 mb-12">
            <h4 className="text-lg font-bold mb-4">{vote.question}</h4>
            <div className="">
                <div>
                    <p className="font-medium">For</p>
                    <PartiesContainer vote={vote} voteType="for"/>
                </div>
                <div>
                    <p className="font-medium">Imod</p>
                    <PartiesContainer vote={vote} voteType="against"/>
                </div>
                <div>
                    <p className="font-medium">Hverken eller</p>
                    <PartiesContainer vote={vote} voteType="neither"/>
                </div>
            </div>
        </div>
    )
}