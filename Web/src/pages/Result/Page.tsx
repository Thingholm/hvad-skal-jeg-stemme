import { Result } from "../../data/getResults";

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
                    <div className="w-11/12 my-2">
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
                )
            })}
        </div>
    )

}