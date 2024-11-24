import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout(){
    return(
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header/>
            <div className="mt-12 sm:mt-16 mb-8">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}