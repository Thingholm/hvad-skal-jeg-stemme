import { useQuery } from "@tanstack/react-query";
import { Question } from "./useQuestions";
import { Party } from "./useParties";
import { url } from "../api"


export interface Vote{
    id: number
    bill?: Question
    party?: Party
    voteType: string
}

export function useQuestions(includeVotes?: boolean){
    const query = useQuery({
        queryKey: ["questions"],
        queryFn: async (): Promise<Question[]> => {
            const response = await fetch(`${url}/Bill?includeVotes=${includeVotes == undefined ? false : includeVotes}`);
            return await response.json();
        }
    })

    return query;
};

export function useVotesByParty(id: number | undefined) {
    const query = useQuery({
        queryKey: ["votesByParty", id],
        queryFn: async (): Promise<Vote[]> => {
            const response = await fetch(`${url}/Vote/ByParty/${id}`);
            return await response.json();
        },
        enabled: !!id
    })

    return query;
}