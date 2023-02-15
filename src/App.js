import './App.scss';
import Destinations from './components/destinations/Destinations';
import Footer from './components/destinations/footer/Footer';
import Home from './components/home/Home';
import Travel from './components/travel/Travel';
import Views from './components/views/Views';

function App() {
  return (
    <div className="App">
        <Home />
        <Destinations />
        <Travel />
        <Views />
        <Footer />
      </div>
  );
}

export default App;



