import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import MyPortfolio from "./Components/MyPortfolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <MyPortfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default App;
