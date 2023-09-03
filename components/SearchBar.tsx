"use client";

import { GlobalContext } from "@/context/GlobalContext";
import { searchData } from "@/services/search";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import { HiX } from "react-icons/hi";

const SearchBar = () => {
  const { openSearchBar, setOpenSearchBar } = useContext(GlobalContext);
  const [query, setQuery] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchData(query),
  });

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (openSearchBar === true && e.code === "Escape")
        setOpenSearchBar(!setOpenSearchBar);
    });
  });

  const router = useRouter();

  const debounce = query.split("");

  const handleInputChange = (e: { target: { value: string } }) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div
        className={`z-50 px-4 md:px-8 bg-zinc-950 h-screen w-screen overflow-y-scroll duration-500 ${
          openSearchBar ? "fixed" : "hidden"
        }`}
      >
        <div className="h-20 w-full gap-x-4 flex justify-center items-center mb-4 md:mb-6">
          <input
            ref={(inp) => inp?.focus()}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            className="h-full w-full rounded-full border-2 border-zinc-300 bg-transparent"
          />
          <button
            onClick={() => {
              setOpenSearchBar(!openSearchBar);
              setQuery("");
            }}
          >
            <HiX size={25} />
          </button>
        </div>
        {debounce.length <= 3 ? (
          ""
        ) : isLoading ? (
          <p className="px-6 md:px-14">Loading...</p>
        ) : (
          <ul>
            {data.results.slice(0, 10).map((result: any, i: number) => (
              <li
                key={i}
                className="w-full flex gap-4 p-2 px-6 md:px-14 cursor-pointer hover:bg-zinc-900"
                onClick={() => {
                  router.push(`/${result.media_type}/${result.id}`);
                  setOpenSearchBar(!openSearchBar);
                  setQuery("");
                }}
              >
                <div className="h-16 w-12 overflow-hidden rounded-md">
                  <Image
                    src={
                      result.profile_path || result.poster_path
                        ? `https://image.tmdb.org/t/p/original${
                            result.profile_path || result.poster_path
                          }`
                        : "/images/not-found.png"
                    }
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h1 className="text-base font-semibold">
                    {result.name || result.title}
                  </h1>
                  <p className="text-xs italic font-zinc-400">
                    in {result.media_type}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
