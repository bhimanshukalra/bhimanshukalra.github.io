"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Email = () => (
  <motion.div
    className="email"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
      delay: 1.95,
    }}
  >
    <Link href={`mailto:${emailAdress}`} className="email-link">
      {emailAdress}
    </Link>
  </motion.div>
);

const emailAdress = "kalra.bhimanshu1@gmail.com";
