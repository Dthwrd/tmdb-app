import React from "react";

const SeasonsSkeleton = () => {
  return (
    <div className="flex flex-col gap-16 p-8 2xl:px-56">
      <div className="w-full h-8 bg-zinc-800 animate-pulse"></div>
      {Array.from({ length: 10 }).map((_, i: number) => (
        <div
          key={i}
          className="flex flex-col md:flex-row gap-y-4 md:gap-x-8 w-full h-full"
        >
          <div className="w-full md:w-[48rem] h-72 rounded-md overflow-hidden bg-zinc-800 animate-pulse"></div>
          <div className="flex flex-col gap-y-4 w-full">
            <div className="bg-zinc-800 animate-pulse h-16"></div>

            <div>
              <div className="bg-zinc-800 animate-pulse h-12"></div>
              <div className="bg-zinc-800 animate-pulse h-6"></div>
            </div>
            <div className="grid grid-cols-2 w-96">
              <div>
                <div className="bg-zinc-800 animate-pulse h-12"></div>
                <div className="bg-zinc-800 animate-pulse h-6"></div>
              </div>
              <div>
                <div className="bg-zinc-800 animate-pulse h-12"></div>
                <div className="bg-zinc-800 animate-pulse h-6"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default SeasonsSkeleton;
