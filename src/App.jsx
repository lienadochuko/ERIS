import React,{ useContext, useRef, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggel from "./components/toggle/Toggel";
import { ThemeContext } from "./context";
import './components/toggle/toggle.css';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  /*const scrollRef = document.getElementById('julie'); 
    useEffect(() => {
        scrollRef.julie?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        })
    }, [])*/

  const julie = document.getElementById('julie'); 
  const dave = (e) => { 
    e.preventDefault();
    julie.scrollIntoView();
    julie.scrollIntoView(true);
    julie.scrollIntoView({block: "start"});
    julie.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  const steve = document.getElementById('steve');
  const david = (e) => { 
    e.preventDefault();
    steve.scrollIntoView(true);
  }

  const stephen = document.getElementById('stephen');
  const atony = (e) => { 
    e.preventDefault();
    stephen.scrollIntoView(true);
  }

  const juliana = document.getElementById('juliana');
  const bian = (e) => { 
    e.preventDefault();
    juliana.scrollIntoView(true);
  }

  return (
  <div style={{backgroundColor:darkMode ? "#222" : "white", 
  color:darkMode && "white" }} >
     <div className='tmenu' 
     style={{color:darkMode ? "black" : "white" , 
     background:darkMode ? "rgba(255, 255, 255, 0.447)" : "rgba(0, 0, 0, 0.486"}}>
      <div className='p2' onClick={dave}>Home</div>
      <div className='p1' onClick={david}>About</div>
      <div className='p1' onClick={atony}>Product</div>
      <div className='p3' onClick={bian}>Contact</div>
      <Toggel/>
      </div>
    <section id='julie'>
    <Intro/>
    </section>
    <section id='steve'>
    <About/>
    </section>
    <section id='stephen'>
    <ProductList/>
    </section>
    <section id='juliana'>
    <Contact/>
    </section>
  </div>
  )
};

export default App;