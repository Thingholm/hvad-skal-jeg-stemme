import { useState } from "react";
import { useQuestions } from "../../data/queryHooks/useVotes"
import Vote from "./Vote";

export default function VotesPage(){
    const [showUserVotes, setShowUserVotes] = useState(true);

    const userAnswers = JSON.parse(localStorage.getItem("userAnswers") ?? "null");

    const questionsQuery = useQuestions(true);

    console.log(questionsQuery.data)

    if (!questionsQuery.isSuccess) return (
        <div className="relative my-4 mx-16">
            <h1 className="font-bold text-2xl font mb-4 text-blue-900">Sådan har partierne stemt</h1>
            <div className="animate-puls">
                {[...Array(5)].map(() => {
                    return(
                        <>
                            <div className="w-48 h-6 bg-gray-200 rounded-lg mb-4"></div>
                            <div className="w-1/2 h-10 bg-gray-200 rounded-lg mb-4"></div>
                            <div className="w-full h-32 bg-gray-200 rounded-lg mb-10"></div>
                        </>
                    )
                })}
            </div>
        </div>
    )

    return(
        <div className="relative my-4 mx-16">
            <h1 className="font-bold text-2xl font mb-4 text-blue-900">Sådan har partierne stemt</h1>
            {userAnswers &&
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
            }
            {questionsQuery.data.map(vote => {
                return (
                    <Vote vote={vote} showUserVotes={showUserVotes}/>
                )
            })}
        </div>
    )
}