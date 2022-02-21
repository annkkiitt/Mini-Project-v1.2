import React, { useState } from 'react'
import './Components.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [mystyle, setmystyle] = useState({})

  const toggleMode=()=>{
    if(props.mode==='light'){
      setmystyle({
        backgroundColor: '#8946A6'
      })
    }
    else{
      setmystyle({
        backgroundColor: 'rgb(27, 27, 27)'
      })
    }
    props.toggleMode();
  }
  return (
    <>
    <nav className="navbar">
      <ul className="navbarList" style={mystyle}>
        <li><Link to="/"><img src={logo} width={40}/></Link></li>
        <li><Link to="/">TextUtils</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>

    </>
  )
}
