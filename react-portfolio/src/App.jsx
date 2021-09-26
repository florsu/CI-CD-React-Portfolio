import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from  "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} sestMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Header/>
        <Home/>
        <Portfolio/>
        <Works/>
        <Contact/>

      </div>
      
    </div>
  );
}

export default App;
