import React from "react"

export default function SizeDropdown(props){
    return(
        <div className={"size_input_div"} >
            <input className={"size_input"} onClick={(e)=>props.handleChange(e)} type={"number"} id={props.id} min={3} max={8} defaultValue={props.default}/>
        </div>
    )
}