import React,{ useContext, useRef } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggel from "./components/toggle/Toggel";
import { ThemeContext } from "./context";
import './app.css';

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

  const scollToRef = useRef();
  const scollToRef1 = useRef();
  const scollToRef2 = useRef();
  const scollToRef3 = useRef();

  

  return (
  <div style={{backgroundColor:darkMode ? "#222" : "white", 
  color:darkMode && "white" }} className="homie">
     <div className='tmenu' 
    //  style={{color:darkMode ? "black" : "white" , 
    //  background:darkMode ? "rgba(255, 255, 255, 0.447)" : "rgba(0, 0, 0, 0.486"}}
     >
      <div className="tog" 
      style={{
      border:theme.state.darkMode ? "2px solid #fff" : "2px solid #222" , 
      borderRadius:theme.state.darkMode ? "50px" : "50px"}}><Toggel/></div>
      <div className='p2' onClick={() => scollToRef.current.scrollIntoView()} >Home</div>
      <div className='p1' onClick={() => scollToRef1.current.scrollIntoView()}>About</div>
      <div className='p1' onClick={() => scollToRef2.current.scrollIntoView()}>Product</div>
      <div className='p3' onClick={() => scollToRef3.current.scrollIntoView()}>Contact</div>
      </div>
    <section ref={scollToRef}>
    <Intro/>
    </section>
    <section ref={scollToRef1}>
    <About/>
    </section>
    <section ref={scollToRef2}>
    <ProductList/>
    </section>
    <section ref={scollToRef3}>
    <Contact/>
    </section>
  </div>
  )
};

export default App;