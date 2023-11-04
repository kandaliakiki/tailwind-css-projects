import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 w-full max-sm:w-full flex-col ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]"></img>

      <div className="mt-8 justify-start flex gap-2.5 ">
        <img src={star} width={24} height={24} alt="rating"></img>
        <p className="font-montserrat text-xl leading-normal text-slate-gray ">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-semibold text-xl leading-normal font-palanquin">
        {name}
      </h3>
      <p className="text-coral-red font-montserrat font-semibold mt-2 text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
