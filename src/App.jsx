import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import  loader  from "./assets/Double-Ring.svg";
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    let x=0
  
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
          <div id='about' className='pt-20'>
            <About></About>
          </div>
          <div id="skill" className='lg:py-20'>
            <Skill />
          </div>
          <div id="project" className='py-20'>
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>

          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default App;
