"use client";

import { useDialogDetails } from "@/hooks/useDialog";
import Image from "next/image";
import React from "react";

import NotFound from "@/app/not-found";
import DetailsSkeleton from "./skeleton/DetailsSkeleton";
import { usePersonList } from "@/hooks/usePerson";
import FavoriteButton from "./button/FavoriteButton";
import WatchListButton from "./button/WatchListButton";
import Link from "next/link";
import { job } from "@/utils/helper";

const Details = ({ movieId, type }: { movieId: string; type: string }) => {
  const { data, isLoading, isError } = useDialogDetails(`${movieId}`, type);
  const { persons, loadingPersons, errorPersons } = usePersonList(
    movieId,
    type
  );

  if (isLoading || loadingPersons) return <DetailsSkeleton />;
  if (isError || errorPersons) return <NotFound />;

  const { director, producer, screenplay } = job(persons);

  const created_by = data.created_by ? data.created_by.map((c: any) => c) : "";

  return (
    <div className="relative flex flex-col justify-start xl:justify-center items-center xl:items-start xl:flex-row gap-6 w-full">
      <div className="overflow-hidden rounded-lg w-80 xl:w-96 mt-24 xl:m-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt=""
          className="w-full h-full"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col gap-y-6 md:gap-y-5 xl:w-[40%] p-6">
        <div className="flex justify-between md:justify-start items-center xl:gap-x-6">
          <div>
            <h1 className="text-4xl font-semibold w-72 xl:w-96">
              {data.title || data.name}
            </h1>
            <div className="flex flex-col items-start text-xs gap-y-3">
              <div className="flex mt-2">
                {data.genres.map((genre: { name: string; id: number }) => (
                  <span key={genre.id} className="mr-2">
                    {genre.name}
                  </span>
                ))}
              </div>
              <div>
                <span className="border border-1 border-white p-[0.20rem] mr-2 rounded-md text-[0.6rem]">
                  {data.adult ? "R" : "PG-13"}
                </span>
                <span className="border border-1 border-white p-[0.20rem] px-2 mr-2 rounded-md text-[0.6rem]">
                  {data.episode_run_time || data.runtime}m
                </span>
              </div>
            </div>
          </div>
          <p className="flex justify-center items-center w-16 h-16 border-4 border-white rounded-full">
            {Math.round(data.vote_average * 10)}%
          </p>
        </div>

        <span
          className={`${
            data.tagline ? "block" : "hidden"
          } italic text-xs opacity-75`}
        >
          {data.tagline}
        </span>

        <div>
          <h1 className="text-xl font-semibold">Overview</h1>
          <p className="text-sm xl:text-md">{data.overview}</p>
        </div>

        {director ? (
          <div>
            <h1 className="font-semibold">
              {director ? "Directed By" : "Produced By"}
            </h1>
            <Link
              href={`/person/${director.id}`}
              className="text-sm xl:text-md"
            >
              {director
                ? director?.name
                : producer.map((s: any) => s.name).join(", ")}
            </Link>
          </div>
        ) : (
          ""
        )}

        <div
          className={`${
            screenplay.length === 0 ? "hidden" : "block"
          } font-semibold`}
        >
          <h1 className={`font-semibold`}>Screenplay</h1>
          <p className="text-sm xl:text-md">
            {screenplay.map((s: any) => s.name).join(", ")}
          </p>
        </div>

        <div
          className={`${!data.created_by ? "hidden" : "block"} font-semibold`}
        >
          <h1 className={`font-semibold`}>Created By</h1>
          <p className="text-sm xl:text-md">
            {data.created_by
              ? created_by.map((s: any) => s.name).join(", ")
              : ""}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-justify">
          <div>
            <h1 className="font-semibold">Status</h1>
            <p className="text-sm xl:text-md">{data.status}</p>
          </div>
          <div>
            <h1 className="font-semibold">Released Date</h1>
            <p className="text-sm xl:text-md">
              {data.release_date || data.first_air_date}
            </p>
          </div>
          <div>
            <h1 className="font-semibold">Budget</h1>
            <p className="text-sm xl:text-md">
              ${data.budget ? new Intl.NumberFormat().format(data.budget) : "-"}
            </p>
          </div>
          <div>
            <h1 className="font-semibold">Revenue</h1>
            <p className="text-sm xl:text-md">
              $
              {data.budget ? new Intl.NumberFormat().format(data.revenue) : "-"}
            </p>
          </div>
        </div>

        <div className="flex h-12 gap-x-4 w-full xl:w-full">
          <button className="bg-white rounded-md w-full text-zinc-900 text-sm py-3 px-6 md:px-8 md:text-base font-semibold hover:bg-zinc-300">
            Play Trailer
          </button>
          <FavoriteButton
            movieId={data.id}
            type={type}
            title={type === "movie" ? data.title : data.name}
            poster_path={data.poster_path}
            tagline={data.tagline}
            overview={data.overview}
            rating={data.vote_average}
            genres={data.genres}
            runtime={type === "movie" ? data.runtime : data.episode_run_time}
            className="bg-white rounded-md text-zinc-900 text-lg px-4 md:px-3 md:text-2xl hover:bg-zinc-300"
          />
          <WatchListButton
            movieId={data.id}
            type={type}
            title={type === "movie" ? data.title : data.name}
            poster_path={data.poster_path}
            tagline={data.tagline}
            overview={data.overview}
            rating={data.vote_average}
            genres={data.genres}
            runtime={type === "movie" ? data.runtime : data.episode_run_time}
            className="bg-white rounded-md text-zinc-900 text-lg px-4 md:px-3 md:text-[1.25rem] hover:bg-zinc-300"
          />
        </div>
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt=""
        className="absolute w-full h-96 xl:h-full -z-10 object-cover brightness-50"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Details;
