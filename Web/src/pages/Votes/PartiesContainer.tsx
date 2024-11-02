import { Question } from "../../data/queryHooks/useQuestions";
import PartyLetter from "./PartyLetter";

interface Props {
    vote: Question
    voteType: string
}

export default function PartiesContainer({ vote, voteType }: Props) {
    return (
        <div className="flex flex-wrap mt-2 mb-4">
            {vote.votes.map(partyVote => {
                if (partyVote.voteType != voteType || !partyVote.party) return;

                return (
                    <PartyLetter party={partyVote.party}/>
                )
            })}
        </div>
    )
}