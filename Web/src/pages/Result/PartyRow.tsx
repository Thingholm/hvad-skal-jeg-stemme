import { useState } from "react"
import { Result } from "../../data/getResults"
import { Question } from "../../data/queryHooks/useQuestions"
import { useVotesByParty } from "../../data/queryHooks/useVotes"
import Vote from "../Votes/Vote"
import { IoChevronDown } from "react-icons/io5"

interface Props {
    result: Result
}

export default function PartyRow({ result }: Props){
    const [isOpen, setIsOpen] = useState(false);

    const partyVotesQuery = useVotesByParty(result.party?.id)

    const convertedPartyVote = partyVotesQuery.isSuccess && partyVotesQuery.data?.map(v => ({ 
        ...v.bill,
        votes: [{ id: v.id, party: v.party, voteType: v.voteType }]
    }) as Question);

    return(
        <div className="w-full">
            <div 
                className="group w-full px-4 py-2 flex items-center justify-between rounded-lg duration-150 hover:cursor-pointer hover:bg-gray-200" 
                onClick={() => setIsOpen(state => state ? false : true)}
            >
                <div className="w-11/12">
                    <h4 
                        style={{ color: result.party?.colorHex}}
                        className="mb-1 font-medium"
                    >
                        {result.party?.letter} - {result.party?.name}
                    </h4>
                    <div 
                        style={{ 
                            width: result.agreementRate + "%", 
                            backgroundColor: result.party?.colorHex
                        }}
                        className="relative h-6 rounded-md"
                    >
                        <span 
                            style={{ color: result.party?.colorHex}}
                            className={"absolute left-full font-medium " + (result.agreementRate == 0 ? "" : "pl-2")}
                        >
                            {Math.round(result.agreementRate * 10) / 10}%
                        </span>
                    </div>
                </div>
                <IoChevronDown size={20} className={"inline duration-200 opacity-0 group-hover:opacity-100 " + (isOpen && "rotate-180")}/>
            </div>

            <div className={"px-4 " + (isOpen ? "block" : "hidden")}>
                {convertedPartyVote &&
                    convertedPartyVote.map(vote => {
                        return (
                            <Vote vote={vote}/>
                        )
                    })
                }
            </div>
        </div>
        
    )
}