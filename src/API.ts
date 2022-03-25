import { shuffleArray } from "./utils";
import { Question } from "./types";
import { Difficulty } from "./enum";

export type QuestionsState = Question & { answers : string[]};

export const fetchQuizQestions = async(amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await ( await fetch(endpoint)).json();
    return data.results.map((question: Question)=> ({
        ...question,
        answers: shuffleArray([...question.incorrectAnswers, question.correctAnswer])
    }))
};