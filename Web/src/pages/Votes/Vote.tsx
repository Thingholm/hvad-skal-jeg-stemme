import { Question } from "../../data/queryHooks/useQuestions"
import PartiesContainer from "./PartiesContainer";

interface Props {
    vote: Question
    showUserVotes?: boolean
}

export default function Vote({ vote, showUserVotes }: Props){
    return(
        <div className="mt-2 sm:mt-6 md:mt-8 mb-6 sm:mb-10 md:mb-12">
            <p className="mb-1">Spørgsmål {vote.id}</p>
            <h4 className="sm:text-lg font-bold mb-4 text-red-700">{vote.question}</h4>
            <div className="md:flex justify-between">
                <div className="bg-gray-50 w-full min-h-24 mb-4 md:mb-0 md:w-1/3 px-4 pt-2 rounded-lg">
                    <p className="font-medium">Imod</p>
                    <PartiesContainer vote={vote} voteType="against" showUserVotes={showUserVotes}/>
                </div>
                <div className="bg-gray-50 w-full min-h-24 mb-4 md:mb-0 md:w-1/3 md:mx-4 px-4 pt-2 rounded-lg">
                    <p className="font-medium">Hverken eller</p>
                    <PartiesContainer vote={vote} voteType="neither" showUserVotes={showUserVotes}/>
                </div>
                <div className="bg-gray-50 w-full min-h-24 mb-4 md:mb-0 md:w-1/3 px-4 pt-2 rounded-lg">
                    <p className="font-medium">For</p>
                    <PartiesContainer vote={vote} voteType="for" showUserVotes={showUserVotes}/>
                </div>
            </div>
        </div>
    )
}