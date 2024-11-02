import { Party } from "../../data/queryHooks/useParties"

interface Props {
    party: Party
}

export default function PartyLetter({ party }: Props){
    const whiteLetter = ["A", "V", "Æ", "M", "B", "Å", "C"]

    return (
        <div 
            className="flex justify-center items-center w-10 h-10 rounded-full mx-1 my-1 font-medium" 
            style={{
                backgroundColor: party.colorHex,
                color: whiteLetter.includes(party.letter) ? "#fff" : "#000"
            }}
        >
            {party.letter}
        </div>
    )
}