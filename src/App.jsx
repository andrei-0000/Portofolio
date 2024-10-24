import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
} from "./components/components";
import { SectionWrapper } from "./hoc";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <SectionWrapper Component={About} idName="about" />
        <SectionWrapper Component={Experience} idName="experience" />
        <Tech />
        <Works />
        <Feedbacks />
      </div>
    </BrowserRouter>
  );
};

export default App;
