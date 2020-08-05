import React from "react"

export default function BoardSizePicker(props){
    return(
        <div className={"size_input_div"} >
            <label>Board size: </label>
            <select className={"size_input"} onChange={(e)=>props.setBoardSize(e)} type={"number"} id={props.id} defaultValue={props.default}>
                <option value="3">3 x 3</option>
                <option value="4">4 x 4</option>
                <option value="5">5 x 5</option>
                <option value="6">6 x 6</option>
            </select>
        </div>
    )
}