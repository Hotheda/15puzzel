import React from "react"


export default function Board(props){

    const printBoard = (()=>{
        const numberOfBricks = props.bricks.length
        var rowContent = []
        for(var i=0;i<numberOfBricks-1;i+=props.rows){
            var columContent = [];
            for(var j=0; j<props.rows; j++){
                var brickNum = i+j
                columContent.push(props.bricks[brickNum])
            }
            rowContent.push(columContent)
        }
        rowContent = rowContent.map((items)=>{
            return(
                <div key={items[0].key} className="board_row">
                    {items}
                </div>
            )
        })

        return(
            rowContent
        )
    })

    return(
        <div className="board">
            {printBoard()}
        </div>
    )
}