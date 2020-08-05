import React, { useEffect, useState } from "react"
import Board from "./Board";
import Brick from "./Brick";
import ShuffleButton from "./ShuffleButton"
import Winner from "./Winner"

export default function Game(props){
    const {columns, rows} = props;
    const [numberOfMoves, setNumberOfMoves] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [onShuffle, setOnShuffle] = useState(false)
    const [bricks, setBricks] = useState([]);
    const [brickToMove, setBrickToMove] = useState({
        id: -1,
        direction: null
    })


    useEffect(() =>{
        var bricks = []
        for(var i=0;i<(columns*rows);i++){
            bricks.push(i);
        }
        const shuffledBricks = shuffle(bricks)
        setBricks(shuffledBricks)
    }, [columns,rows])

    const shuffle = (bricks)=>{
        var shuffleBricks = [...bricks]
        do{
            for(var i=0;i<30;i++){
                var brickToMoveShuffle=Math.floor(Math.random()*shuffleBricks.length-1)
                shuffleBricks.splice(brickToMoveShuffle,0,shuffleBricks[shuffleBricks.length-1])
                shuffleBricks.pop()
            }
        }while(checkOrder(shuffleBricks))
        setGameOver(false)
        setNumberOfMoves(0)
        setBrickToMove({id: -1, direction: null})
        return shuffleBricks
    }

    const onBrickClick = ((num)=>{
        const id = bricks.findIndex(element=>element===num)
        const idOfEmpty = bricks.findIndex(element=>element===0)

        var direction = checkIfNeighboursIsEmpty(id,idOfEmpty)
        if(direction){
            moveBrick(id,idOfEmpty,direction)
        }
    })

    const checkIfNeighboursIsEmpty = ((id, idOfEmpty)=>{        
        if( (id-1) === idOfEmpty && id%columns) {
            return "move_left";
        }else if( (id+1) === idOfEmpty && (id+1)%columns){
            return "move_right";
        }else if( (id-columns) === idOfEmpty){
            return "move_up";
        }else if( (id+columns) === idOfEmpty){
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
        setBrickToMove({id: bricksMoved[idOfEmpty], direction: direction})
        setNumberOfMoves(numberOfMoves+1)
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

    const bricksToShow = bricks.map((num)=>{return(
                <Brick key={num} brick_number={num} shuffle={onShuffle} brickToMove={brickToMove} onBrickClick={onBrickClick}/>
            )})

    const shuffleBricks = (()=>{
        setOnShuffle(true)
        setBricks(shuffle(bricks))
    })

    if(onShuffle){
        setTimeout(()=>{
            setOnShuffle((false))
        },500)
    }

    return(
        <div>
            <Board bricks={bricksToShow} rows={rows} columns={columns}/>
            {gameOver ? <Winner numberOfMoves={numberOfMoves}/> : null}
            <ShuffleButton shuffleBricks={shuffleBricks}/>
        </div>
    )
}