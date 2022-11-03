import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { Services } from "../Pages/Services";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/servicios" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
