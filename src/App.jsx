import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggel from "./components/toggle/Toggel";
import { ThemeContext } from "./context";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
  <div style={{backgroundColor:darkMode ? "#222" : "white", 
  color:darkMode && "white" }} >
    <Toggel/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>
  )
};

export default App;