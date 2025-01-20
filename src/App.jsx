import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop component
import Navbar from "./Common/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Client from "./Home/Client";
import Gas from "./Services/Gas";
import Crm from "./Services/Crm";
import Tran from "./Services/Tran";
import Job_management from "./Services/Job_management";
import Work_management from "./Services/Work_management";
import POS from "./Services/POS";
import Customized_sys from "./Services/Customized_sys";
import Footer from "./Common/Footer";
import WhatsAppButton from "./Whatsapp";
import About_us from "./Pages/About_us";
import "./index.css";
import './App.css';

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setShowScrollToTop(scrollTop > windowHeight * 0.1); // Show button after 10% scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/gas_management" element={<Gas />} />
          <Route path="/product/tran" element={<Tran />} />
          <Route path="/product/crm" element={<Crm />} />
          <Route path="/product/pos" element={<POS />} />
          <Route path="/product/customized_system" element={<Customized_sys />} />
          <Route path="/product/job_managemnt" element={<Job_management />} />
          <Route path="/product/work_managemnt" element={<Work_management />} />
        </Routes>
      </div>
      <WhatsAppButton />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#FF8400",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: "10px 15px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </Router>
  );
};

export default App;
