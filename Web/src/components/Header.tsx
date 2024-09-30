import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header(){
    const navigate = useNavigate();
    return(
        <header className="bg-white shadow-md bord w-full sticky flex justify-between items-center py-3 px-16">
            <h1 className="text-2xl font-bold"><a href="/">Hvad skal jeg stemme?</a></h1>
            <nav className="w-1/3 flex justify-between items-center">
                <Link to={"/"}>Om testen</Link>
                <Link to={"/"}>Mit resultat</Link>
                <Button type="primary" onClick={() => navigate("/test")}>Tag testen her</Button>
            </nav>
        </header>
    )
}