import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Index from './index.js';
import About from './about.js';
import EditMovie from './editmovie.js';
import '../tugas-2/Tugas-2/public/css/style.css';
import Logo from "../logo.png";
import Login from "./ctrl.js";

const Nav = () => {
    let login=true
    return (
        <Router>
        <div>
            {(login)?
                <nav className="header" style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
                    <img id="logo" src={Logo} width="200px" style={{marginRight:"15px"}} />                    
                <ul>
                    <li>
                        <Link to ="/index">Home </Link> 
                    </li>
                    <li>
                        <Link to ="/about">About </Link> 
                    </li>
                    <li>
                        <Link to ="/editmovie">Movie List Editor </Link> 
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>            
            :
            <nav className="header" style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
                <img id="logo" src={Logo} width="200px" style={{marginRight:"15px"}} />                    
                <ul>
                    <li>
                        <Link to ="/index">Home </Link> 
                    </li>
                    <li>
                        <Link to ="/about">About </Link> 
                    </li>
                    <li>
                        <Link to ="/login">Login </Link> 
                    </li>
                </ul>
            </nav>              
            }                       
            {(login)?
                <Switch>
                    <Route path="/index">
                        <div style={{marginTop:"1%"}}>
                            <Index />                      
                        </div>                
                    </Route>
                    <Route path="/about">
                        <div style={{marginTop:"1%"}}>
                            <About />                     
                        </div>                   
                    </Route>
                    <Route path="/editmovie">
                        <div style={{marginTop:"1%"}}>
                            <EditMovie />                     
                        </div>                   
                    </Route>
                    <Route path="/logout">
                        <div style={{marginTop:"1%"}}>
                            <Login />                     
                        </div>                   
                    </Route>                    
                </Switch>             
            :
                <Switch>
                    <Route path="/index">
                        <div style={{marginTop:"1%"}}>
                            <Index />                      
                        </div>                
                    </Route>
                    <Route path="/about">
                        <div style={{marginTop:"1%"}}>
                            <About />                     
                        </div>                   
                    </Route>
                    <Route path="/login">
                        <div style={{marginTop:"1%"}}>
                            <Login />                     
                        </div>                   
                    </Route>
                </Switch>              
            }
         
        </div>
        </Router>
    );
}

export default Nav;
