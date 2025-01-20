import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { Cont_us } from '../assets/Data';

const inputStyle = {
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #6B7280',
    backgroundColor: 'transparent',
    color: 'black',
    outline: 'none',
    transition: 'border-color 0.3s',
    width: '94%',
};

const inputFocusStyle = {
    borderColor: '#F4A300',
};

const buttonStyle = {
    padding: '0.5rem 1.5rem',
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
};

const buttonHoverStyle = {
    backgroundColor: '#0056b3',
};

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [isMobile, setIsMobile] = useState(false);  // State to track screen size

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 576);  // Adjust width threshold to 576px for better responsiveness
        };

        window.addEventListener('resize', handleResize);
        handleResize();  // Check on component mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        emailjs.sendForm('service_pi9lfhp', 'template_v6qcekd', form.current, 'W4tyDen6tWcjjslF-')
            .then((result) => {
                toast.success('Message sent successfully!');
                form.current.reset();
                setFeedbackMessage('Message sent successfully!');
                console.log(result.text);
            }, (error) => {
                toast.error('Failed to send message: ' + error.text);
                setFeedbackMessage('Failed to send message. Please try again later.');
                console.log(error.text);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    

    return (
        <section style={{ width: '99%', padding: '0', boxSizing: 'border-box' }}>
            {/* Full-width image */}
            <div style={{ width: '101%', overflow: 'hidden' }}>
                <img
                    src={Cont_us}
                    alt="What We Do"
                    style={{
                        width: '100%',
                        height: isMobile ? '150px' : '350px',  // Adjust height for mobile view
                    }}
                    priority
                />
            </div>

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: isMobile ? '1rem' : '2rem',  // Adjust padding for mobile
                    borderRadius: '0.5rem',
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                    maxWidth: isMobile ? '85%' : '28rem',  // Adjust maxWidth further for mobile
                    width: '100%',
                    margin: 'auto',
                    transition: 'all 0.3s',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#F4A300',
                        marginBottom: '1.5rem',
                    }}
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        fontSize: '1.125rem',
                        textAlign: 'center',
                        color: '#F4A300',
                        marginBottom: '2rem',
                    }}
                >
                    We would love to hear from you! Fill out the form below.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        style={inputStyle}
                        required
                        onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                        onBlur={(e) => e.target.style.borderColor = '#6B7280'}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        style={inputStyle}
                        required
                        onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                        onBlur={(e) => e.target.style.borderColor = '#6B7280'}
                    />
                    <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        style={inputStyle}
                        required
                        onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                        onBlur={(e) => e.target.style.borderColor = '#6B7280'}
                    ></textarea>
                    <button
                        type="submit"
                        style={isLoading ? { ...buttonStyle, opacity: 0.5, cursor: 'not-allowed' } : buttonStyle}
                        disabled={isLoading}
                        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                    >
                        <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                    </button>
                    {feedbackMessage && (
                        <p style={{ marginTop: '1rem', textAlign: 'center', color: 'green' }}>{feedbackMessage}</p>
                    )}
                </motion.div>
                <ToastContainer />
            </motion.form>
        </section>
    );
};

export default Contact;
