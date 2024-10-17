import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Question } from "./useQuestions";
import { Party } from "./useParties";

export interface Vote{
    id: number
    bill?: Question
    party?: Party
    voteType: string
}

export function useQuestions(){
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ["questions"],
        queryFn: async (): Promise<Array<Question>> => {
            const response = await fetch("https://localhost:8081/api/Bill?includeVotes=false");
            return await response.json();
        }
    })

    return query;
}