import './App.css';
import Hero from './Hero';
import HeroTwo from './HeroTwo';
import {BrowserRouter as Router, Route, Link, Routes}
from 'react-router-dom';
import NFTs from "./NFTs"
import Footer from './Footer';


function App() {
  return (
    <Router>
    <div className="app">
    <Routes>
          <Route path="/NFTs" element={<><NFTs/> <Footer/></>} />
          <Route exact path="/" element={<><Hero/><HeroTwo/></>}/>
          {/* <Route path="/"  element={<Home />} /> */}
        </Routes>
        </div>
    </Router>
  );
}

export default App;
