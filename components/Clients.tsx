import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <React.Fragment key={id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img
                  src={nameImg}
                  alt={name}
                  width={id > 4 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
