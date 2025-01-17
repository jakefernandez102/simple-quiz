import React from 'react'
import FormGroup from './FormGroup';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface QuizOptionsProps {
  options: string[];
  isTimeUp: boolean;
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedAnswer: number;
}

const QuizOptions = ({options,isTimeUp,handleOptionChange,selectedAnswer}: QuizOptionsProps) => {
  return (
    <div className='quiz-options'>
      {options.map((option, index) => (
      <FormGroup key={index} className={'option'}>
        <Label labelText={option} className={'radio-label'} htmlFor={`option-${index}`}/>
        <Input
        key={index} 
        name={'option'} 
        id={`option-${index}`} 
        className='radio-input'
        value={index.toString()}
        onChange={handleOptionChange}
        type={'radio'}
        disabled={isTimeUp} 
        checked={selectedAnswer === index}
      />
      </FormGroup>
      ))}
    </div>
  )
}

export default QuizOptions