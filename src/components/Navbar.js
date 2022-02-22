import React from 'react'
import './Components.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
    <nav className="navbar">
      <ul className="navbarList">
        <li><Link to="/"><img src={logo} width={40} alt=""/></Link></li>
        <li><Link to="/">TextUtils</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>

    </>
  )
}
