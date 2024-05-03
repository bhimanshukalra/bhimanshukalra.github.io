"use client";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

export const SocialIcons = () => (
  <motion.div
    className="social-icons"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
      delay: 1.95,
    }}
  >
    <ul className="social-icons-list">
      {socialLinks.map(({ label, icon, link }) => (
        <li key={label} title={label} className="social-icons-list-item">
          <Link
            href={link}
            className="social-icons-list-item-link"
            target="_blank"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const socialLinks = [
  {
    label: "Github",
    icon: <FiGithub />,
    link: "https://github.com/bhimanshukalra",
  },
  {
    label: "LinkedIn",
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/bhimanshu-kalra/",
  },
];
