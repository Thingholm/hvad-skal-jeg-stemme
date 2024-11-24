import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import About from "./About";

export default function AboutPage(){
    const navigate = useNavigate();
    return(
        <div className="text-justify px-4 sm:px-16 pt-4">
            <About/>
            <Button type="primary" onClick={() => navigate("/test")} className="mt-8">Tag testen</Button>
        </div>
    )
}