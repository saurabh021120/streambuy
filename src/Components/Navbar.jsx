import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
    <header class="navcss">
    <nav>
      <ul class="navlinks">
      <li><a href="https://saurabh021120.github.io/streambuy/#/">Landing</a></li>  
      <li><a href="https://saurabh021120.github.io/streambuy/#/login">Login</a></li>
      <li><a href="https://saurabh021120.github.io/streambuy/#/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Navbar;