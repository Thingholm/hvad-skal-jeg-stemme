import { Result } from "../../data/getResults"
import { useParty } from "../../data/queryHooks/useParties"
import { useVotesByParty } from "../../data/queryHooks/useVotes"

interface Props {
    result: Result
}

export default function PartyRow({ result }: Props){
    const partyVotesQuery = useVotesByParty(result.party?.id)

    return(
        <div className="w-full my-2">
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

            <div>
                {partyVotesQuery.isSuccess &&
                    partyVotesQuery.data.map(vote => {
                        return (
                            <div>
                                <h4 className="font-medium mb-1">{vote.bill?.question}</h4>
                                <div className="flex text-center">
                                    <div className="w-1/3">
                                        <p>Imod</p>
                                        <div className="flex justify-center">
                                            {vote.voteType == "against" && 
                                                <div className="flex justify-center items-center w-10 h-10 rounded-full" style={{backgroundColor: vote.party?.colorHex}}>{vote.party?.letter}</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="w-1/3">
                                        <p>Hverken eller</p>
                                        <div className="flex justify-center">
                                            {vote.voteType == "neither" && 
                                                <div className="flex justify-center items-center w-10 h-10 rounded-full" style={{backgroundColor: vote.party?.colorHex}}>{vote.party?.letter}</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="w-1/3">
                                        <p>For</p>
                                        <div className="flex justify-center">
                                            {vote.voteType == "for" && 
                                                <div className="flex justify-center items-center w-10 h-10 rounded-full" style={{backgroundColor: vote.party?.colorHex}}>{vote.party?.letter}</div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}