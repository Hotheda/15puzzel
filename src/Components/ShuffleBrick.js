import React from "react"

export default function ShuffleBrick(props){
    if(props.brick_number>0){
        return(
            <div className = {"brick shuffle_brick"}>
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