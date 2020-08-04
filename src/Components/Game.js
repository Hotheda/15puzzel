import React, { useEffect, useState } from "react"
import Board from "./Board";
import Block from "./Block";

export default function Game(props){
    const {colums, rows} = props;
    const [bricks, setBricks] = useState([]);

    useEffect(() =>{
        var createBricks = []
        for(var i=0;i<(colums*rows);i++){
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
        // kolla upp så att den inte redan är löst
        return createBricks
    }

    const handleClick = ((num)=>{
        const id = bricks.findIndex(element=>element===num)
        const idOfEmpty = bricks.findIndex(element=>element===0)

        if(checkIfNeghborIsEmpty(id,idOfEmpty)){
            moveBrick(id,idOfEmpty)
        }
    })

    const checkIfNeghborIsEmpty = ((id, idOfEmpty)=>{

        
        if( (id-1) === idOfEmpty && id%rows) {
            return true;
        }else if( (id+1) === idOfEmpty && (id+1)%rows){
            return true;
        }else if( (id-rows) === idOfEmpty){
            return true;
        }else if( (id+rows) === idOfEmpty){
            return true;
        }else{
            return false;
        }
    })

    const moveBrick = ((id,idOfEmpty)=>{
        var bricksMoved = [...bricks]
        bricksMoved[idOfEmpty] = bricksMoved[id]
        bricksMoved[id] = 0
        setBricks(bricksMoved)
        checkOrder(bricksMoved)
    })

    const checkOrder = ((bricksMoved)=>{
        for(var i=0;i<bricksMoved.length-1;i++){
            if(bricksMoved[i] !== i+1){
                console.log(bricksMoved[i], (i+1))
                return false;
            }
        }
        console.log("Du vann")
        return true;
    })

    var bricksToShow = bricks.map((num)=>{return(
        <Block key={num} brick_number={num} handleClick={handleClick}/>
    )})

    return(
        <div>
            <h1 style = {{textAlign: "center", margin: "25px"}} >Here is the board {colums} x {rows}</h1>
            <Board bricks={bricksToShow} rows={rows} handleClick={handleClick}/>
        </div>
    )
}