<<<<<<< HEAD
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
=======
import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
>>>>>>> f24ba6c (fixing some bugs)
  );
}

export default App;
<<<<<<< HEAD



=======
>>>>>>> f24ba6c (fixing some bugs)
