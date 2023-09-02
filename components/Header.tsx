"use client";

import React, { useContext } from "react";

import { HiMenuAlt2 } from "react-icons/hi";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { useScrollDirection } from "@/utils/useScrollDirection";

const Header = () => {
  const { isOpen, setIsOpen, openSearchBar, setOpenSearchBar } =
    useContext(GlobalContext);

    const scrollDirection = useScrollDirection();

  return (
    <header className={`sticky ${ scrollDirection === "down" ? "-top-20" : "top-0"} duration-500 w-full z-10 bg-zinc-950 h-20`}>
      <div className="flex justify-between h-full px-4 md:px-8 text-base md:text-base">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiMenuAlt2 size={25} />
          </button>
          <Link
            href="/"
            className="text-center h-full flex justify-center items-center text-xl font-semibold"
          >
            TMDB
          </Link>
        </div>
        <button onClick={() => setOpenSearchBar(!openSearchBar)}>
          <BiSearch size={25} />
        </button>
      </div>
    </header>
  );
};

export default Header;
