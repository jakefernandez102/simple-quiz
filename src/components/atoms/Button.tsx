import React from 'react'

interface ButtonProps{
  text:string,
  className?:string,
  onClick?: ()=>void,
  type?: "button" | "submit" | "reset"
}

const Button = ({text,className,onClick,type}:ButtonProps) => {
  return (
    <button
      className={className}
      type={type ? type : 'button'}
      onClick={onClick}
    >{text}</button>
  )
}

export default Button