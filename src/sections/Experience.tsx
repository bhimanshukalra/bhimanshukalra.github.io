"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selectedIndex * 2.5}rem`;
    };
    transformSelected();
  }, [selectedIndex]);

  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => (
            <li
              key={index}
              className={`exp-slider-item ${
                index === selectedIndex && "exp-slider-item-selected"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <span>{experience.companyName}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selectedIndex].role}</span>
              <span className="exp-details-position-company">
                <Link className="link" href={experiences[selectedIndex].url}>
                  {experiences[selectedIndex].companyName}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selectedIndex].start} -
              {experiences[selectedIndex].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selectedIndex].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const experiences = [
  {
    companyName: "Grid Dynamics",
    role: "Senior Software Engineer",
    url: "",
    start: "January 2021",
    end: "Present",
    shortDescription: ["Line1", "Line2", "Line3", "Line4"],
  },
  {
    companyName: "Grid Dynamics",
    role: "Software Engineer",
    url: "",
    start: "January 2021",
    end: "Present",
    shortDescription: ["Line1", "Line2", "Line3", "Line4"],
  },
  {
    companyName: "Click Labs",
    role: "Associate Software Engineer",
    url: "",
    start: "January 2021",
    end: "Present",
    shortDescription: ["Line1", "Line2", "Line3", "Line4"],
  },
];
