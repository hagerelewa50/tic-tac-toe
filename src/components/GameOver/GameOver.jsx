import React from 'react'
import GameState from '../GameState'

function GameOver({gamestate}) {
  switch (gamestate) {
    case GameState.inprogress:
        return <></>
    case GameState.playerXwinner:
        return <div className='game-over'> X winner </div>
    case GameState.playerOwinner:
        return <div className='game-over'> O winner </div>    
    case GameState.draw:
            return <div className='game-over'> Draw </div>    
  
    default:
       return <></>
  }
}

export default GameOver