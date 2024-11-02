import { Result } from "../../data/getResults";
import PartyRow from "./PartyRow";

export default function ResultPage(){
    const results: Result[] = JSON.parse(localStorage.getItem("results") ?? "null");

    if (results == null) {
        return(
            <div className="flex justify-center items-center relative my-4 mx-16">
                <h1>Resultat</h1>
                <p>Intet resultat</p>
            </div>
        )
    }

    return (
        <div className="flex-col justify-center items-center my-4 mx-16 py-8 px-16 shadow-xl bg-white  rounded-lg">
            <h1 className="font-bold text-xl mb-4">Resultat</h1>
            {results.sort((a, b) => b.points - a.points).map(result => {
                return (
                   <PartyRow result={result}/>
                )
            })}
        </div>
    )

}