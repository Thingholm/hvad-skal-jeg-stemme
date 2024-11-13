import { useQuestions } from "../../data/queryHooks/useVotes"
import Vote from "./Vote";

export default function VotesPage(){
    const questionsQuery = useQuestions(true);

    console.log(questionsQuery.data)

    if (!questionsQuery.isSuccess) return (
        <div>Loader</div>
    )

    return(
        <div className="my-4 mx-16">
            <h1 className="font-bold text-2xl font mb-4 text-blue-900">Sådan har partierne stemt</h1>
            {questionsQuery.data.map(vote => {
                return (
                    <Vote vote={vote}/>
                )
            })}
        </div>
    )
}