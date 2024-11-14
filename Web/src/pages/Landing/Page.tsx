import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ChristiansborgPng from "../../assets/christiansborg.png"

export default function LandingPage(){
    const navigate = useNavigate();

    return(
        <div>
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold  mt-20">    
                    Stem efter <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">politikernes handlinger</span>, 
                    <br /> 
                    ikke efter deres løfter
                </h1>
                <p className="w-1/2 my-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem aliquid voluptas cupiditate adipisci laboriosam tempora nemo aliquam dolorem dicta sint.</p>
                <Button type="primary" onClick={() => navigate("/test")}>Tag testen her</Button>
            </div>

            <div className="relative">
                <img src={ChristiansborgPng} alt="Christiansborg slot" className="-z-10"/>
                <div className="absolute h-1/2 w-full bottom-12 left-0 bg-gradient-to-t from-white via-white via-50% to-transparent z-10"></div>
                <div className="absolute h-12 w-full bottom-0 left-0 bg-white"></div>
                <div className="absolute bottom-0 mt-16 mx-16 bg-white rounded-lg shadow-xl text-center z-20">
                    <div className="mx-24 my-8">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Om testen</h2>
                        <p className="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nostrum molestias aspernatur, eius odio magni qui? Sequi cumque molestiae tempora, soluta facilis aliquam est laboriosam magnam ea accusantium. Quo vel odio officiis quisquam a quae?</p>
                        <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error molestiae optio maxime fugit dolores rem sint voluptatum ab. Temporibus ipsam cupiditate voluptatum debitis corporis rerum officia ipsa quod optio minima, sint dolore vero laudantium amet, ipsum nostrum quis, dicta nulla tempore placeat. Laudantium nam doloremque similique amet asperiores possimus illo ea ex aliquid fugit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae sint voluptates mollitia reiciendis ex corporis nihil praesentium iure at, possimus quidem quos laudantium facere eveniet numquam voluptatem facilis exercitationem molestias eos culpa magnam explicabo? Iusto libero vero fugit quaerat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}