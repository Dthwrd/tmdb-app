"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useSeasonsDetail } from "@/hooks/useTv";
import NotFound from "@/app/not-found";
import SeasonsSkeleton from "./skeleton/SeasonsSkeleton";

const SeasonList = ({
  seasonId,
  season_number,
}: {
  seasonId: string;
  season_number: string;
}) => {
  const { data, isLoading, isError } = useSeasonsDetail(
    seasonId,
    season_number
  );

  const [page, setPage] = useState(10);

  if (isLoading) return <SeasonsSkeleton />;
  if (isError) return <NotFound />;

  const slicedEpisodes = data.episodes?.slice(0, page);

  return (
    <div className="flex flex-col gap-16 p-8 2xl:px-56">
      <h1 className="text-center w-full font-semibold text-xl">Episodes</h1>
      {slicedEpisodes.map((season: any, i: number) => (
        <div
          key={i}
          className="flex flex-col md:flex-row gap-y-4 md:gap-x-8 w-full h-full"
        >
          <div className="w-full md:w-[48rem] h-56 md:h-60 xl:h-72 rounded-md overflow-hidden">
            <Image
              src={
                season.still_path
                  ? `https://image.tmdb.org/t/p/original${season.still_path}`
                  : "/images/backdrop-not-found.png"
              }
              alt=""
              height={500}
              width={500}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col items-start text-xs">
              <h1 className="text-2xl md:text-3xl font-semibold">
                {season.episode_number}.{season.name}
              </h1>
              <div className="flex mt-2 items-center">
                <span className="border border-1 border-white p-[0.20rem] px-2 mr-2 rounded-md text-[0.6rem]">
                  {season.runtime}m
                </span>
                <span className="text-xs text-zinc-400 italic">
                  Rating: {Math.round(season.vote_average * 10)}%
                </span>
              </div>
            </div>
            <div className="hidden md:block ">
              <h1 className="font-semibold">Overview</h1>
              <p className="text-sm">{season.overview}</p>
            </div>
            <div className="grid grid-cols-2 w-96">
              <div>
                <h1 className="font-semibold">Directed By</h1>
                <p className="text-sm">
                  {season.crew
                    .filter((crew: { job: string }) => crew.job === "Director")
                    .map((director: { name: string }) => director.name)}
                </p>
              </div>
              <div>
                <h1 className="font-semibold">Written By</h1>
                <p className="text-sm">
                  {season.crew
                    .filter((crew: { job: string }) => crew.job === "Writer")
                    .map((director: { name: string }) => director.name)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        className={`${page >= data.episodes.length ? "hidden" : "block"} py-2 w-36 rounded-md mx-auto text-zinc-900 bg-zinc-200`}
        onClick={() => setPage((prevPage) => prevPage + 10)}
      >
        Load More
      </button>
    </div>
  );
};

export default SeasonList;
