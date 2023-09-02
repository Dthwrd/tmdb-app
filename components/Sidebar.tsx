"use client";

import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import {
  HiCalendar,
  HiFire,
  HiOutlineDesktopComputer,
  HiOutlineFilm,
  HiOutlineHeart,
  HiOutlineThumbUp,
  HiStatusOnline,
  HiOutlineBookmark
} from "react-icons/hi";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(GlobalContext);

  return (
    <>
      <aside
        className={`fixed z-50 px-8 w-72 bg-zinc-950 h-full overflow-scroll duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center py-6">
          <Link href="/" className="font-semibold text-2xl">
            TMDB
          </Link>
        </div>
        <div className="flex flex-col gap-6 pb-8">
          <h1 className="text-zinc-500 mb-2">Movies</h1>
          <Link href="/movie/popular" className="flex items-center gap-2 hover:text-zinc-400">
            <HiFire size={20} />
            Popular
          </Link>
          <Link href="/movie/upcoming" className="flex items-center gap-2 hover:text-zinc-400">
            <HiOutlineFilm size={20} />
            Upcoming
          </Link>
          <Link href="/movie/now-playing" className="flex items-center gap-2 hover:text-zinc-400">
            <HiCalendar size={20} />
            Now Playing
          </Link>
          <Link href="/movie/top-rated" className="flex items-center gap-2 hover:text-zinc-400">
            <HiOutlineThumbUp size={20} />
            Top Rated
          </Link>
        </div>

        <div className="flex flex-col gap-6 py-6">
          <h1 className="text-zinc-500 mb-2">TV Series</h1>
          <Link href="/tv/popular" className="flex items-center gap-2 hover:text-zinc-400">
            <HiFire size={20} />
            Popular
          </Link>
          <Link href="/tv/airing" className="flex items-center gap-2 hover:text-zinc-400">
            <HiStatusOnline size={20} />
            Airing Today
          </Link>
          <Link href="/tv/on-tv" className="flex items-center gap-2 hover:text-zinc-400">
            <HiOutlineDesktopComputer size={20} />
            On TV
          </Link>
          <Link href="/tv/top-rated" className="flex items-center gap-2 hover:text-zinc-400">
            <HiOutlineThumbUp size={20} />
            Top Rated
          </Link>
        </div>

        <div className="flex flex-col gap-6 py-6">
          <h1 className="text-zinc-500 mb-2">My</h1>
          <Link href="/favorite" className="flex items-center gap-2 hover:text-zinc-400">
            <HiOutlineHeart size={20} />
            Favorite
          </Link>
          <Link href="/watchlist" className="flex items-center gap-2 hover:text-zinc-400">
            <HiOutlineBookmark size={20} />
            Watch List
          </Link>
          
        </div>


      </aside>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "fixed" : "hidden"
        } bg-zinc-950 opacity-50 w-screen h-screen z-40`}
      ></div>
    </>
  );
};

export default Sidebar;
