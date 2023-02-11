import React from 'react'
import video from '../../assets/maldivesVideo.mp4';
import Navbar from '../navbar/Navbar';
import './home.scss';
import {BiSearch} from 'react-icons/bi';
 
export default function Home() {
  return (
    <div className='home'>
        <video autoPlay muted loop className="background">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <Navbar />

        <div className="content">
            <h1>First Class Travel</h1>
            <h2>Top 1% Locations Worldwide</h2>
            <div className="search">
                <input id='input' type="text" placeholder='Search Destinations'/>
                <div className='search-icon'><BiSearch/></div>
            </div>
        </div>

    </div>
  )
}
