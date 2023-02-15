import "./views.scss";
import keywest from '../../assets/keywest.jpg';
import maldives2 from '../../assets/maldives2.jpg';
import maldives from '../../assets/maldives.jpg';
import borabora from '../../assets/borabora.jpg';
import borabora2 from '../../assets/borabora2.jpg';
import maldives3 from '../../assets/maldives3.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default function Views() { 
  return (
<div id='views'>
  <Carousel className="carousel" autoPlay={true} infiniteLoop={true} 
  showArrows={false} showStatus={false} showThumbs={false} showIndicators={false}
  >
        <div>
            <img src={keywest} />
        </div>
        <div>
            <img src={maldives2} />
        </div>
        <div>
            <img src={maldives3} />
        </div>
        <div>
            <img src={maldives} />
        </div>
        <div>
            <img src={borabora} />
        </div>
        <div>
            <img src={borabora2} />
        </div>
    </Carousel>    
</div>

  )
}
