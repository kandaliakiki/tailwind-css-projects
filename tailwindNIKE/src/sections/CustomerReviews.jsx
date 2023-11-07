import React from "react";
import { reviews } from "../constants";

import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-4xl font-bold text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="text-center info-text mt-4 m-auto max-w-lg">
        Hear genuine stories from our satisfied customers about <br></br> their
        exceptional experiences with us
      </p>
      <div className="mt-24 flex flex-1  justify-evenly gap-14 items-center max-lg:flex-col ">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
