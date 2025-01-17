import React, {useState} from 'react'
import TopInformation from '../components/molecules/TopInformation'
import {Player} from '../types/page.type'
import {reactQuestion} from '../data/questions'

const LeaderBoard = () => {

  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('players') || '[]'))

  return (
    <div className='leaderboard-container'>
      <div className="leaderboard-main">
        <TopInformation text='Leaderboard'  className='leaderboard-top-text'/>
      <div className="leaderboard">
        {
          players.slice(0,3).map((player:Player,index:number)=>(
            <>
              <div className={`player ${index === 0 ?"first" :index === 1 ?"second":'third'}`}>
                {
                index === 0 &&
                  <img src="/img/crown.png" alt="Crown" className="crown" />
                }
                <img src="https://avatar.iran.liara.run/public" alt={`Player ${index+1}`} className="avatar" />
                <p className="name">{player.name}</p>
                <p className="score">{player.score}/{reactQuestion.length}</p>
              </div>
            </>
          ))
        }
      </div>

      <div className='leaderboard-top-4'>
        {
          players.slice(3).map((player:Player,index:number)=>(
            <div key={player.name} className='leaderboard-player'>
              <div>{index+4}</div>
              <div className='leaderboard-player-info'>
                <img className='leaderboard-avatar-image' src="https://avatar.iran.liara.run/public" alt="Avatar" />
                <p>{player.name}</p>
              </div>
              <div className='leaderboard-player-score'>
                <p>Score</p>
                <p>{player.score}</p>
              </div>
            </div>
          ))
        }
      </div>

      </div>
    </div>

  )
}

export default LeaderBoard