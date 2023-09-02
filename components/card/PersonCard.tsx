import Image from "next/image";
import React from "react";

export type Movies = {
  id?: number;
  profile_path?: string;
  poster_path?: string;
  name?: string;
  title?: string;
  character?: string;
  media_type?: string;
  job: string;
};

export interface BoxProps {
  actors: Movies;
  onClick: () => void;
}

const PersonCard = ({ actors, onClick }: BoxProps) => {
  const images =
    actors.profile_path || actors.poster_path
      ? `https://image.tmdb.org/t/p/original${
          actors.profile_path || actors.poster_path
        }`
      : "/images/not-found.png";

  return (
    <div
      className="relative group/box rounded-xl overflow-hidden w-[13rem] md:w-[18.2rem] h-full"
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
          {actors.name || actors.title}
        </h1>
        <p>
          <span className="text-zinc-400 mr-2 italic">as</span>
          {actors.character || actors.job}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;
