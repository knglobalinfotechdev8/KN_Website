import React, { useEffect, useRef, useState } from 'react';
import { serviceslist } from '../Constant';
import { motion } from 'framer-motion';
import { what_we_do } from '../assets/Data';

const Product = () => {
  const [inView, setInView] = useState(false); // State to track visibility
  const observer = useRef(null); // Ref to store the IntersectionObserver instance

  // Triggered when the element enters the viewport
  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true); // Set to true when the item enters the viewport
      }
    });
  };

  // Setup the observer when the component mounts
  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver, {
      threshold: 0.2, // Trigger when 20% of the element is visible
    });

    // Attach observer to each item
    const elements = document.querySelectorAll('.service-item');
    elements.forEach((element) => {
      observer.current.observe(element);
    });

    // Cleanup observer on unmount
    return () => {
      elements.forEach((element) => {
        observer.current.unobserve(element);
      });
    };
  }, []);

  const handleButtonClick = (link) => {
    window.location.href = link;  // Or use React Router's navigate method
  };

  return (
    <div className="container mx-auto px-4">
      {/* Full viewport width image */}
      <div className="service-image-container">
        <img
          src={what_we_do}
          className="service-image"
          alt="What We Do"
        />
      </div>

      {/* Content */}
      <div className="service-content">
        {serviceslist.map((index, i) => (
          <motion.div
            key={i}
            className="service-item"
            initial={{ opacity: 0, y: 100 }} // Initial state: invisible and slightly down
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
            transition={{ delay: i * 0.3, duration: 0.8, ease: 'easeInOut' }}
            whileInView={{ opacity: 1, y: 0 }} // Ensure the element stays visible when in view
            viewport={{ once: true }} // Trigger animation only once
          >
            <div className="service-item">
              {/* Image and Content Wrapper */}
              <div
                className={`service-wrapper ${
                  i % 2 === 0 ? 'service-wrapper-left' : 'service-wrapper-right'
                }`}
              >
                {/* Text Section */}
                <div className="service-text">
                  <h2
                    style={{ fontFamily: 'Philosopher, sans-serif' }}
                    className="service-title"
                  >
                    {index.title}
                  </h2>
                  <p
                    className="service-description"
                    style={{ textAlign: 'justify' }}
                  >
                    {index.para}
                  </p>
                  {/* Render button only if it's not the last item */}
                  {i !== serviceslist.length - 1 && (
                    <button
                      onClick={() => handleButtonClick(index.link)}
                      className="service-button"
                    >
                      Learn More
                    </button>
                  )}
                </div>

                {/* Image Section */}
                <div className="service-image-wrapper">
                  <img
                    src={index.img}
                    alt={index.title}
                    className="service-image-item"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile-specific CSS */}
      <style jsx>{`
        .service-image-container {
          width: 100%; /* Ensure it takes up the full width of the container */
          overflow: hidden; /* Hide any overflowed content */
          display: flex; /* Ensure flex for proper alignment */
          justify-content: center; /* Center the image inside the container */
        }

        .service-image {
          width: 100%; /* Make sure the image fills its container */
          height: auto; /* Maintain aspect ratio */
          max-width: 100%; /* Prevent the image from growing too large */
          object-fit: cover; /* Ensure the image covers the container */
        }

        .service-content {
          padding: 0 8%;
        }

        .service-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: white;
          padding: 1rem 4rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
          transition: all 0.5s;
        }

        .service-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .service-text {
          text-align: center;
          width: 50%;
          padding-right: 2rem;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #FF8400;
        }

        .service-description {
          margin-top: 1rem;
          color: #000;
        }

        .service-button {
          margin-top: 1rem;
          padding: 0.5rem 1.5rem;
          background-color: #007BFF;
          color: white;
          border-radius: 0.375rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .service-button:hover {
          background-color: #FF8400;
        }

        .service-image-wrapper {
          width: 50%;
          display: flex;
          justify-content: center;
          padding-top: 2rem;
        }

        .service-image-item {
          width: 80%;
          border-radius: 0.5rem;
        }

        /* Mobile-specific Styles */
        @media (max-width: 768px) {
          .service-content {
            padding: 0 16px; /* Adjust container padding for smaller screens */
          }

          .service-item {
            padding: 1rem 1rem; /* Reduce padding on mobile */
          }

          .service-wrapper {
            flex-direction: column; /* Stack elements vertically on smaller screens */
            align-items: center;
            text-align: center;
          }

          .service-text {
            width: 100%; /* Take up full width on mobile */
            padding: 0; /* Remove extra padding */
          }

          .service-image-wrapper {
            width: 100%; /* Image takes full width on mobile */
            padding-top: 1rem;
          }

          .service-image-item {
            width: 100%; /* Make images responsive on smaller screens */
            border-radius: 0.5rem;
          }

          .service-title {
            font-size: 1.2rem; /* Smaller font size for titles */
          }

          .service-description {
            font-size: 0.875rem; /* Adjust paragraph text for mobile */
          }

          .service-button {
            padding: 0.5rem 1rem;
            font-size: 0.875rem; /* Adjust button size for mobile screens */
          }
        }

        /* Desktop-specific Styles */
        @media (min-width: 769px) {
          .service-wrapper-left {
            flex-direction: row-reverse; /* Odd-indexed items (left side) */
          }
          
          .service-wrapper-right {
            flex-direction: row; /* Even-indexed items (right side) */
          }

          .service-text {
            width: 50%;
          }

          .service-image-wrapper {
            width: 50%;
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Product;
