/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/UI/Hero";
import Experiance from "./components/UI/Experiance";
import Portfolio from "./components/UI/Portfolio";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Experiance />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
