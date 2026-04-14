import React from 'react';
import { Code2, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="about">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge">
            <span className="badge-dot"></span>
            Available for new opportunities
          </div>
          
          <h1 className="hero-title">
            Hey, I'm <span className="text-accent">Shivaansh</span>.<br />
            I build digital experiences.
          </h1>
          
          <p className="hero-description">
            I'm a passionate software developer specializing in building exceptional websites, applications, and solving complex algorithmic problems. Welcome to my digital space.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>

          <div className="social-links">
            <p className="social-links-text">Find me on:</p>
            <div className="social-icons">
              <a href="https://github.com/shivaansh0610-LUFFY" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shivaansh-pandey-7099b7305/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://leetcode.com/u/NGqjeVnlE3/" target="_blank" rel="noopener noreferrer" className="social-icon leetcode" aria-label="LeetCode">
                <Code2 size={24} />
              </a>
              <a href="https://www.codechef.com/users/shivaanshp25" target="_blank" rel="noopener noreferrer" className="social-icon codechef" aria-label="CodeChef">
                <Cpu size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <img 
              src="/WhatsAppImage2025-09-09at11.21.11.jpg" 
              alt="Shivaansh Pandey" 
              className="hero-image"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem', position: 'relative', zIndex: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
