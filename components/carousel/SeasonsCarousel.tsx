"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CarouselSkeleton from "../skeleton/CarouselSkeleton";
import SeasonsCard from "../card/SeasonsCard";

const SeasonsCarousel = ({
  title,
  data,
  isLoading,
  isError,
}: {
  title: string;
  data: any;
  isLoading: boolean;
  isError: boolean;
  type: string;
}) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

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
          {data.seasons.map((movie: any) => {
            const onClick = () => {
              router.push(`/seasons/${data.id}/${movie.season_number}`);
            };
            return <SeasonsCard key={movie.id} movie={movie} onClick={onClick} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SeasonsCarousel;
