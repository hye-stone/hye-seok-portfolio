import logo from './logo.svg';
import './App.css';
import {useContext} from "react";
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro"
import ProductList from "./components/productList/ProductList"
import Toggle from "./components/toggle/Toggle"
import { ThemeContext } from './context';
const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return <div
    style={{
      background: darkMode ? "black" : "#efefef",
      color: darkMode && "white",
    }}>
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact/>
  </div>;
};

export default App;
