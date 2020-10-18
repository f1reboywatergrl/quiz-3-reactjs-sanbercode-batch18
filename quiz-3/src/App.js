import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from './pages/index.js';
import About from './pages/about.js';
import './tugas-2/Tugas-2/public/css/style.css';
import Logo from "./logo.png";
import Nav from './pages/nav.js';

export default function App() {
  return (
    <div>
        <Nav/>              
      <footer>
      <h5>copyright &copy; 2020 by Sanbercode</h5>
      </footer>
    </div>
  );
}
