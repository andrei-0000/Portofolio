import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from "./components/components";
import { SectionWrapper } from "./hoc";
import { Stars } from "@react-three/drei";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="">
          <Navbar />
          <Hero />
        </div>
        <SectionWrapper Component={About} idName="about" />
        <SectionWrapper Component={Experience} idName="work" />
        <SectionWrapper Component={Tech} idName="tech" />
        <SectionWrapper Component={Works} idName="works" />
        <div className="relative z-0">
          <SectionWrapper Component={Contact} idName="contact" />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
