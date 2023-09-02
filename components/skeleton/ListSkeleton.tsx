import React from "react";

const ListSkeleton = () => {
  return (
    <div className="px-16 w-full">
      <h1 className="h-8 w-full bg-zinc-800 animate-pulse"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-16 py-16 justify-items-center">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="relative group/box rounded-xl overflow-hidden w-[13rem] md:w-[18.2rem] h-72 md:h-80 xl:h-[27rem] animate-pulse bg-zinc-900"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ListSkeleton;
