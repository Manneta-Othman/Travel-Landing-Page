import './App.scss';
import Navbar from './components/navbar/Navbar';
import video from './assets/maldivesVideo.mp4';

function App() {
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop className="background">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;



