import Image from "next/image";
import React from "react";

export type Movies = {
  id?: number;
  poster_path: string;
  title?: string;
  name?: string;
  backdrop_path?: string;
  genres: [];

};

export interface BoxProps {
  movie: Movies;  
  width?: string;
  onClick?: () => void;
}

const Card = ({ movie, onClick, width }: BoxProps) => {
  const images = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "/images/not-found.png";

  return (
    <div
      className={`relative group/box rounded-xl overflow-hidden w-[${width ? width : "13rem"}] md:w-[18.2rem] h-full`}
      onClick={onClick}
    >
      <Image
        src={images}
        alt=""
        className="w-full group-hover/box:brightness-50 duration-300 pointer-events-none"
        width={500}
        height={500}
      />
      <div className="absolute bottom-0 p-4 invisible flex flex-col group-hover/box:visible">
        <h1 className="text-xl font-semibold cursor-pointer">
          {movie.title ? movie.title : movie.name}
        </h1>
      </div>
    </div>
  );
};

export default Card;
