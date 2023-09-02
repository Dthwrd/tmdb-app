"use client";

import React, { useContext, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import { useDialogDetails, useDialogTrailer } from "@/hooks/useDialog";
import DialogSkeleton from "./skeleton/DialogSkeleton";
import FavoriteButton from "./button/FavoriteButton";
import WatchListButton from "./button/WatchListButton";


const Dialog = () => {
  const { openDialog, setOpenDialog, movieId, setMovieId, type } =
    useContext(GlobalContext);

  const router = useRouter();

  const { data, isLoading, isError } = useDialogDetails(`${movieId}`, type);
  const { trailer, loadTrailer, trailerError } = useDialogTrailer(
    `${movieId}`,
    type
  );

  if (!openDialog) return;

  const isTrailer = trailer?.results.find(
    (x: { key: string; type: string }) => x.type === "Trailer" && x.key
  );
  
  const openDetails = () => {
    router.push(`/${type}/${data?.id}`);
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <div
        className={`fixed w-[90%] xl:w-[650px] z-50 top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex justify-center items-center duration-200`}
      >
        {isLoading ? (
          <DialogSkeleton />
        ) : isError ? (
          <p>error</p>
        ) : (
          <div className="w-[40rem] bg-zinc-950 rounded-xl overflow-hidden">
            <div className="flex justify-center items-center w-full h-60 md:h-80 overflow-hidden">
              {loadTrailer ? (
                <p>Loading...</p>
              ) : trailerError ? (
                <p>error</p>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${
                    isTrailer ? isTrailer.key : ""
                  }`}
                  className="w-full h-60 md:h-80"
                ></iframe>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between">
                <h1 className="text-xl md:text-3xl font-semibold w-[60%]">
                  {data.title || data.name}
                </h1>
                <div className="flex gap-x-4">
                  <FavoriteButton
                    movieId={data.id}
                    type={type}
                    title={type === "movie" ? data.title : data.name}
                    poster_path={data.poster_path}
                    tagline={data.tagline}
                    overview={data.overview}
                    rating={data.vote_average}
                    genres={data.genres}
                    runtime={
                      type === "movie" ? data.runtime : data.episode_run_time
                    }
                    className="text-white text-3xl"
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
                    runtime={
                      type === "movie" ? data.runtime : data.episode_run_time
                    }
                    className="text-white text-3xl"
                  />
                  
                </div>
              </div>
              <p className="flex gap-2 text-xs mt-2">
                {data.genres.map((genre: { id: number; name: string }) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </p>
              <p className="text-xs italic text-zinc-400 mt-2">
                {data.tagline}
              </p>
              <button
                onClick={openDetails}
                className="bg-white text-zinc-950 py-3 w-full font-semibold mt-6 rounded-md"
              >
                Details
              </button>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => {
          setOpenDialog(!openDialog);
          setMovieId(0);
        }}
        className={`fixed z-30 w-full h-full bg-black/50 duration-300`}
      ></div>
    </>
  );
};

export default Dialog;
