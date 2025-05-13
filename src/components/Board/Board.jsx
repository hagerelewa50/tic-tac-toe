import React from 'react'
import Tile from '../Tile/Tile'
import Strike from '../Strike/Strike'


function Board({tiles ,onhandlePlayer,playerTurn,winnerClass}) {
  return <>
  <div className="board">
  <Tile playerTurn={playerTurn} value={tiles[0]} onClick = {()=>onhandlePlayer(0)}/>
  <Tile playerTurn={playerTurn} value={tiles[1]} onClick = {()=>onhandlePlayer(1)}/>
  <Tile playerTurn={playerTurn} value={tiles[2]} onClick = {()=>onhandlePlayer(2)}/>
  <Tile playerTurn={playerTurn} value={tiles[3]} onClick = {()=>onhandlePlayer(3)}/>
  <Tile playerTurn={playerTurn} value={tiles[4]} onClick = {()=>onhandlePlayer(4)}/>
  <Tile playerTurn={playerTurn} value={tiles[5]} onClick = {()=>onhandlePlayer(5)}/>
  <Tile playerTurn={playerTurn} value={tiles[6]} onClick = {()=>onhandlePlayer(6)}/>
  <Tile playerTurn={playerTurn} value={tiles[7]} onClick = {()=>onhandlePlayer(7)}/>
  <Tile playerTurn={playerTurn} value={tiles[8]} onClick = {()=>onhandlePlayer(8)}/> 
    <Strike winnerClass={winnerClass}  />
  </div>
  </>
}

export default Board