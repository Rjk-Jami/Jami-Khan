import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import {Circle2} from 'react-preloaders';
import About from './components/About/About';
import  loader  from "./assets/Double-Ring.svg";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className=' mx-auto'>
      {loading ? 
      (
       
  <div className="flex items-center justify-center h-screen">
    <img src={loader} alt="" />
  </div>


      )
       : (
        <>
      
          <Navbar />
          
          <div id="home" >
            <Home />
          </div>
          <div id='about'>
            <About></About>
          </div>
          <div id="blog">
            <Blog />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
