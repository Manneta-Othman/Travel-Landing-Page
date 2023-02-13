import React from 'react'
import "./travel.scss";
import keywest from '../../assets/keywest.jpg';
import maldives2 from '../../assets/maldives2.jpg';
import maldives from '../../assets/maldives.jpg';
import borabora from '../../assets/borabora.jpg';
import borabora2 from '../../assets/borabora2.jpg';
import maldives3 from '../../assets/maldives3.jpg';


export default function Travel() {
  return (
    <div id='travel'>
        <div className="container">
            <div className="img">
                <label>Key West</label>
                <img src={keywest} alt="" />
            </div>
            <div className="img">
                <label>Emerald Bay</label>
                <img src={borabora} alt="" />
            </div>
            <div className="img">
                <label>Bora Bora</label>
                <img src={borabora2} alt="" />
            </div>
            <div className="img">
                <label>Barbados</label>
                <img src={maldives} alt="" />
            </div>
            <div className="img">
                <label>Maldives</label>
                <img src={maldives2} alt="" />
            </div>
            <div className="img">
                <label>Grenada</label>
                <img src={maldives3} alt="" />
            </div>
        </div>
    </div>
  )
}
