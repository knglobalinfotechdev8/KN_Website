import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets/Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome X icon

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Update `isMobile` based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const NavLinks = ["/","/About", "/Product", "/contact"];

  return (
    <nav
      style={{
        color: "white",
        padding: "10px 40px",
        display: "flex",
        fontFamily: 'Philosopher, sans-serif',
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s",
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexDirection: isMobile ? "row" : "row", // Ensure logo and text are in one row on mobile
        }}
      >
        <Link to="/">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={Logo}
              alt="Company Logo"
              style={{
                width: "215px",
                height: "18px",
              }}
            />
          </div>
        </Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      {isMobile && (
        <div
          className="mobile-menu-icon"
          style={{
            display: "block",
            cursor: "pointer",
            zIndex: 1001,
          }}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                fontSize: "30px",
                color: "red", // Red color for the close icon
              }}
            />
          ) : (
            <div>
              <div
                style={{
                  width: "30px",
                  height: "3px",
                  backgroundColor: "#000",
                  margin: "6px 0",
                }}
              />
              <div
                style={{
                  width: "30px",
                  height: "3px",
                  backgroundColor: "#000",
                  margin: "6px 0",
                }}
              />
              <div
                style={{
                  width: "30px",
                  height: "3px",
                  backgroundColor: "#000",
                  margin: "6px 0",
                }}
              />
            </div>
          )}
        </div>
      )}

      {/* Navbar links for desktop */}
      {!isMobile && (
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            display: "flex",
            gap: "20px",
            margin: "0",
            alignItems: "center",
          }}
        >
          {NavLinks.map((path) => (
            <li key={path} style={{ textAlign: "center" }}>
              <Link
                to={path}
                style={{
                  color: location.pathname === path ? "#FF8400" : "#000",
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "bold",
                  transition: "color 0.3s, transform 0.3s",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FF8400")}
                onMouseOut={(e) =>
                  (e.target.style.color =
                    location.pathname === path ? "#FF8400" : "#000")
                }
                onClick={(e) => {
                  e.target.style.transform = "scale(0.98)";
                  setTimeout(() => {
                    e.target.style.transform = "scale(1)";
                  }, 150);
                }}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Mobile menu with animation */}
      {isMobileMenuOpen && isMobile && (
        <ul
          ref={mobileMenuRef}
          style={{
            position: "absolute",
            top: "35.5px",
            left: 0,
            width: "100%",
            background:'#1F2937',
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "10px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "slide-in 0.5s ease-out",
          }}
        >
          {NavLinks.map((path) => (
            <li key={path} style={{ marginBottom: "10px", listStyle:'none' }}>
              <Link
                to={path}
                style={{
                  color: location.pathname === path ? "#FF8400" : "#fff",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FF8400")}
                onMouseOut={(e) =>
                  (e.target.style.color =
                    location.pathname === path ? "#FF8400" : "#fff")
                }
                onClick={() => closeMobileMenu()} // Close the menu on link click
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
