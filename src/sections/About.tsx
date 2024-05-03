"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => (
  <motion.div
    className="about"
    id="about"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={{
      visible: { opacity: 1, y: -50 },
      hidden: { opacity: 0, y: 0 },
    }}
  >
    <div className="title">
      <h2>About Me</h2>
    </div>
    <div className="about-grid">
      <div className="about-grid-info">
        <p className="about-grid-info-text">
          Greeting! I am a passionate engineer with a keen interest in mobile
          and web development. I&apos;m a fullstack MERN developer.
        </p>
        <p className="about-grid-info-text">
          Greeting! I am a passionate engineer with a keen interest in mobile
          and web development. I&apos;m a fullstack MERN developer.
        </p>
        <p className="about-grid-info-text">
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <ul className="about-grid-info-list">
          <li className="about-grid-info-list-item">React</li>
          <li className="about-grid-info-list-item">React Native</li>
          <li className="about-grid-info-list-item">Next.js</li>
          <li className="about-grid-info-list-item">Redux</li>
          <li className="about-grid-info-list-item">Node.js</li>
        </ul>
      </div>
      <div className="about-grid-photo">
        <div className="overlay"></div>
        <div className="overlay-border"></div>
        <div className="about-grid-photo-container">
          <Image src="/profile-photo.JPG" alt="profile" fill />
        </div>
      </div>
    </div>
  </motion.div>
);
