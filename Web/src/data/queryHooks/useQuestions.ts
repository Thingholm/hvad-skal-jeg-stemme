import { useQuery } from "@tanstack/react-query";
import { Vote } from "./useVotes";

const url = import.meta.env.VITE_API_URL;

export interface Question{
    id: number
    billTag: string
    title: string
    question: string
    description: string
    forExplanation: string
    againstExplanation: string
    link: string
    votes: Vote[]
}

export function useQuestions(){
    const query = useQuery({
        queryKey: ["questions"],
        queryFn: async (): Promise<Array<Question>> => {
            const response = await fetch(`${url}/Bill?includeVotes=true`);
            return await response.json();
        }
    })

    return query;
}