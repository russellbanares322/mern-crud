import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#008374] p-5 text-white md:flex md:items-center md:justify-start">
      <div>
        <p className="mr-10 cursor-pointer text-lg">Logo</p>
      </div>
      <ul className="gap-3 md:mr-auto md:flex md:items-center">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
      <button className="rounded-sm bg-orange px-3 py-1 text-[1rem] md:visible">
        XL Device
      </button>
    </nav>
  );
};

export default Navbar;
