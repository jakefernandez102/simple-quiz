import React, {ReactNode} from 'react'

interface FormGroupProps{
  children: ReactNode
  className?:string
}

const FormGroup = ({children,className}:FormGroupProps) => {
  return (
    <div className={`${className} form-group`}>
      {children}
    </div>
  )
}

export default FormGroup