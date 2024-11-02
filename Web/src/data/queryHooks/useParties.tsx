import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Vote } from "./useVotes"

export interface Party {
    id: number
    name: string
    letter: string
    colorHex: string
    votes: Vote[]
}

export function useParty(id: number | undefined, includeVotes: boolean){
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ["party", id, includeVotes],
        queryFn: async (): Promise<Array<Party>> => {
            const response = await fetch(`https://localhost:8081/api/Party/${id}?includeVotes=${includeVotes}`);
            return await response.json();
        },
        enabled: !!id
    })

    return query;
}