import React, { useEffect, useState } from "react"
import Block from "./Block";
import Board from "./Board";

export default function Game(props){
    const {colums, rows} = props;
    const [bricks, setBricks] = useState([]);

    useEffect(() =>{
        var createBricks = []
        for(var i=0;i<=15;i++){
            createBricks.push(i);
        }
        createBricks = shuffle(createBricks)
        setBricks(createBricks)
    }, [])
    
    const shuffle = (createBricks)=>{
        for(var i=0;i<30;i++){
            var brickToMove=Math.floor(Math.random()*15)
            createBricks.splice(brickToMove,0,createBricks[createBricks.length-1])
            createBricks.pop()
        }
        return createBricks
    }

    var bricksToShow = bricks.map((num)=>{return(
        <Block key={num} brick_number={num}/>
    )})

    return(
        <div>
            <h1>Here is the board {colums} x {rows}</h1>
            <Board bricks={bricksToShow} rows={rows}/>
        </div>
    )
}