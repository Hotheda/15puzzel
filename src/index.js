import React from "react"
import ReactDOM from "react-dom"
import App from "./App/App"
import "./Css/styles.css"

function Index(){
  return(
    <App/>
  )
}

ReactDOM.render(<Index/>, document.getElementById("root"))