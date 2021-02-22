import React, { useEffect, useState } from "react"
import Board from "./Board";
import Brick from "./Brick";
import ShuffleButton from "./ShuffleButton"
import Winner from "./Winner"

const _moveRight = "move_right";
const _moveLeft = "move_left";
const _moveDown = "move_down";
const _moveUp = "move_up";

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
    const [moveLine, setMoveLine] = useState(true)


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
        //Get more than one brick to move, move the whole line of bricks
        else if(moveLine){
            direction = checkIfLineIsEmpty(id, idOfEmpty)
            if(direction){
                moveBricks(id,idOfEmpty,direction)
            }
        }
    })

    const checkIfLineIsEmpty = (id, idOfEmpty) => {
        if(id<idOfEmpty){
            if(id >= parseInt(idOfEmpty/columns) * rows){
                return _moveRight;
            }else if(id%columns === idOfEmpty%columns){
                return _moveDown;
            }
        }else if(id>idOfEmpty){
            if(id <= parseInt(idOfEmpty/columns) * (rows)  + rows ){
                return _moveLeft;
            }else if(id%columns === idOfEmpty%columns){
                return _moveUp;
            }
        }
    }

    const checkIfNeighboursIsEmpty = ((id, idOfEmpty)=>{        
        if( (id-1) === idOfEmpty && id%columns) {
            return _moveLeft;
        }else if( (id+1) === idOfEmpty && (id+1)%columns){
            return _moveRight;
        }else if( (id-columns) === idOfEmpty){
            return _moveUp;
        }else if( (id+columns) === idOfEmpty){
            return _moveDown;
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

    const moveBricks = ((id,idOfEmpty,direction)=>{
        var bricksMoved = [...bricks]
        var thisID = idOfEmpty;
        var lastId = idOfEmpty;

        while( ( direction === _moveLeft && (id-1 > thisID )) ||
            ( direction === _moveRight && (id+1 < thisID )) ||
            ( direction === _moveUp && (id-rows > thisID )) ||
            ( direction === _moveDown && (id+rows < thisID )) ){
                thisID = lastId;
                switch(direction){
                    case _moveLeft:
                        lastId = thisID + 1;
                        break;
                    case _moveRight:
                        lastId = thisID - 1;
                        break;
                    case _moveUp:
                        lastId = thisID + rows;
                        break;
                    case _moveDown:
                        lastId = thisID - rows;
                        break;
                }

                var bricktemp = bricksMoved[lastId]
                bricksMoved[lastId] = bricksMoved[thisID]
                bricksMoved[thisID] = bricktemp
                setBrickToMove({id: bricksMoved[thisID], direction: direction})
        }
        console.log("-------- NEXT --------")
        setBricks(bricksMoved)
        checkOrder(bricksMoved)
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