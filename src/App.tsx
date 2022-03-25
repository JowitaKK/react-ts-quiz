import './App.css';
import { QuestionsState, fetchQuizQestions } from './API';
import { AnswerObject} from './types';
import { Difficulty } from './enum';
import { useState } from 'react';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;


const App =() => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers]= useState<AnswerObject[]>([]);
  const [score, setScore]= useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correctAnswer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correctAnswer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = ()=> {
     // Move on to the next question if not the last question
    const nextQ = number + 1;

    if (nextQ ===TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  }

  return (

      <div>
       <div>REACT QUIZ</div>
        {gameOver || userAnswers.length=== TOTAL_QUESTIONS ? (
          <button className= 'start' onClick={startQuiz} >Start</button>
        ): null
        }
        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard />
        )}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}     
      </div>
  
  );
}

export default App;
