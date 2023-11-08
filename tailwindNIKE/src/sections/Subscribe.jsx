import React from "react";
import InputField from "../components/InputField";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex max-lg:flex-col  justify-between items-center gap-10"
    >
      <h3 className=" text-4xl leading-[68px] font-palanquin  font-bold lg:max-w-md center-signup">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="mt-10 lg:max-w-xl w-full">
        <InputField></InputField>
      </div>
    </section>
  );
};

export default Subscribe;
