import { useState } from "react";
import { useQuestions } from "../../data/queryHooks/useVotes"
import Vote from "./Vote";

export default function VotesPage(){
    const [showUserVotes, setShowUserVotes] = useState(true);

    const questionsQuery = useQuestions(true);

    console.log(questionsQuery.data)

    if (!questionsQuery.isSuccess) return (
        <div>Loader</div>
    )

    return(
        <div className="relative my-4 mx-16">
            <h1 className="font-bold text-2xl font mb-4 text-blue-900">Sådan har partierne stemt</h1>
            <label htmlFor="show-user-votes" className="absolute flex top-0 right-0 px-4 py-2 bg-gray-100 rounded-lg hover:cursor-pointer">
                <input 
                    type="checkbox" 
                    name="show-user-votes" 
                    id="show-user-votes" 
                    checked={showUserVotes}
                    onChange={e => setShowUserVotes(e.target.checked)}
                    className="mr-2 mt-0.5"
                /> 
                <span className="select-none">Vis mine svar</span>
            </label>
            {questionsQuery.data.map(vote => {
                return (
                    <Vote vote={vote} showUserVotes={showUserVotes}/>
                )
            })}
        </div>
    )
}