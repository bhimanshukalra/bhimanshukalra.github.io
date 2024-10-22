"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  primaryLine,
  secondaryLine,
  className,
  filter = true,
  duration = 0.5,
}: {
  primaryLine: string;
  secondaryLine: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let primaryLineArray = primaryLine.split(" ");
  let secondaryLineArray = secondaryLine.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderLine = ({
    words,
    focusWords,
  }: {
    words: string[];
    focusWords: number[];
  }) =>
    words.map((word, idx) => (
      <motion.span
        key={word + idx}
        className={`${
          focusWords.includes(idx)
            ? "text-purple"
            : "dark:text-white text-black"
        } opacity-0`}
        style={{
          filter: filter ? "blur(10px)" : "none",
        }}
      >
        {word}{" "}
      </motion.span>
    ));

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {renderLine({ words: primaryLineArray, focusWords: [2, 3] })}
        <br />
        {renderLine({ words: secondaryLineArray, focusWords: [1, 2, 4, 6] })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
