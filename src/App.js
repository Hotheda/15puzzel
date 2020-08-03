import React from "react"
import Game from "./Components/Game"

// Skapa spelbräde 4x4 skall kodas in i variabler
// lägg till block ( 4x4-1 )
// Numreras 1 och uppåt
// blickor skall vara blandade vid start
// flytta brickor genom att klicka på brickan bredvid tom ruta
// lägg till knapp för att blanda block
// När puzzlet är löst skall detta visas för användaren


export default function App(){
    return(
        <div>
            <Game rows={4} colums={4} />
        </div>
    )
}