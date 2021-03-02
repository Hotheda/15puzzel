import React from 'react'
import ReactDOM from 'react-dom'
import Brick from "./Brick"

it("Renders without crashing", () => {
    const div = document.createElement('div');
    const onBrickClick = () =>{
        console.log("Brick function test");
    };
    ReactDOM.render(<Brick key={1} brick_number={1} shuffle={false} brickToMove={0} onBrickClick={onBrickClick}/>, div);
        
});
