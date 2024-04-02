"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className={`relative z-10 w-full text-white bg-black`}>
      <div
        className={`flex items-center justify-between mx-5 sm:mx-10 lg:mx-20`}
      >
        <div className={`flex items-center text-2xl h-14`}>
          <Link href={"/"}>Logo</Link>
        </div>

        <div className="text-2xl sm:hidden">
          {!menu ? (
            <button onClick={handleMenu}>+</button>
          ) : (
            <button onClick={handleMenu}>-</button>
          )}
        </div>
        <div className="hidden sm:block">
          <NavItem />
        </div>
      </div>
      <div className="block sm:hidden">{!menu ? null : <NavItem mobile />}</div>
    </nav>
  );
};

export default Navbar;
