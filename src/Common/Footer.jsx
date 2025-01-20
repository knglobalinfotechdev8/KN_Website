import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentDayIndex = new Date().getDay(); // Get current day index (0 for Sunday, 1 for Monday, etc.)
  const currentHour = new Date().getHours(); // Get current hour

  // Detailed weekly hours
  const weekDays = [
    { name: "Sunday", hours: "Closed", isOpen: false },
    { name: "Monday", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { name: "Tuesday", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { name: "Wednesday", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { name: "Thursday", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { name: "Friday", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { name: "Saturday", hours: "9:00 AM - 4:00 PM", isOpen: true },
  ];

  const today = weekDays[currentDayIndex];
  const isOpenToday =
  today.isOpen && 
  (currentDayIndex !== 6 || currentHour < 16) && // Saturday logic
  (currentDayIndex === 0 || currentHour < 18); // Monday to Friday after 6 PM logic
 // Check if today is open
  const openingStatus = isOpenToday ? "Open Now" : "Closed";

  return (
    <footer
      style={{
        backgroundColor: "#1F2937",
        color: "white",
        padding: "40px 0",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Footer Content */}
        <div
          style={{
            display: "grid",
            gap: "32px",
            width: "100%",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {/* Logo and Description Section */}
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#FF8400",fontFamily: 'Philosopher, sans-serif' }}>
              KN GLOBAL INFOTECH
            </h2>
            <p style={{ marginTop: "10px", color: "#D1D5DB", textAlign: 'justify' }}>
              Innovative tech solutions for the future. We provide cutting-edge technologies for businesses to grow and succeed in the digital world.
            </p>
          </div>

          {/* Operating Hours Section */}
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "18px", color: "#E5E7EB" }}>
              Operating Hours
            </h3>
            <ul
              style={{
                marginTop: "16px",
                listStyleType: "none",
                padding: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {weekDays.map((day, index) => (
                <li
                  key={index}
                  style={{
                    color:
                      index === currentDayIndex
                        ? isOpenToday
                          ? "#FF8400"
                          : "red"
                        : "#D1D5DB",
                    fontWeight: index === currentDayIndex ? "bold" : "normal",
                  }}
                >
                  {index === currentDayIndex
                    ? `Today: ${day.isOpen ? day.hours : "Closed"} (${openingStatus})`
                    : `${day.name}: ${day.hours}`}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "18px", color: "#E5E7EB" }}>
              Contact
            </h3>
            <ul
              style={{
                marginTop: "16px",
                listStyleType: "none",
                padding: "0",
                color: "#D1D5DB",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <li>
                49/1, Dr Subbarayan Rd,
                <br /> I Agraharam, Salem,
                <br /> Tamil Nadu - 636001, India.
              </li>
              <li>support@knglobalinfotech.com</li>
              <li>+91 9500706954</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "18px", color: "#E5E7EB" }}>
              Follow Us
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                marginTop: "24px",
              }}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
                style={{
                  fontSize: "24px",
                  color: "#D1D5DB",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FF8400")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                <FaFacebook />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "24px",
                  color: "#D1D5DB",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FF8400")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                <FaTwitter />
              </a> */}
              <a
                href="https://instagram.com"
                target="_blank"
                title="Instagram"
                rel="noopener noreferrer"
                style={{
                  fontSize: "24px",
                  color: "#D1D5DB",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FF8400")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                title="LinkedIn"
                rel="noopener noreferrer"
                style={{
                  fontSize: "24px",
                  color: "#D1D5DB",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FF8400")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div
          style={{
            marginTop: "32px",
            textAlign: "center",
            color: "#6B7280",
          }}
        >
          <p>&copy; {new Date().getFullYear()} KN GLOBAL INFOTECH. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
