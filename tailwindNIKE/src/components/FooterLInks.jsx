import React from "react";

const FooterLinks = ({ title, links }) => {
  return (
    <div className="text-white">
      <h2 className="text-xl font-montserrat font-semibold">{title}</h2>
      <ul className="mt-5">
        {links.map((link) => (
          <li
            key={link.name}
            className="flex mb-2 text-white-400 hover:text-slate-gray"
          >
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
