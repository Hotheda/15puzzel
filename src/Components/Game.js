import React, { useEffect, useState } from "react"
import Board from "./Board";
import Block from "./Block";
import ShuffleButton from "./ShuffleButton"
import Winner from "./Winner"

export default function Game(props){
    const {columns, rows} = props;
    const [gameOver, setGameOver] = useState(false)
    const [shuffleing, setShuffleing] = useState(false)
    const [bricks, setBricks] = useState([]);
    const [moveBrickTo, setMoveBrickTo] = useState({
        id: -1,
        direction: null
    })


    useEffect(() =>{
        var createBricks = []
        for(var i=0;i<(columns*rows);i++){
            createBricks.push(i);
        }
        createBricks = shuffle(createBricks)
        setBricks(createBricks)
    }, [columns,rows])

    const shuffle = (bricks)=>{
        var shuffleBricks = [...bricks]
        do{
            for(var i=0;i<30;i++){
                var brickToMove=Math.floor(Math.random()*shuffleBricks.length-1)
                shuffleBricks.splice(brickToMove,0,shuffleBricks[shuffleBricks.length-1])
                shuffleBricks.pop()
            }
        }while(checkOrder(shuffleBricks))
        setGameOver(false)
        return shuffleBricks
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
        setGameOver(true)
        return true;
    })


    var bricksToShow = bricks.map((num)=>{return(
            <Block key={num} brick_number={num} shuffle={false} moveBrickTo={moveBrickTo} handleClick={handleClick}/>
        )})


    const shuffleBricks = (()=>{
        setShuffleing(true)
        setBricks(shuffle(bricks))
    })

    return(
        <div>
            <Board bricks={bricksToShow} rows={rows} columns={columns} handleClick={handleClick}/>
            {gameOver ? <Winner/> : null}
            <ShuffleButton shuffleBricks={shuffleBricks}/>
        </div>
    )
}