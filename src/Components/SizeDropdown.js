import React from "react"

export default function SizeDropdown(props){
    return(
        <div>
            <input onClick={(e)=>props.handleChange(e)} type={"number"} id={props.id} min={2} max={8} defaultValue={props.default}/>
        </div>
    )
}