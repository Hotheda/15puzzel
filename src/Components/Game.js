import React, { useEffect, useState } from "react"
import Board from "./Board";
import Block from "./Block";

export default function Game(props){
    const {colums, rows} = props;
    const [bricks, setBricks] = useState([]);
    const [moveBrickTo, setMoveBrickTo] = useState({
        id: -1,
        direction: null
    })


    useEffect(() =>{
        var createBricks = []
        for(var i=0;i<(colums*rows);i++){
            createBricks.push(i);
        }
        createBricks = shuffle(createBricks)
        setBricks(createBricks)
    }, [colums,rows])

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

        var direction = checkIfNeghborIsEmpty(id,idOfEmpty)
        if(direction){
            moveBrick(id,idOfEmpty,direction)
        }
    })

    const checkIfNeghborIsEmpty = ((id, idOfEmpty)=>{

        
        if( (id-1) === idOfEmpty && id%rows) {
            return "move_left";
        }else if( (id+1) === idOfEmpty && (id+1)%rows){
            return "move_right";
        }else if( (id-rows) === idOfEmpty){
            return "move_up";
        }else if( (id+rows) === idOfEmpty){
            return "move_down";
        }else{
            return false;
        }
    })

    const moveBrick = ((id,idOfEmpty,direction)=>{
        var bricksMoved = [...bricks]
        bricksMoved[idOfEmpty] = bricksMoved[id]
        bricksMoved[id] = 0
        setBricks(bricksMoved)
        checkOrder(bricksMoved)
        setMoveBrickTo({id: bricksMoved[idOfEmpty], direction: direction})
    })

    const checkOrder = ((bricksMoved)=>{
        for(var i=0;i<bricksMoved.length-1;i++){
            if(bricksMoved[i] !== i+1){
                return false;
            }
        }
        console.log("Du vann")
        return true;
    })

    var bricksToShow = bricks.map((num)=>{return(
        <Block key={num} brick_number={num} moveBrickTo={moveBrickTo} handleClick={handleClick}/>
    )})

    return(
        <div>
            <h1 style = {{textAlign: "center", margin: "25px"}} >Here is the board {colums} x {rows}</h1>
            <Board bricks={bricksToShow} rows={rows} handleClick={handleClick}/>
        </div>
    )
}