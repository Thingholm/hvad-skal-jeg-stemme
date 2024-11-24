import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(state => state ? false : true);
    }

    const navigate = useNavigate();

    return(
        <header className="bg-white shadow-md bord w-full fixed flex justify-between items-center z-50 px-4 sm:px-16 lg:py-3">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-transparent bg-clip-text -z-10"><a href="/">Hvad skal jeg stemme?</a></h1>
            <nav className="hidden lg:flex justify-between items-center">
                <Link to={"/om-testen"} className="lg:pr-7">Om testen</Link>
                <Link to={"partiernes-stemmer"} className="lg:px-7">Partiernes stemmer</Link>
                <Link to={"/resultat"} className="lg:px-7">Mit resultat</Link>
                <Button type="primary" onClick={() => navigate("/test")} className="lg:ml-7">Tag testen her</Button>
            </nav>
            <div className="lg:hidden relative">
                <button className="p-2 sm:p-3" onClick={toggleOpen}><IoMenuOutline className="h-8 w-8 sm:h-10 sm:w-10"/></button>
                <div className={"absolute top-0 -right-4 sm:-right-16 w-screen h-screen " + (isOpen ? "block" : "hidden")}>
                    <div className="absolute bg-black bg-opacity-70 h-full w-full" onClick={toggleOpen}></div>
                    <nav className="absolute h-full right-0 bg-white pr-8 pl-16 sm:px-20 pt-4 z-10 flex flex-col items-end">
                        <button onClick={toggleOpen}><IoCloseOutline size={40} className="mb-2"/></button>
                        <Link to={"/om-testen"} onClick={toggleOpen} className="py-2">Om testen</Link>
                        <Link to={"partiernes-stemmer"} onClick={toggleOpen} className="py-2">Partiernes stemmer</Link>
                        <Link to={"/resultat"} onClick={toggleOpen} className="py-2 mb-2">Mit resultat</Link>
                        <Button type="primary" onClick={() => {navigate("/test"); toggleOpen();}}>Tag testen her</Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}