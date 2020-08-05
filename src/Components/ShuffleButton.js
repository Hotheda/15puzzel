import React from "react"

export default function ShuffleButton(props){
    return(
        <div className={"shuffle"}>
            <button onClick={()=>props.shuffleBricks()}>Shuffle me here</button>
        </div>
    )
}