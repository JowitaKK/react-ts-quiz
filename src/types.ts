import React from "react";

export interface Question  {
    category: string;
    correctAnswer: string;
    difficulty: string;
    incorrectAnswers: string[];
    question: string;
    types: string;
}

export interface AnswerObject  {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string
}

export interface QuestionCardProps {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>)=> void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number
}

export interface ButtonProps {
    correct: boolean;
    userClicked: boolean;
}


export interface QuestionCardCorrentProps extends QuestionCardProps {
  correct: boolean
}


//or use type as interface other type

// export type AnswerObject = {
//     question: string;
//     answer: string;
//     correct: boolean;
//     correctAnswer: string
// }

