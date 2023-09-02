"use client";

import React, { useContext, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { GlobalContext } from "@/context/GlobalContext";
import CarouselSkeleton from "../skeleton/CarouselSkeleton";
import Card from "../card/Card";

const Carousel = ({
  title,
  data,
  isLoading,
  isError,
  type,
}: {
  title: string;
  data: { results: any; page: number };
  isLoading: boolean;
  isError: boolean;
  type: string;
}) => {
  const [width, setWidth] = useState(0);
  const { openDialog, setOpenDialog, setMovieId, setType } =
    useContext(GlobalContext);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, [data]);

  if (isLoading) return <CarouselSkeleton />;
  if (isError) return;

  return (
    <div className="relative px-8 pb-16">
      <h1 className="text-xl font-semibold mb-8">{title}</h1>
      <div className="flex w-full overflow-hidden rounded-lg" ref={carouselRef}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 18 }}
          className="flex gap-x-6"
          whileHover={{ cursor: "grab" }}
          whileDrag={{ pointerEvents: "none" }}
          ref={carouselRef}
        >
          {data.results.map((movie: any) => {
            const onOpenDialog = () => {
              setOpenDialog(!openDialog);
              setMovieId(movie.id);
              setType(type);
            };
            return <Card key={movie.id} movie={movie} onClick={onOpenDialog} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
