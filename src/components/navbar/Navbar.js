import React from 'react'
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import  './navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">M-Travel</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
        </ul>
        <div className="nav-icons">
            <BiSearch className='search'/>
            <BsPerson className='person'/>
        </div>
    </div>
  )
}
