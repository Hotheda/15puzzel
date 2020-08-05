import React from "react"

export default function Brick(props){
    var className = "no_brick"

    if(props.shuffle && props.brick_number!==0){
        className = "brick shuffle_brick"
    }else if(props.brick_number===props.brickToMove.id){
        className = "brick " + props.brickToMove.direction
    }else if(props.brick_number>0){
        className = "brick"
    }

    return(
        <div onClick={(event)=>props.onBrickClick(props.brick_number)} className = {className}>
            <p>{props.brick_number}</p>
        </div>
    )    
}