import React from 'react';
import What_we_do from '../Home/What_we_do';
import LottieAnimation from '../AnimationIcons';
import Client from '../Home/Client';
import { motion } from "framer-motion";
import { WhoWeImg } from '../assets/Data';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  // Handler for the button click
  const handleClick = () => {
    navigate('/contact'); // Navigates to /contact
  };

  return (
    <>
      {/* Intro Section */}
      <motion.section
        style={{ padding: '3% 6% 4% 6%' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="intro_page" style={{ display: 'flex', gap: '1%', alignItems: 'center', flexDirection: 'row', textAlign: 'center' }}>
          <motion.div
            style={{
              padding: '2%',
              width: '100%', // Full width on smaller screens
              maxWidth: '600px', // Constrain width for better readability
              margin: '0 auto', // Center align
              textAlign: 'center', // Default center alignment for smaller screens
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3
              style={{
                fontSize: '22px', // Smaller font for smaller screens
                marginBottom: '1rem',
              }}
            >
              Welcome to KN Global Infotech
            </h3>
            <h1
              style={{
                color: '#FF8400',
                fontSize: '36px', // Reduce font size for smaller screens
                fontFamily: 'Philosopher, sans-serif',
                marginBottom: '1.5rem',
              }}
            >
              Your Vision Our Creation
            </h1>
            <p
              style={{
                fontSize: '18px', // Smaller font size for better readability
                lineHeight: '1.5',
                textAlign: 'justify',
              }}
            >
              Discover the next technologies, solutions, and services that are powering
              enterprises into the future and helping businesses stay ahead.
            </p>

            {/* Animated Button */}
            <motion.button
              style={{
                padding: '10px 20px',
                fontSize: '16px', // Adjust font size for smaller screens
                backgroundColor: '#FF8400',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '2rem',
                width: '100%', // Make the button full-width on smaller screens
                maxWidth: '200px', // Limit max width
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              onClick={handleClick}
            >
              Explore More
            </motion.button>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LottieAnimation animationData={WhoWeImg} />
          </motion.div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <What_we_do />
      </motion.section>

      {/* Our Work Culture Section */}
      <motion.section
        style={{
          textAlign: 'center',
          padding: '2% 8%',
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 style={{ color: '#FF8400', fontSize: '35px', fontFamily: 'Philosopher, sans-serif' }}>Our Work Culture</h1>
        </div>
        <div>
          <p
            style={{
              fontSize: '20px',
              textAlign: 'justify',
            }}
          >
            At TZ, we follow a meticulous software development process to deliver
            innovative and efficient billing solutions. Our workflow begins with
            in-depth research and analysis to understand your business requirements,
            ensuring the creation of a seamless and user-friendly UI/UX. Following
            this, our expert team develops a secure, scalable, and high-performance
            billing software solution. The product undergoes rigorous QA testing to
            ensure accuracy, reliability, and compliance before delivering a
            top-quality solution tailored to your business needs.
          </p>
        </div>
      </motion.section>

      {/* Client Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Client />
      </motion.section>

      {/* Our Office Section */}
      <motion.div
        style={{
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
          margin: "2rem auto",
          maxWidth: "1024px",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ color: '#FF8400', fontSize: '35px', textAlign: 'center', fontFamily: 'Philosopher, sans-serif' }}>Our Office</h1>
        <motion.iframe
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          src="https://maps.google.com/maps?width=100%&height=300&hl=en&q=49/1,%20Dr%20Subbarayan%20Rd,%20I%20Agraharam,%20Salem,%20Tamil%20Nadu%20636001,%20India+(KN%20GLOBAL%20INFOTECH)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="400"
          style={{
            border: 0,
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            transform: "scale(1)",
          }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        ></motion.iframe>
      </motion.div>
    </>
  );
};

export default Home;
