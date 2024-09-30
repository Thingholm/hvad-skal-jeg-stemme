interface Props {
    children: string | JSX.Element | JSX.Element[],
    type: "primary" | "secondary",
    onClick: () => void
}

export default function Button({ children, type, onClick }: Props){
    const btnType = {
        "primary": "bg-blue-500 hover:bg-blue-700 text-white",
        "secondary": "bg-gray-200 hover:bg-gray-300"
    }

    return(
        <button className={"duration-150 py-2 px-4 rounded-lg " + btnType[type]} onClick={onClick}>
            {children}
        </button>
    )
}