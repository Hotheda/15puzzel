import React from "react"


export default function Board(props){

    const printBoard = (()=>{
        const numberOfBricks = props.bricks.length

        var columnsContent = []

        for(var i=0;i<numberOfBricks-1;i+=props.rows){
            var rowsContent = [];
            for(var j=0; j<props.rows; j++){
                var brickNum = i+j
                rowsContent.push(props.bricks[brickNum])
            }
            columnsContent.push(rowsContent)
        }
        columnsContent = columnsContent.map((items)=>{
            return(
                <div key={items[0].key} className="board_row">
                    {items}
                </div>
            )
        })

        return(
            columnsContent
        )
    })

    return(
        <div className="board">
            {printBoard()}
        </div>
    )
}