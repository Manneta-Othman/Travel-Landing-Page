import React from 'react'
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import  './navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">M-Travel</div>
        <ul className='nav-menu'>
            <a href="#home"><li>Home</li></a>
            <a href="#destination"><li>Destination</li></a>
            <a href="#travel"><li>Travel</li></a>
            <a href="#book"><li>Book</li></a>
            <a href="#views"><li>Views</li></a>
        </ul>
        <div className="nav-icons">
            <BiSearch className='icon'/>
            <BsPerson className='icon'/>
        </div>
    </div>
  )
}
