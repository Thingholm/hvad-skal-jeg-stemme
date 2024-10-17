import { Vote } from "./useVotes"

export interface Party {
    id: number
    name: string
    letter: string
    colorHex: string
    votes: Vote[]
}