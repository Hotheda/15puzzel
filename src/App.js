import React, { useState } from "react"
import Game from "./Components/Game"
import BoardSizePicker from "./Components/BoardSizePicker"

// Skapa spelbräde 4x4 skall kodas in i variabler
// lägg till block ( 4x4-1 )
// Numreras 1 och uppåt
// blickor skall vara blandade vid start
// flytta brickor genom att klicka på brickan bredvid tom ruta
// lägg till knapp för att blanda block
// När puzzlet är löst skall detta visas för användaren
// kontrollera så inte puzzlet är löst direkt

export default function App(){
    const [rows,setRows] = useState(5)
    const [columns,setColumns] = useState(3)

    const setBoardSize = ((e)=>{
        setRows(parseInt(e.target.value))
        setColumns(parseInt(e.target.value))
    })

    return(
        <div>
            <Game rows={rows} columns={columns} />
            <BoardSizePicker id={"rowsandcolumns"} default={rows} setBoardSize={setBoardSize}/>
        </div>
    )
}