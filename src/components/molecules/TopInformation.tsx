import React from 'react'

interface TopInformationProps {
    text: string;
    className?: string;
}


const TopInformation = ({text,className}:TopInformationProps) => {
  return (
    <div className='quiz-upper-section'>
      <div>
        <img 
          src="/img/back-icon.png" 
          alt="Back icon" 
          width={20}
          onClick={()=> window.location.href = '/'} 
        />
      </div>
      <div className={className}>
        {text}
      </div>
      <div></div>
    </div>
  )
}

export default TopInformation