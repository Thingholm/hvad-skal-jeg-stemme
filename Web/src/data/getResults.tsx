import { Answer, QuestionAnswer } from "../pages/Test/Test";
import { Party } from "./queryHooks/useParties";
import { Question } from "./queryHooks/useQuestions";

interface Result {
    party: Party | undefined
    points: number
    agreementRate: number
}

export default function getResults( answers: QuestionAnswer[], partiesAnswers: Question[]){
    let result: Result[] = partiesAnswers[0].votes.map(vote => ({party: vote.party, points: 0, agreementRate: 0}));

    partiesAnswers.forEach(question => {
        const userAnswer = answers.find(answer => answer.billId == question.id);
        if (userAnswer == null || userAnswer?.answer == "skip") return;
        console.log(question)

        question.votes.forEach(vote => {
            const party = result.find(p => p.party?.id == vote.party?.id);
            const points = compareAnswers(userAnswer.answer, vote.voteType as Answer);
            if (party) {
                console.log(party, points)
                party.points += points;
            }
        })
    })

    const answersLength = answers.filter(answer => answer.answer !== "skip").length;

    result = result.reduce((acc: Result[], obj: Result) => {
        return [...acc, {...obj, agreementRate: obj.points / answersLength * 100}]
    }, [])

    return result;
}

function compareAnswers(userAnswer: Answer, partyAnswer: Answer){
    if (userAnswer == partyAnswer) return 1;
    
    if (userAnswer == "neither" || partyAnswer == "neither") return 0.5;

    return 0;
};