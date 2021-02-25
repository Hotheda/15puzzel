import React from "react"

export default function Winner(props){
    return(
        <div className={"winner_text"}>
            <h1>You win!</h1>
            <h2>Congratulations!</h2>
            <p>It took {props.numberOfMoves} moves.</p>
        </div>
    )
}