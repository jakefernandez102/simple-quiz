import React, {ReactNode} from 'react'

interface FormProps{
  onSubmit:(e:React.FormEvent<HTMLFormElement>)=>void,
  children: ReactNode
}

const Form = ({onSubmit,children}:FormProps) => {
  return (
    <form className='form' onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form