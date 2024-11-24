import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Result } from "../../data/getResults";
import PartyRow from "./PartyRow";
import { IoRefreshOutline } from "react-icons/io5";

export default function ResultPage(){
    const navigate = useNavigate();

    const results: Result[] = JSON.parse(localStorage.getItem("results") ?? "null");
    if (results == null) {
        return(
            <div className="relative flex-col justify-center items-center my-4 mx-16 py-8 px-12 shadow-xl bg-white  rounded-lg">
                <h1 className="font-bold text-2xl mb-4 px-4 text-blue-900">Dit resultat</h1>
                <p className="mb-4 px-4">Der er intet resultat at vise. Tag testen for at se dit resultat.</p>
                <Button type="primary" className="mx-4" onClick={() => navigate("/test")}>Tag testen</Button>
            </div>
        )
    }

    return (
        <div className="relative flex-col justify-center items-center my-4 mx-16 py-8 px-12 shadow-xl bg-white  rounded-lg">
            <h1 className="font-bold text-2xl mb-4 px-4 text-blue-900">Dit resultat</h1>
            {results.sort((a, b) => b.points - a.points).map((result, index) => {
                return (
                   <PartyRow key={"resultRow" + index} result={result}/>
                )
            })}
            <Button type="secondary" className="absolute top-8 right-16 flex items-center" onClick={() => navigate("/test")}><><IoRefreshOutline className="mr-2"/>Tag testen igen</></Button>
        </div>
    )

}