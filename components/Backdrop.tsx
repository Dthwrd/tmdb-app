"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import BackdropSkeleton from "./skeleton/BackdropSkeleton";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { useTrending } from "@/hooks/useTrending";

const Backdrop = () => {
  const [slide, setSlide] = useState(0);
  const { data, isLoading, isError } = useTrending();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide((prevSlide) => {
        if (prevSlide === data?.results.length - 1) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    }, 15 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [slide, data?.results.length]);

  if (isLoading) return <BackdropSkeleton />;
  if (isError) return <p>error</p>;

  return (
    <div className="relative flex w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: `${-slide * 5}%` }}
        transition={{ stiffness: 100 }}
      >
        {data.results.map(
          (
            d: {
              id: number;
              backdrop_path: string;
              title?: string;
              name?: string;
              vote_average: number;
              adult: boolean;
              overview: string;
              media_type: string;
            },
            i: number
          ) => (
            <div
              key={d.id}
              className="relative group/box overflow-hidden w-screen h-80 md:h-[45rem] xl:h-[calc(100vh-5rem)]"
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${d.backdrop_path}`}
                alt="d.title"
                width={1000}
                height={1000}
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute flex flex-col gap-y-2 md:gap-y-4 bottom-4 left-4 md:bottom-12 md:left-8 w-[80%] md:w-[60%] xl:w-[40%]">
                <h1 className="text-xl md:text-5xl font-semibold">
                  {d.title || d.name}
                </h1>
                <p className="flex gap-x-0 md:gap-x-2 items-center">
                  <span className="border border-1 border-white p-[0.20rem] mr-2 w-12 text-center rounded-md text-[0.5rem] md:text-xs">
                    {d.adult ? "R" : "PG-13"}
                  </span>
                  <span className="text-[0.6rem] md:text-base">
                    Rating: {Math.round(d.vote_average * 10)}%
                  </span>
                </p>
                <p className="hidden md:block text-sm">{d.overview}</p>

                <Link
                  href={`/${d.media_type}/${d.id}`}
                  className="bg-zinc-200 text-zinc-900 rounded-md py-2 w-32 mt-1 md:w-44 font-semibold text-center text-xs md:text-base"
                >
                  Details
                </Link>
              </div>
            </div>
          )
        )}
      </motion.div>
      <button
        onClick={() => setSlide((prevSlide) => prevSlide - 1)}
        className="absolute top-[50%] -translate-y-[50%] left-4 md:left-8 opacity-75 text-2xl md:text-5xl"
      >
        <HiArrowCircleLeft />
      </button>
      <button
        onClick={() => setSlide((prevSlide) => prevSlide + 1)}
        className="absolute top-[50%] -translate-y-[50%] right-4 md:right-8 opacity-75 text-2xl md:text-5xl"
      >
        <HiArrowCircleRight />
      </button>
    </div>
  );
};

export default Backdrop;
