import React from "react";

import "./index.css";      
import { StarBackground } from "./components/StarBackground/StarBackground";
import NebulaBackground from "./components/NebulaBackground/NebulaBackground";
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import {Contact} from "./components/Contact/Contact";
import { GhostGame } from "./components/GhostGame/GhostGame";

export default function App() {
  return (
    <>
      <NebulaBackground/>
      <StarBackground/>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <GhostGame/>
      <Contact/>
    </>
  );
}
