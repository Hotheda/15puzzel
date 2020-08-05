import React from "react"


export default function Board(props){

    const printBoard = (()=>{
        const numberOfBricks = props.bricks.length

        var boardContent = []

        for(var rowStartIndex = 0; rowStartIndex<numberOfBricks - 1; rowStartIndex += props.columns){
            var rowsContent = [];
            for(var columnIndex = 0; columnIndex < props.columns; columnIndex++){
                var brickNum = rowStartIndex+columnIndex
                rowsContent.push(props.bricks[brickNum])
            }
            boardContent.push(rowsContent)
        }
        const board = boardContent.map((row)=>{
            return(
                <div key={row[0].key} className="board_row">
                    {row}
                </div>
            )
        })

        return(
            board
        )
    })

    return(
        <div className="board">
            {printBoard()}
        </div>
    )
}