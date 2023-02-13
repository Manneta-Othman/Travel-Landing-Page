import './App.scss';
import Destinations from './components/destinations/Destinations';
import Home from './components/home/Home';
import Travel from './components/travel/Travel';

function App() {
  return (
    <div className="App">
        <Home />
        <Destinations />
        <Travel />
      </div>
  );
}

export default App;



