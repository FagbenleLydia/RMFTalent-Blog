import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Blogs from "./pages/Blog";
import JoinRmfTalent from "./pages/JoinRmfTalent";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/services" element={<Services />} />
          <Route path="/home/packages" element={<Packages />} />
          <Route path="/home/case-studies" element={<CaseStudies />} />
          <Route path="/home/about" element={<About />} />
          <Route path="/home/blogs" element={<Blogs />} />
          <Route path="/home/JoinRmf" element={<JoinRmfTalent />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
