import React from 'react';
import { motion } from 'framer-motion';
import Whastappicon from '../src/Assets/Lottifile/Whatsapp-Ani.json'
import LottieAnimation from './AnimationIcons';

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ y: 0 }} // Initial vertical position
      animate={{ y: [0, -20, 1] }} // Bounce effect
      transition={{
        duration: 1.5,
        repeat: Infinity, // Repeat infinitely
        repeatType: 'loop', // Loop the animation
        ease: 'easeInOut' // Easing function
      }}
      style={{
        position: "fixed",
        right: "25px",
        bottom: "40px",
        zIndex: 10,
        display: "flex",
        alignItems: "center", // This will align the icon properly, like Tailwind's flex class
        justifyContent: "center", // Center the content horizontally
      }}
    >
      <a href="https://wa.me/919597886954" target="_blank" rel="noopener noreferrer">
        <LottieAnimation animationData={Whastappicon} ClassStyle={{ width: '70px' }} />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
