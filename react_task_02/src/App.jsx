import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OurProject from "./pages/OurProject";
import Home from "./pages/Home";
import PhotoGallery from "./pages/PhotoGallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<OurProject />} />
        <Route path="/contact" element={<PhotoGallery />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
