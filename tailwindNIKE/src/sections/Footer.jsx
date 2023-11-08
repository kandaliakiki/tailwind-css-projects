import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import FooterLinks from "../components/FooterLInks";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex flex-1 justify-between max-xl:flex-col gap-24">
        <div className="text-white lg:max-w-sm">
          <img src={footerLogo} alt="nike logo"></img>
          <p className=" mt-4 font-montserrat text-base text-white-400 leading-7 max-w-sm">
            Get shoes ready for the new terms at your nearest Nike store. Find
            Your perfect Size in Store. Get Rewards.
          </p>
          <div className="mt-5 flex justify-start gap-5 w-full">
            {socialMedia.map((logo) => (
              <div className="bg-white rounded-full p-2">
                <img src={logo.src} width={24} height={24} alt={logo.alt}></img>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between max-sm:flex-col gap-20 ">
          {footerLinks.map((footer) => (
            <FooterLinks key={footer.title} {...footer}></FooterLinks>
          ))}
        </div>
      </div>
      <div className="text-white-400 flex justify-between text-sm mt-20 max-sm:flex-col max-sm:items-center ">
        <p>&copy; Copyright. All rights reserved.</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
