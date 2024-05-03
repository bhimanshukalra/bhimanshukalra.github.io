"use client";
import { Email } from "@/components/Email";
import { Loader } from "@/components/Loader";
import { SocialIcons } from "@/components/SocialIcons";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { Projects } from "@/sections/Projects";
import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleLoadedState = () => {
    setIsLoading(false);
    setTimeout(() => setIsContentVisible(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Bhimanshu Kalra</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {isLoading && (
        <Loader isLoading={isLoading} setIsLoading={handleLoadedState} />
      )}
      {isContentVisible && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
          </main>
          <About />
          <Experience />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}
