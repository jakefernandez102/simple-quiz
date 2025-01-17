import React, { useState} from 'react'
import Question from '../components/atoms/Question';
import {reactQuestion} from '../data/questions';
import QuizOptions from '../components/molecules/QuizOptions';

import Button from '../components/atoms/Button';
import {PageProps, ReactQuestions} from '../types/page.type';
import TopInformation from '../components/molecules/TopInformation';

const Quiz = ({onNextClick,buttonText}:PageProps) => {

  const [currentPlayer] = useState({
    name:localStorage.getItem('name') || '',
    score:0
  })
  const [currentQuestion, setCurrentQuestion] = useState<ReactQuestions>(reactQuestion[0])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptions, setCurrentOptions] = useState(reactQuestion[0].options)
  const [isTimeUp, setIsTimeUp] = useState(false)
  const [answerSelected, setAnswerSelected] = useState<number>(-1)
  const [answers, setAnswers] = useState({
    correctAnswers: 0,
    wrongAnswers: 0
  })
  const [players] = useState(JSON.parse(localStorage.getItem('players') || '[]'))

  const handleOnComplete = () => {
    alert('Time is up!');
    setIsTimeUp(true)
  }

const handleNextQuestion = () => {
  setAnswerSelected(-1); // Reset selected answer

  if (currentQuestionIndex < reactQuestion.length - 1) {
    const nextQuestionIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionIndex);
    setCurrentQuestion(reactQuestion[nextQuestionIndex]);
    setCurrentOptions(reactQuestion[nextQuestionIndex].options);
  } else {
    console.log("No more questions");
    updatePlayers();
    if (onNextClick) onNextClick();
  }
};

  const updatePlayers = () => {
    console.log(players)
    const playerIndex = players.findIndex((player:any) => player.name.toLowerCase() === currentPlayer.name.toLocaleLowerCase())
    console.log({playerIndex})
    players[playerIndex].score = answers.correctAnswers
    
    const sortedPlayersByScore = players.sort((a:any,b:any) => b.score - a.score)
    localStorage.setItem('players',JSON.stringify(sortedPlayersByScore))
  }

const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const selectedOption = parseInt(e.target.value);
  setAnswerSelected(selectedOption);

  if (currentQuestion.correctAnswer === selectedOption) {
    console.log("Correct Answer");
    setAnswers((prev) => ({
      ...prev,
      correctAnswers: prev.correctAnswers + 1,
    }));
  } else {
    console.log("Wrong Answer");
    setAnswers((prev) => ({
      ...prev,
      wrongAnswers: prev.wrongAnswers + 1,
    }));
  }
};

  return (
    <div className='quiz-container'>

      <div className="quiz-main">
        <TopInformation text={`${(reactQuestion.findIndex(q => q === currentQuestion)+1)}/${reactQuestion.length}`}/>

        <div className='quiz-player'>
          <p className='quiz-player-info'>
            Hi <span className='quiz-player-remark name'>{currentPlayer.name}</span>! You have <span className='quiz-player-remark'>60 seconds</span>  to answer all questions. Good luck!
          </p>
        </div>

        <div className='quiz-question'>
          {/* <Timer duration={60} onComplete={handleOnComplete}/> */}
          <Question question={currentQuestion.question} onCompleteTime={handleOnComplete}/>
        </div>

        <QuizOptions 
          options={currentOptions} 
          isTimeUp={isTimeUp} 
          handleOptionChange={handleOptionChange}
          selectedAnswer={answerSelected}
        />

        <Button 
          text={buttonText!} 
          onClick={handleNextQuestion}
          className={'quiz-btn'}  
        />
        
      </div>
    </div>
  )
}

export default Quiz