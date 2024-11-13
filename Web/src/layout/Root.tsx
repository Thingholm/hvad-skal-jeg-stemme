import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout(){
    return(
        <div className="min-h-screen overflow-x-hidden">
            <Header/>
            <div className="h-16"></div>
            <Outlet/>
        </div>
    )
}