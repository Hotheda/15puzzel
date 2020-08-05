import React from "react"

export default function Shuffle(props){
    return(
        <div className={"shuffle"}>
            <button onClick={()=>props.shuffleBricks()}>Shuffle me here</button>
        </div>
    )
}