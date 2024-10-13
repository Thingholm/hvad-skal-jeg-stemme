import { useQuery, useQueryClient } from "@tanstack/react-query";

export interface Question{
    id: number
    billTag: string
    title: string
    question: string
    description: string
    forExplanation: string
    againstExplanation: string
    link: string
    votes: Array<String>
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