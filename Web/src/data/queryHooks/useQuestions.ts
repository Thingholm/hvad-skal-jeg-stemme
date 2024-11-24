import { useQuery } from "@tanstack/react-query";
import { Vote } from "./useVotes";
import { url } from "../api"


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