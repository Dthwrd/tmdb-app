"use client";

import WatchListButton from "@/components/button/WatchListButton";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);
  const [page, setPage] = useState(10);

  const router = useRouter();

  return (
    <div className="flex flex-col gap-16 p-8 2xl:px-56">
      <h1 className="text-center w-full font-semibold text-xl">
        {watchList.length === 0 ? "No Watchlist" : "Watchlist"}
      </h1>
      {watchList.slice(0, page).map((data) => (
        <div key={data.movieId} className="flex gap-x-8 w-full h-full">
          <div className="hidden md:block w-72 h-80 rounded-md overflow-hidden">
            <Image
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt=""
              height={500}
              width={500}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex gap-x-8 items-center justify-between md:justify-start">
              <div className="flex flex-col items-start text-xs w-44 md:full">
                <h1 className="text-2xl md:text-4xl font-semibold">{data.title}</h1>
                <div className="flex mt-2 items-center">
                  <span className="border border-1 border-white p-[0.20rem] px-2 mr-2 rounded-md text-[0.6rem]">
                    {data.runtime}m
                  </span>
                  <p className="w-16 md:w-full">
                    {data.genres.map((genre: { name: string; id: number }) => (
                      <span key={genre.id} className="mr-2">
                        {genre.name}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center w-16 h-16 border-4 border-white rounded-full">
                {Math.round(data.rating * 10)}%
              </div>
            </div>
            <p
              className={`${
                data.tagline ? "block" : "hidden"
              } italic text-zinc-400`}
            >
              {data.tagline}
            </p>
            <p className="hidden md:block">{data.overview}</p>
            <div className="flex h-10 gap-x-4 w-full xl:w-[50%]">
              <button
                onClick={() => router.push(`/${data.type}/${data.movieId}`)}
                className="bg-white rounded-md w-full text-zinc-900 text-sm px-6 md:px-8 md:text-base font-semibold hover:bg-zinc-300"
              >
                Details
              </button>
              <WatchListButton
                movieId={data.movieId}
                type={data.type}
                title={data.type}
                poster_path={data.poster_path}
                tagline={data.tagline}
                overview={data.overview}
                rating={data.rating}
                genres={data.genres}
                runtime={data.runtime}
                className="bg-white rounded-md text-zinc-900 text-lg px-4 md:px-3 md:text-2xl hover:bg-zinc-300"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        className={`${
          page >= watchList.length ? "hidden" : "block"
        } py-2 w-36 rounded-md mx-auto text-zinc-900 font-semibold bg-zinc-200`}
        onClick={() => setPage((prevPage) => prevPage + 10)}
      >
        Load More
      </button>
    </div>
  );
};

export default WatchList;
