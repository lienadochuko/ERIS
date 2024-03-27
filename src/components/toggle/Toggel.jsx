import React from 'react'
import "./toggle.css"
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.png"
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggel = () => {
  const theme = useContext(ThemeContext);
  
  const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
  }
  return (
      <div className="t" 
    style={{backgroundColor:theme.state.darkMode ? "#fff" : "#222",
     border:theme.state.darkMode ? "2px solid #fff" : "2px solid #222" ,
     alignItems:'center', justifyContent:'center', display:'flex',
     borderRadius:theme.state.darkMode ? "50px" : "50px"}}
    >
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon1" />
        <div className="t-button" onClick={handleClick} 
        style={{left: theme.state.darkMode ? 0 : 25, 
        backgroundColor:theme.state.darkMode ? "#222" : "#34B5C9"}}
         ></div>
    </div>
  )
}

export default Toggel