"use client";

import React, { useEffect, useRef, useState } from "react";
import PersonCard, { Movies } from "../card/PersonCard";
import { motion } from "framer-motion";


import { useRouter } from "next/navigation";
import CarouselSkeleton from "../skeleton/CarouselSkeleton";

const PersonCarousel = ({
  title,
  data,
  isLoading,
  isError,
  type,
}: {
  title: string;
  data: any;
  isLoading: boolean;
  isError: boolean;
  type?: string;
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

  const credits = type === "movie" ? data.crew : data.cast;

  return (
    <div className="relative px-8 py-16">
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
          {credits.map((actor: Movies, i: number) => {
            const onClick = () => {
              if (actor.media_type) {
                router.push(`/${actor.media_type}/${actor.id}`);
              } else {
                router.push(`/${type}/${actor.id}`);
              }
            };
            return (
              <PersonCard key={i} actors={actor} onClick={onClick} />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default PersonCarousel;
