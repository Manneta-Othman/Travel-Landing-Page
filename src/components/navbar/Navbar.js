import React from 'react'
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';

export default function Navbar() {
  return (
    <div className='navebar'>
        <div className="logo">Manneta</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
        </ul>
        <div className="nav-icons">
            <BiSearch />
            <BsPerson />
        </div>
    </div>
  )
}
