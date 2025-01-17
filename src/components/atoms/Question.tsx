import React from 'react'
import Timer from './Timer';

interface QuestionProps {
  question: string;
  onCompleteTime: () => void;
}

const Question = ({question,onCompleteTime}:QuestionProps) => {
  return (
    <div className='question'>
          <Timer duration={60} onComplete={onCompleteTime}/>
      {question}
    </div>
  )
}

export default Question