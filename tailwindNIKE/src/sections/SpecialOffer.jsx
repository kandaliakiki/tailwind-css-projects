import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="max-container w-full flex justify-wrap items-center max-xl:flex-col-reverse gap-10 ">
      <div className=" flex flex-1 ">
        <img
          src={offer}
          height={687}
          width={773}
          className="object-contain w-full"
        ></img>
      </div>

      <div className=" flex flex-1 flex-col xl:max-w-lg ">
        <h2 className="text-4xl font-palanquin font-bold capitalize  ">
          <span className="text-coral-red">Special</span> offer
        </h2>
        <p className="mt-4 info-text  break-words">
          Embark on shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6  info-text break-words">
          Navigate a realm of possibilites designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight}></Button>
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
