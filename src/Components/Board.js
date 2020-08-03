import React from "react"

export default function Board(props){

    /*
    useEffect(()=>{
        const numberOfBricks = props.bricks.length
        for(var i=props.rows; i<numberOfBricks; i=i+props.rows){
            console.log(i)
        } 

    })
    */

    const printBoard = (()=>{
        console.log(props.bricks)
        const numberOfBricks = props.bricks.length
        var rowContent = []
        for(var i=0;i<numberOfBricks-1;i+=props.rows){
            var columContent = [];
            console.log("row",i)
            for(var j=0; j<props.rows; j++){
                var brickNum = i+j
                columContent.push(props.bricks[brickNum])
                console.log(brickNum, props.bricks[brickNum])
            }
            rowContent.push(columContent)
        }
        rowContent = rowContent.map((items)=>{
            return(
                <div className="board_row">
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