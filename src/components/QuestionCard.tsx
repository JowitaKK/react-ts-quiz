import React, { FC } from 'react'
import { QuestionCardCorrentProps } from '../types';


//or joining 2 interfaces 
// interface QuestionCardCorrentProps  {
//   correct: boolean
// }

// const QuestionCard: FC<QuestionCardProps & QuestionCardCorrentProps> = ({question,

const QuestionCard: FC<QuestionCardCorrentProps> = ({question,
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
        <button
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </button>
      ))}
    </div>
    </div>
  )
}


export default QuestionCard;