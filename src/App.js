import React, { useState } from "react"
import Game from "./Components/Game"
import SizeDropdown from "./Components/SizeDropdown"

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
    const [columns,setColumns] = useState(6)

    const handleChange = ((e)=>{
        if(e.target.id==="rows")
            setRows(parseInt(e.target.value))
        else if(e.target.id==="columns")
            setColumns(parseInt(e.target.value))
    })

    return(
        <div>
            <SizeDropdown id={"rows"} default={rows} handleChange={handleChange}/>
            <SizeDropdown id={"columns"} default={columns} handleChange={handleChange}/>
            <Game rows={rows} columns={columns} />
        </div>
    )
}