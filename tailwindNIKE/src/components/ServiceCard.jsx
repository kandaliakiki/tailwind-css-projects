import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min--w-[350px] shadow-3xl w-full rounded-[20px] px-10 py-16">
      <div className="bg-coral-red w-11 h-11 justify-center items-center rounded-full flex">
        <img src={imgURL} alt={label} width={24} height={24}></img>
      </div>
      <h3 className="font-palanquin font-bold text-3xl mt-3 leading-normal ">
        {label}
      </h3>
      <p className="font-montserrat  leading-normal mt-3 text-slate-gray text-lg break-words">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
