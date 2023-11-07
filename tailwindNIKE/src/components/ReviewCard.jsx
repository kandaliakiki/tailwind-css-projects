import React from "react";
import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className="flex justify-center  items-center flex-col  ">
      <img
        src={imgURL}
        alt="customer"
        className="object-cover rounded-full w-[120px] h-[120px]"
      ></img>
      <p className="mt-6 info-text text-center  max-w-sm">{feedback}</p>
      <div className="flex justify-center items-center mt-3 gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="star"
          className="object-contain m-0"
        ></img>
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-bold font-palanquin text-3xl text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
