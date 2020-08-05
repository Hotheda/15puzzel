import React from "react"

export default function SizeDropdown(props){
    return(
        <div className={"size_input_div"} >
            <label>Board size: </label>
            {/*<input className={"size_input"} onClick={(e)=>props.handleChange(e)} type={"number"} id={props.id} min={3} max={7} defaultValue={props.default}/>*/}
            <select className={"size_input"} onClick={(e)=>props.handleChange(e)} type={"number"} id={props.id} defaultValue={props.default}>
                <option value="3">3 x 3</option>
                <option value="4">4 x 4</option>
                <option value="5">5 x 5</option>
                <option value="6">6 x 6</option>
            </select>
        </div>
    )
}