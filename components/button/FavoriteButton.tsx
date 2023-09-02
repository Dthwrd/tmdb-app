"use state";

import { GlobalContext } from "@/context/GlobalContext";
import React, { useState, useEffect, useContext } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const FavoriteButton = ({
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
  const { favorite, setFavorite } = useContext(GlobalContext);

  const isFav = favorite.find(
    (fav: { movieId: number }) => fav.movieId === movieId
  );

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite, like]);

  const likeHandler = () => {
    if (!isFav) {
      setLike(!like);
      setFavorite([
        ...favorite,
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
      setFavorite(
        favorite.filter((fav: { movieId: number }) => fav.movieId !== movieId)
      );
      if (favorite.length === 1) localStorage.removeItem("favorite");
    }
  };

  return (
    <button
      onClick={likeHandler}
      className={twMerge("relative group", className)}
    >
      {isFav ? <HiHeart /> : <HiOutlineHeart />}
      <p className="absolute hidden group-hover:block -top-8 -left-24 bg-zinc-800 text-xs text-zinc-200 w-28 py-2 rounded-md">
        {isFav ? "Remove" : "Add To Favorite"}
      </p>
    </button>
  );
};

export default FavoriteButton;
