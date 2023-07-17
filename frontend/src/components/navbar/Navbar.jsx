import React, { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white p-5 md:flex md:items-center md:justify-start">
      <div className="flex items-center justify-between md:flex">
        <p className="mr-10 cursor-pointer text-lg font-bold">Logo</p>
        <div onClick={handleToggleNav}>
          {!isNavOpen ? (
            <HiMenu className="cursor-pointer md:hidden" size={25} />
          ) : (
            <HiOutlineX className="cursor-pointer md:hidden" size={25} />
          )}
        </div>
      </div>
      <ul
        className={`${
          isNavOpen ? "opacity-1 top-[60px]" : "top-[-400px]"
        } md:opacity-1 absolute left-0 z-50 flex w-full flex-col items-center justify-center gap-3 border-t border-t-green bg-white p-5 pt-7 text-black transition-all duration-500 ease-in-out md:static md:mr-auto md:flex md:w-auto md:flex-row md:items-center md:justify-start md:border-none md:p-0 md:py-0 md:text-black`}
      >
        <li className="cursor-pointer text-[0.9rem] text-black">Home</li>
        <li className="cursor-pointer text-[0.9rem] text-black">About</li>
        <li className="cursor-pointer text-[0.9rem] text-black">Contact</li>
        <li className="cursor-pointer text-[0.9rem] text-black">Services</li>
        <button className="visible w-full rounded-sm bg-green py-2 text-[1rem] text-white md:hidden">
          Login
        </button>
      </ul>
      <button className="hidden rounded-sm bg-green px-5 py-1 text-[1rem] text-white md:block">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
