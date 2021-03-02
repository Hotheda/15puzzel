import React from "react"
import ReactDOM from "react-dom"
import BoardSizePicker from "./BoardSizePicker"

it("Renders without crashing", () => {
    const div = document.createElement("div");
    const setBoardSize = () => {
        console.log("Setboardsize from Boardsizepicker");
    };
    ReactDOM.render(<BoardSizePicker />, div); //id={"rowsandcolumns"} default={4} setBoardSize={setBoardSize}/>, div);
});