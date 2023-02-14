import './App.scss';
import Destinations from './components/destinations/Destinations';
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
      </div>
  );
}

export default App;



