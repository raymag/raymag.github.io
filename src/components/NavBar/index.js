import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function NavBar(){
    return (
    <>
    <header id="header">
      <div id="header-box">
        <h1 id="header-title">I'm Magno.</h1>
        <span id="header-subtitle">a web developer</span>
        </div>
        <div id="header-background"></div>
    </header>

    <nav id="navbar">
        <span id="navbar-logo">MAGNO<span className="highlight">DEV</span></span>
        <ul id="navbar-links">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/skills" >Skills</Link></li>
            <li><Link to="/misc" >All</Link></li>
            <li><Link to="/about" >About</Link></li>
        </ul>
    </nav>
    </>
    );
}