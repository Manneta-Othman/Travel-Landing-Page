import './destinations.scss';
import maldives3 from '../../assets/maldives3.jpg';
import maldives2 from '../../assets/maldives2.jpg';
import maldives from '../../assets/maldives.jpg';
import borabora from '../../assets/borabora.jpg';
import borabora2 from '../../assets/borabora2.jpg';


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
    </div>
  )
}
