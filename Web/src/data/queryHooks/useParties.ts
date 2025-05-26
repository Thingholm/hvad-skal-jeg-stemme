import { useQuery } from "@tanstack/react-query"
import { Vote } from "./useVotes"

const url = import.meta.env.VITE_API_URL;

export interface Party {
    id: number
    name: string
    letter: string
    colorHex: string
    votes: Vote[]
}

export function useParty(id: number | undefined, includeVotes: boolean){
    const query = useQuery({
        queryKey: ["party", id, includeVotes],
        queryFn: async (): Promise<Array<Party>> => {
            const response = await fetch(`${url}/Party/${id}?includeVotes=${includeVotes}`);
            return await response.json();
        },
        enabled: !!id
    })

    return query;
}