import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TRAN_img } from '../assets/Data';
import { Tran_Details } from '../Constant';

const Tran = () => {
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
      <div style={{ width: '101%', height: isMobile ? '':'350px', overflow: 'hidden' }}>
        <img
          src={TRAN_img}
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
      <div style={{ padding: isMobile ? '0 5% 0 0' : '0 8%' }}>
        {Tran_Details.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : i % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              textAlign: isMobile ? 'center' : 'left',
              width: '99%', // Ensure full width on mobile
            }}
          >
            {/* Text Content */}
            <div
              style={{
                flex: 1,
                padding: '1rem',
                fontSize: isMobile ? '14px' : '16px', // Adjust font size for mobile
                lineHeight: '1.5',
                maxWidth: '99%', // Ensure text container does not exceed its space
              }}
            >
              <h2
                style={{
                  fontSize: isMobile ? '20px' : '24px',
                  marginBottom: '1rem',
                  color: '#FF8400',
                  fontFamily: 'Philosopher, sans-serif'
                }}
              >
                {item.title}
              </h2>
              <p style={{textAlign: 'justify' }}>{item.para}</p>
            </div>

            {/* Image or other content */}
            <div
              style={{
                flex: 1,
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '99%', // Ensuring image is full width on small screens
                maxWidth: '99%', // Ensure image container respects screen size
              }}
            >
              {/* You can add an image or other content here */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tran;



