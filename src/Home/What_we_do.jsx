import React, { useState, useEffect } from 'react'
import { what_we_do_list } from '../Constant'
import { motion } from 'framer-motion'

const What_we_do = () => {
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

  // Determine the number of columns based on window width
  const isMediumScreen = windowWidth >= 768
  const isSmallScreen = windowWidth < 540

  return (
    <div style={{ padding:'2% 8%', background: '#4B5563', paddingBottom: isSmallScreen ? '30%' : '4%', }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#FF8400', fontSize: '35px', fontFamily: 'Philosopher, sans-serif' }}>What We Do</h1>
        <p style={{ color: 'white', fontSize: '20px', textAlign:'justify'}}>
          Providing state-of-the-art user experiences by delivering simple,
          effective, and intelligent IT solutions for your growing business.
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMediumScreen
            ? 'repeat(3, 1fr)' // Three columns for screens >= 768px
            : '1fr', // Single column for screens < 768px
          gap: '2%', // Spacing between grid items
        }}
      >
        {what_we_do_list.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }} // Initial state of opacity and position
            animate={{ opacity: 1, y: 0 }} // Animated state (fully visible and positioned)
            transition={{ duration: 0.6, delay: i * 0.2 }} // Add a delay for each item based on its index
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow:
                'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
              padding: '1.5%',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              transition: 'transform 0.1s ease, box-shadow 0.1s ease', // Fast transitions for transform and box-shadow
            }}
            whileHover={{
              scale: 1.05, // Slight scale up effect
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Subtle box-shadow for hover
              cursor: 'pointer', // Change cursor to pointer
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img
                src={item.img}
                alt=""
                style={{ width: '40px', height: '40px' }}
              />
              <p style={{ color: '#FF8400', fontFamily: 'Philosopher, sans-serif', fontSize: '20px', fontWeight: '900' }}>
                {item.title}
              </p>
            </div>
            <div>
              <p>{item.para}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default What_we_do
