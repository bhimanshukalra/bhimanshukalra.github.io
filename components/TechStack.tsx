import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { techStack } from "@/data/data";

const TechStack = () => {
  return (
    <section id="techstack" className="py-20">
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={techStack}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
