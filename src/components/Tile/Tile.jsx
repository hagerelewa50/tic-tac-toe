import React from 'react'

function Tile({value,onClick,playerTurn}) {

    let hoverplayerclass=null;
    if(value == null && playerTurn!=null){
        hoverplayerclass =`${playerTurn.toLowerCase()}-hover`

    }
  return <>

  <div  className= {`tile ${hoverplayerclass}`} onClick={onClick}  > {value} </div>
  
  
  </>
}

export default Tile