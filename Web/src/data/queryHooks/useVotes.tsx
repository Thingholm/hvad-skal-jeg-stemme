import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Question } from "./useQuestions";
import { Party } from "./useParties";

export interface Vote{
    id: number
    bill?: Question
    party?: Party
    voteType: string
}

export function useQuestions(includeVotes?: boolean){
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ["questions"],
        queryFn: async (): Promise<Question[]> => {
            const response = await fetch(`https://localhost:8081/api/Bill?includeVotes=${includeVotes == undefined ? false : includeVotes}`);
            return await response.json();
        }
    })

    return query;
};

export function useVotesByParty(id: number | undefined) {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ["votesByParty", id],
        queryFn: async (): Promise<Vote[]> => {
            const response = await fetch(`https://localhost:8081/api/Vote/ByParty/${id}`);
            return await response.json();
        },
        enabled: !!id
    })

    return query;
}