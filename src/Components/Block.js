import React from "react"

//lägg till nummer i block och visa detta

export default function Block(props){
    if(props.brick_number>0){
        return(
            <div className = "brick">
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