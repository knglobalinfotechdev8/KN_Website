import React, { useState, useEffect } from 'react';
import { OurTeamData } from '../Constant';
import { motion } from 'framer-motion';
import { About_US, MD } from '../assets/Data';

const About_us = () => {
  // State to handle screen width
  const [isMobile, setIsMobile] = useState(false);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '99%', padding: '0', boxSizing: 'border-box' }}>
      {/* Full-width image */}
      <div style={{ width: '101%', height: isMobile? '' :'370px', overflow: 'hidden' }}>
        <img
          src={About_US}
          alt="What We Do"
          style={{
            width: '105%', 
            height: 'auto', 
            objectFit: 'cover', 
            maxWidth: 'none',
          }}
          priority
        />
      </div>

      {/* Container for content */}
      <div style={{ padding: window.innerWidth > 540 ? '0 8%' : '0 4%' }}>
  {OurTeamData.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection:
          window.innerWidth > 540
            ? i % 2 === 0
              ? 'row'
              : 'row-reverse'
            : 'column',
        alignItems: 'center',
        marginBottom: '2rem',
        justifyContent: 'center',
        textAlign: window.innerWidth > 540 ? 'left' : 'center',
        flexWrap: 'wrap',
      }}
    >
      {/* Image */}
      <div
        style={{
          flex: 'none',
          marginBottom: window.innerWidth > 540 ? '0' : '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: window.innerWidth < 760 ? '150px' : 'auto',
          height: window.innerWidth < 760 ? '150px' : 'auto',
        }}
      >
        <img
          src={MD}
          alt=""
          style={{
            width: '100%',
            maxWidth: window.innerWidth < 760 ? '150px' : 'none',
            height: window.innerWidth < 760 ? '150px' : 'auto',
          }}
        />
      </div>

      {/* Text Content */}
      <div
        style={{
          flex: 1,
          padding: '1rem',
          fontSize: window.innerWidth < 760 ? '14px' : '16px',
          lineHeight: '1.5',
        }}
      >
        <h2
          style={{
            fontSize: window.innerWidth < 760 ? '20px' : '34px',
            marginBottom: '1rem',
            color: '#FF8400',
            fontFamily: 'Philosopher, sans-serif'
          }}
        >
          {item.profession}
        </h2>
        <h2
          style={{
            fontSize: window.innerWidth < 760 ? '20px' : '34px',
            marginBottom: '1rem',
            color: '#FF8400',
            fontFamily: 'Philosopher, sans-serif'
          }}
        >
          {item.name}
        </h2>
        <p style={{ textAlign: 'justify' }}>{item.content}</p>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
};

export default About_us;
