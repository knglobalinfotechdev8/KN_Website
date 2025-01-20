import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Our_client } from '../Constant';

const Client = () => {
  const itemSize = 150; // Set the width and height for each item (square)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Memoize the items to avoid unnecessary recalculations
  const items = useMemo(() => {
    // Duplicating the first 3 and last 3 items for seamless continuity
    const duplicatedItems = [
      ...Our_client.slice(-3), // Last 3 items for continuity
      ...Our_client,
      ...Our_client.slice(0, 3), // First 3 items for continuity
    ];
    return duplicatedItems;
  }, [Our_client]);

  // State for the animation effect, optimizing by only updating when necessary
  const [clientWidth, setClientWidth] = useState(0);

  // Dynamically calculate carousel width
  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth;
      setClientWidth(containerWidth);
    };

    // Initialize the client width based on the window size
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = windowWidth < 540

  return (
    <div style={{ overflow: 'hidden', position: 'relative', padding: '2% 8% 3% 8%', background: '#4B5563' }}>
      {/* Main Title */}
      <h1
        style={{
          fontSize: '35px',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '24px',
          color: '#FF8400',
          fontFamily: 'Philosopher, sans-serif'
        }}
      >
        Our Clients
      </h1>

      {/* Client Carousel Section */}
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: `-${itemSize * Our_client.length}px`, // Move to the left by the total width of one set of items
        }}
        transition={{
          x: {
            duration: Our_client.length * 2, // Speed of scrolling
            ease: 'linear',
            repeat: Infinity, // Repeat the animation infinitely
            onUpdate: (progress) => {
              // Reset the animation position once it completes
              if (progress === 1) {
                // Reset animation to the first position smoothly
                progress = 0;
              }
            },
          },
        }}
        style={{
          display: 'flex',
          paddingTop: '8px',
          paddingBottom: '8px',
          alignItems: 'center',
          width: `${items.length * itemSize}px`, // Total width of all items
        }}
        aria-live="polite" // Ensures that screen readers announce content change
      >
        {items.map((client, i) => (
          <motion.div
            key={i}
            style={{
              display: 'flex',
              width: '150px',
              height: '150px',
              marginLeft: '20px', // Increased gap between items
              marginRight: '20px', // Increased gap between items
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            whileHover={{ scale: 1.1 }}
            aria-label={`Client ${i}`} // Accessible label for screen readers
          >
            <img
              src={client.img} // Ensure that the client image path is used
              alt={`Client logo or image for ${i}`} // Descriptive alt text for SEO
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.1)',
                padding: '8px',
              }}
              loading="lazy" // Lazy load images for performance
              width={itemSize} // Ensure the correct size for responsive design
              height={itemSize} // Ensure the correct size for responsive design
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Client;
