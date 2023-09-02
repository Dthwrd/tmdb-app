"use state";

import { GlobalContext } from "@/context/GlobalContext";
import React, { useState, useEffect, useContext } from "react";
import { HiOutlineCheck, HiOutlinePlus } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const WatchListButton = ({
  movieId,
  type,
  poster_path,
  title,
  tagline,
  overview,
  rating,
  genres,
  runtime,
  className,
}: {
  movieId: number;
  type: string;
  poster_path: string;
  title: string;
  tagline: string;
  overview: string;
  rating: number;
  genres: [];
  runtime: number;
  className: string;
}) => {
  const [like, setLike] = useState(false);
  const { watchList, setWatchList } = useContext(GlobalContext);

  const isFav = watchList.find(
    (fav: { movieId: number }) => fav.movieId === movieId
  );

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList, like]);

  const likeHandler = () => {
    if (!isFav) {
      setLike(!like);
      setWatchList([
        ...watchList,
        {
          movieId,
          type,
          poster_path,
          title,
          tagline,
          overview,
          genres,
          runtime,
          rating,
        },
      ]);
    } else {
      setWatchList(
        watchList.filter((fav: { movieId: number }) => fav.movieId !== movieId)
      );
      if (watchList.length === 1) localStorage.removeItem("favorite");
    }
  };

  return (
    <button
      onClick={likeHandler}
      className={twMerge("relative group", className)}
    >
      {isFav ? <HiOutlineCheck /> : <HiOutlinePlus />}
      <p className="absolute hidden group-hover:block -top-8 -left-24 bg-zinc-800 text-xs text-zinc-200 w-28 py-2 rounded-md">
      {isFav ? "Remove" : "Add To Watch List"}
      </p>
    </button>
  );
};

export default WatchListButton;
