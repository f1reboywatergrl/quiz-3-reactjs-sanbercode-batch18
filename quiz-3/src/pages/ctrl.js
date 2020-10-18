import React from "react"
import {Provider} from "./main"
import Login from "./login"
import Nav from "./nav.js"
const Control = () =>{
  return(
    <Provider>
        <Login/>
      
    </Provider>
  )
}

export default Control