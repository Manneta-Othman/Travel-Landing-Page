<<<<<<< HEAD
import './destinations.scss';
import maldives3 from '../../assets/maldives3.jpg';
import maldives2 from '../../assets/maldives2.jpg';
import maldives from '../../assets/maldives.jpg';
import borabora from '../../assets/borabora.jpg';
import borabora2 from '../../assets/borabora2.jpg';
import gold from '../../assets/gold.png';



export default function Destinations() {
  return (
    <div id='destinations'>
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className="galery">
            <div className="img-left">
                <img src={maldives3} alt="" />
            </div>
            <div className="img-right">
                <img src={maldives2} alt="" />
                <img src={maldives} alt="" />
                <img src={borabora} alt="" />
                <img src={borabora2} alt="" />
            </div>
        </div>
        <div className="destinations-content">
            <div className="content-left">
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam amet, beatae ut error molestiae voluptas distinctio, qui, iusto deleniti fugit nemo incidunt cumque ad praesentium sapiente placeat magnam quibusdam!</p>
                
                <div className="bottom">
                <div className="left-bottom">
                    <img src={gold} alt="" />
                    <div className="desc">
                        <h3>WORLD'S LEADING</h3>
                        <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className="right-bottom">
                    <h3>NO ONE INCLUDES MORE</h3>
                    <p>ALL-INCLUSIVE COMPANYFOR 20 YEARS IN-A-ROW</p>
                    <button>VIEW PACKAGES</button>
                </div>
                </div>
            </div>
            <div className="content-right">
                <div className="top-right">
                <h2> GET AN ADDITIONAL 7% OFF</h2>
                <p>12 HOURS LEFT!</p>
                <span>VIEW ALL CURRENT OFFERS</span>
                </div>
                <div className="bottom-right">
                    <label >Destination</label>
                    <select id="destination">
                        <option value="Grande Antigua">Grande Antigua</option>
                        <option value="Maldives">Maldives</option>
                        <option value="BoraBora">BoraBora</option>
                    </select>
                    <div className="check">
                            <div className="check-in">
                                <label>Check-In</label>
                                <input type="date" className="date-in" />
                            </div>
                            <div className="check-out">
                                <label>Check-Out</label>
                                <input type="date" className="date-out" />
                            </div>
                    </div>
                    <button>Rates & Availabilities</button>
                </div>
            </div>
        </div>
    </div>
  )
}
=======
import React from 'react'
import './DestinationsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbean's Best Beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/"/>
                    <img src={BoraBora2} alt="/"/>
                    <img src={Maldives} alt="/"/>
                    <img src={Maldives2} alt="/"/>
                    <img src={KeyWest} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
>>>>>>> f24ba6c (fixing some bugs)
