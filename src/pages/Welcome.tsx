import React, {useState} from 'react'
import Button from '../components/atoms/Button'
import {PageProps} from '../types/page.type'
import Form from '../components/molecules/Form'
import FormGroup from '../components/molecules/FormGroup'
import Label from '../components/atoms/Label'
import Input from '../components/atoms/Input'

interface player {
  name: string,
  score: number
}

const Welcome = ({onNextClick,buttonText}:PageProps) => {

  const [name,setName]= useState('')

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
    if(!name.length){
      alert('Please enter your name')
      return
    }

    localStorage.setItem('name',name.toLocaleLowerCase())
    
    const players: player[] = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')!) : [];
    
    if(!players.find(player=>player.name.toLocaleLowerCase() === name.toLocaleLowerCase())){
      players.push({name,score:0})
      localStorage.setItem('players',JSON.stringify(players))
    }

    if(onNextClick) onNextClick()
  }


  return (
    <section className='welcome'>
      <div className='logo-container'>
        <img 
          className='logo-img'
          src='/img/logo.png' 
          alt="Logo image" />
      </div>

      <div className='welcome-form'>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor={'name'} className={'form-label'} labelText={'Enter your name'} />
            <Input 
              type={'text'} 
              placeholder={'Your name...'} 
              className={'form-input'} 
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </FormGroup>

        <Button
          text={buttonText!}
          type={'submit'}
          className={'welcome-btn'}
        />
        </Form>
      </div>

    </section>
  )
}

export default Welcome