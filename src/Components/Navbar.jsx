import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
    <header class="navcss">
    <nav>
      <ul class="navlinks">
      <li><a href="/">Landing</a></li>  
      <li><a href="/login">Login</a></li>
      <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Navbar;