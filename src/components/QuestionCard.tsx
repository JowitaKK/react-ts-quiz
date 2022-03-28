import React, { FC } from 'react'
import { QuestionCardProps } from '../types';
import { Button } from './Button';

//or joining 2 interfaces 
// interface QuestionCardCorrentProps  {
//   correct: boolean
// }

// const QuestionCard: FC<QuestionCardProps & QuestionCardCorrentProps> = ({question,

const QuestionCard: FC<QuestionCardProps> = ({question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions}) => {

  return (
    <div>QuestionCard
         <p className='number'>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <Button
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </Button>
      ))}
    </div>
    </div>
  )
}


export default QuestionCard;