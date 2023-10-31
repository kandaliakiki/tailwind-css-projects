import React from "react";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">
        <PopularProducts></PopularProducts>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffer></SpecialOffer>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer></Footer>{" "}
      </section>
    </main>
  );
};

export default App;
