import React from "react"

//lägg till nummer i block och visa detta

export default function Block(props){
    return(
        <div className="brick">
            <p>{props.brick_number}</p>
        </div>
    )
}