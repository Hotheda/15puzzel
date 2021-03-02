import { fireEvent, getByText, render } from "@testing-library/react";
import React from "react"
import ReactDOM from "react-dom"
import ShuffleButton from "./ShuffleButton"

it("Renders whitout crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShuffleButton />, div);
});

it("Button runns shuffle function", () => {
    var clicked = false;
    const shuffleBricks = () => {
        clicked = true;
    };
    const div = document.createElement("div");
    const {getByText} = render(<ShuffleButton shuffleBricks={shuffleBricks} />, div);
    fireEvent.click(getByText("Shuffle me here"))
    expect(clicked).toBe(true);
});
    