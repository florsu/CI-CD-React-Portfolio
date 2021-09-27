import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     
      <div className="sections">
        <Home />
        <Portfolio />
        <Works />
        <Contact />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
