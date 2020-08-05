import React from "react"

export default function Winner(props){
    return(
        <div className={"winner_text"}>
            <h1>You win, gz!</h1>
            <p>It took {props.numberOfMoves} moves to finish</p>
        </div>
    )
}