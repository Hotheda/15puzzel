import React from "react"

export default function ShuffleButton(props){
    return(
        <div className={"shuffle"}>
            <button className={"shuffle_btn"} onClick={()=>props.shuffleBricks()}>Shuffle me here</button>
        </div>
    )
}