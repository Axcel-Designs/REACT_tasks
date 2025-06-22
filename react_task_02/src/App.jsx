import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OurProject from "./pages/OurProject";
import Home from "./pages/Home";
import PhotoGallery from "./pages/PhotoGallery";
import Footer from "./components/footer/Footer";
import "./index.css";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourProjects" element={<OurProject />} />
        <Route path="/photoGallery" element={<PhotoGallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
