import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[60px] w-full bg-[#008374] py-5 px-5">
      <div className="flex flex-row text-white">
        <p className="mr-10 cursor-pointer">Logo</p>
        <Link to="/">
          <p className="cursor-pointer">Home</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
