import Link from "next/link";
import React from "react";
import { SiAppletv, SiPrime, SiNetflix } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";

const watchProvider = [
  {
    link: "https://tv.apple.com/",
    logo: <SiAppletv className="text-3xl md:text-6xl" />,
  },
  {
    link: "https://www.primevideo.com/",
    logo: <SiPrime className="text-3xl md:text-6xl" />,
  },
  {
    link: "https://www.netflix.com/",
    logo: <SiNetflix className="text-2xl md:text-5xl" />,
  },
  {
    link: "https://www.hotstar.com/",
    logo: <TbBrandDisney className="text-2xl md:text-5xl" />,
  },
];

const WatchProvider = () => {
  return (
    <div className="px-8 py-16">
      <h1 className="text-xl font-semibold mb-8">Watch on</h1>
      <div className="flex gap-x-6 md:gap-x-8">
        {watchProvider.map((watch, i) => (
          <Link
            href={watch.link}
            target="_blank"
            key={i}
            className="flex justify-center items-center w-full h-16 md:h-32 xl:h-44 rounded-lg bg-zinc-200 text-zinc-900 hover:bg-zinc-400 duration-300"
          >
            <span>{watch.logo}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchProvider;
