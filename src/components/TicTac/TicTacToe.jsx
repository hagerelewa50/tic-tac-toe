import React, { useEffect, useState } from 'react'
import Board from '../Board/Board'
import GameState from '../GameState'
import GameOver from '../GameOver/GameOver'
import Playagain from '../Playagain/Playagain'
import soundGameWin from '../../sounds/soundGameWin-.wav'
import soundClickGame from '../../sounds/mixkit-achievement-bell-600.wav'



const play_x = "X"
const play_o = "O"
const winningcombination = [

    {combo:[0,1,2],winnerClass:"strike-row-1" },
    {combo:[3,4,5],winnerClass:"strike-row-2" },
    {combo:[6,7,8],winnerClass:"strike-row-3" },

    {combo:[0,3,6],winnerClass:"strike-column-1" },
    {combo:[1,4,7],winnerClass:"strike-column-2" },
    {combo:[2,5,8],winnerClass:"strike-column-3" },

    {combo:[0,4,8],winnerClass:"strike-dialonge-1" },
    {combo:[2,4,6],winnerClass:"strike-dialonge-2" },

]


function TicTacToe() {
    const soundClick =new Audio(soundClickGame)
soundClick.volume=0.2

const GameWin =new Audio(soundGameWin)
GameWin.volume=0.2

   const [tiles, settiles] = useState(Array(9).fill(null));
   const [playerTurn, setplayerTurn] = useState(play_x)
   const [winnerClass, setwinnerClass] = useState(null)
   const [gamestate, setGameState] = useState(GameState.inprogress)



    function checkWinner(tiles , setwinnerClass){
        for (const {combo ,winnerClass} of winningcombination) {
           
            const tilevalue1 = tiles[combo[0]];
            const tilevalue2 = tiles[combo[1]];
            const tilevalue3 = tiles[combo[2]];
            
            if(tilevalue1 !=null && tilevalue1===tilevalue2 && tilevalue1 === tilevalue3){
                setwinnerClass(winnerClass);

                if(tilevalue1===play_x){
                    setGameState(GameState.playerXwinner)
                }else{
                    setGameState(GameState.playerOwinner)
                }

            return
               
            }
        }

        const alltilesFilledin = tiles.every((tile)=> tile !== null)
        if(alltilesFilledin){
            setGameState(GameState.draw);
        }
    }

    function handleReset(){
        settiles(Array(9).fill(null));
        setGameState(GameState.inprogress)
        setwinnerClass(null)
        setplayerTurn(play_x)
    }


   useEffect(()=>{
    checkWinner(tiles,setwinnerClass)
   },[tiles])

   useEffect(() => {

    if(tiles.some((tile)=> tile !== null)){
        soundClick.play();
    }
     
   }, [tiles])

   useEffect(() => {

    if( winnerClass !== null){
       GameWin.play();
    }
     
   }, [winnerClass])
   

   const handlePlayer = (index)=>{
    if(gamestate !== GameState.inprogress){
        return;
    }
    if(tiles[index]!==null){

    return;
    }

    const newtiles = [...tiles]
    newtiles[index] = playerTurn
    settiles(newtiles)
    if (playerTurn===play_x) {
        setplayerTurn(play_o)

    }else{
        setplayerTurn(play_x)
    }
   }

  return <>
  <h1>Tic Tac Toe</h1>
  <Board  tiles ={tiles}  onhandlePlayer={handlePlayer} playerTurn={playerTurn} winnerClass={winnerClass} />
  <GameOver  gamestate={gamestate} />
  <Playagain   onReset={handleReset}/>
  </>
}

export default TicTacToe