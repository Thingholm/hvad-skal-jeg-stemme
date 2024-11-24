import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ChristiansborgPng from "../../assets/christiansborg-small.png"
import About from "../About/About";

export default function LandingPage(){
    const navigate = useNavigate();

    return(
        <div>
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="font-bold mt-8 text-2xl sm:mt-12 sm:text-3xl md:text-4xl lg:text-5xl lg:mt-20">    
                    Stem efter <br className="sm:hidden"/> <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">politikernes handlinger</span>, 
                    <br /> 
                    ikke efter deres løfter
                </h1>
                <p className="my-8 px-4 sm:px-0 sm:w-2/3 lg:w-1/2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem aliquid voluptas cupiditate adipisci laboriosam tempora nemo aliquam dolorem dicta sint.</p>
                <Button type="primary" onClick={() => navigate("/test")}>Tag testen her</Button>
            </div>

            <div className="relative mt-8 sm:mt-16">
                <div className="relative mx-4 sm:mx-16 sm:bg-gray-50 rounded-lg sm:shadow-xl text-center z-20" id="om-testen">
                    <div className="sm:px-12 py-6 md:px-24 md:py-8">
                        <About/>
                    </div>
                </div>
            </div>
        </div>
    )
}