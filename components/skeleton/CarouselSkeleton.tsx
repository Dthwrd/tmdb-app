import React from "react";

const CarouselSkeleton = () => {
  return (
    <div className="px-8 py-12">
      <div className="bg-zinc-800 animate-pulse text-xl font-semibold mb-8 h-10 w-full rounded-md"></div>
      <div className="flex w-full overflow-hidden rounded-lg">
        <div className="flex gap-x-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="relative group/box rounded-xl overflow-hidden w-[13rem] md:w-[18.2rem] h-72 md:h-80 xl:h-[27rem] animate-pulse bg-zinc-900"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSkeleton;
