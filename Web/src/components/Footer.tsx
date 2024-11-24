import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="mt-auto bg-gray-100 py-6 px-4 sm:px-16">
            <div className="flex flex-col sm:flex-row">
                <div>
                    <a href="/" className="font-bold text-xl">Hvad skal jeg stemme?</a>
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-20 flex flex-col">
                    <a href="/om-testen" className="underline underline-offset-2 decoration-dotted">Om testen</a>
                    <a href="/partiernes-stemmer" className="underline underline-offset-2 decoration-dotted">Partiernes stemmer</a>
                    <a href="/resultat" className="underline underline-offset-2 decoration-dotted">Mit resultat</a>
                    <a href="/test" className="underline underline-offset-2 decoration-dotted">Tag testen</a>
                </div>
            </div>
           <p className="mt-4 sm:mt-6">Hjemmesiden er udviklet af Rasmus Thingholm - <a href="https://github.com/Thingholm" className="inline-block underline underline-offset-2 decoration-dotted"><FaGithub className="inline relative -top-0.5 mr-1.5"/>Thingholm</a></p>
        </footer>
    )
}