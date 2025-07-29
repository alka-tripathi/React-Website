import React, { useState } from 'react';
import logo from '../ImagesAssets/logo.png';
import '../styles/Navbar.css';
import '../App.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

export default function Navbar() {
  //state for hamburger
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar=()=>{
    setOpenLinks(!openLinks);
  }
  return (
    <div className="navbar">
      <div
        className="leftside"
        id={openLinks ? 'open' : 'close'}
      >
        <img src={logo} />
        <div className="hiddenlinks">
          <Link to="/">home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
      <div className="rightside">
        <Link to="/">home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>

        <button onClick={toggleNavbar}>
          <MenuIcon></MenuIcon>
        </button>
      </div>
    </div>
  );
}
