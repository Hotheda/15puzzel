import React from "react"

export default function Brick(props){
    if(props.shuffle){
        return(
            <div onClick={(event)=>props.handleClick(props.brick_number)} className = {"shuffle_bricks"}>
                <p>{props.brick_number}</p>
            </div>
        )
    }
    if(props.brick_number===props.moveBrickTo.id){
        return(
            <div onClick={(event)=>props.handleClick(props.brick_number)} className = {"brick " + props.moveBrickTo.direction}>
                <p>{props.brick_number}</p>
            </div>
        )
    }else if(props.brick_number>0){
        return(
            <div onClick={(event)=>props.handleClick(props.brick_number)} className = {"brick"}>
                <p>{props.brick_number}</p>
            </div>
        )
    }else{
        return(
            <div className = "no_brick">
            </div>
        )
    }
}