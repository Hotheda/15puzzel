import React from "react"
import ReactDOM from "react-dom"
import Winner from "./Winner"

it("Renders whitout crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Winner />, div);
});