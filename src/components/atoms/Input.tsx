import React from 'react'

interface InputProps{
  type:string,
  className?:string,
  placeholder?:string
  value:string ,
  onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
  id?:string
  name?:string
  disabled?:boolean
  checked?:boolean
}

const Input = ({type,className,placeholder,value,onChange,id,name,disabled=false,checked=false}:InputProps) => {
  return (
    <input 
      type={type} 
      className={className} 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      disabled={disabled}
      checked={checked}
    />
  )
}

export default Input