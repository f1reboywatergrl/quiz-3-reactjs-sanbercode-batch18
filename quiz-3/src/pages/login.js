import React, {Component, useState, useEffect, createContext, useContext} from 'react';
import '../tugas-2/Tugas-2/public/css/style.css';
import {Context} from "./main.js"

const Login = (props) => {
    
    return (
        <div className="App">
            <section>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <h3 style={{margin:"5px"}}>Enter username : </h3>
                    <input type="text" style={{margin: "10px"}} />
                </div>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <h3 style={{margin:"5px"}}>Password : </h3>
                    <input type="text" style={{margin: "10px"}}/>
                </div>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <button style={{margin:"5px"}}>Login</button>
                </div>
            </section>
        </div>
    );
  }

  export default Login