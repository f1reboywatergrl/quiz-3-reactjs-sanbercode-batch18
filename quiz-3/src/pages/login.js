import React, {Component, useState, useEffect, createContext, useContext} from 'react';
import '../tugas-2/Tugas-2/public/css/style.css';
import {Context} from "./main.js"

const Login = (props) => {

    /*const [login, setLogin] = useContext(Context)
    const [form, setForm] = useState(-1);*/

    
    return (
        <div className="App">
            <section>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <h3>Username : </h3>
                    <input type="text" style={{marginLeft: "1%"}} />
                </div>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <h3>Password : </h3>
                    <input type="text" style={{marginLeft: "1%"}}/>
                </div>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <button>Login</button>
                </div>
            </section>
        </div>
    );
  }//onClick={() => setLogin(true)}

  export default Login