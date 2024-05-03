"use client";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";

export const Navbar = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const [isResponsiveNavVisible, setIsResponsiveNavVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("Log: window.pageYOffset", window.scrollY);
      window.scrollY > 100
        ? setIsNavBarVisible(true)
        : setIsNavBarVisible(false);
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) =>
      link.addEventListener("click", () => setIsResponsiveNavVisible(false))
    );

    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setIsResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (isResponsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [isResponsiveNavVisible]);

  return (
    <nav>
      <div className={`wrapper ${isNavBarVisible ? "blur-nav" : ""}`}>
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link href="/">
            {/* <FiHome /> */}
            <Logo />
          </Link>
        </motion.div>
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isResponsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setIsResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsResponsiveNavVisible(true);
              }}
            />
          )}
        </motion.div>
        <div
          className={`${isResponsiveNavVisible && "nav-responsive"} nav-items`}
        >
          <ul className="nav-items-list">
            {sectionsLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={link} className="nav-items-list-item-link">
                  {" " + name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Button label="Resume" link="Bhimanshu's Resume.pdf" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

const sectionsLinks = [
  { name: "About", link: "/#about" },
  { name: "Experience", link: "/#experience" },
  { name: "Work", link: "/#work" },
  { name: "Contact", link: "/#contact" },
];
