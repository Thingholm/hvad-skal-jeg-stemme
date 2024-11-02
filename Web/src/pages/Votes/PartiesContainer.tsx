import { Question } from "../../data/queryHooks/useQuestions";
import { QuestionAnswer } from "../Test/Test";
import PartyLetter from "./PartyLetter";

interface Props {
    vote: Question
    voteType: string
}

export default function PartiesContainer({ vote, voteType }: Props) {
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers") ?? "undefined");

    const userAnswer = userAnswers.find((answer: QuestionAnswer) => answer.billId == vote.id).answer ?? undefined;

    return (
        <div className="flex flex-wrap mt-2 mb-4">
            {vote.votes.map(partyVote => {
                if (partyVote.voteType != voteType || !partyVote.party) return;

                return (
                    <PartyLetter party={partyVote.party}/>
                )
            })}

            {userAnswer && userAnswer == voteType &&
                <div 
                        className="flex justify-center items-center w-10 h-10 rounded-full mx-1 my-1 font-medium bg-blue-500 text-white" 
                >
                    Dig
                </div>
            }
        </div>
    )
}