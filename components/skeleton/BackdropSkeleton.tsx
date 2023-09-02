import React from "react";

const BackdropSkeleton = () => {
  return (
    <div className="flex w-full overflow-hidden">
      <div className="relative group/box overflow-hidden w-screen h-80 md:h-[calc(100vh-5rem)] bg-zinc-900 animate-pulse">
        <div className="w-full h-full object-cover brightness-50" />
        <div className="absolute flex flex-col gap-y-2 md:gap-y-4 bottom-8 left-8 w-[80%] md:w-[40%]">
          <div className="h-12 md:h-16 w-60 bg-zinc-800 animate-pulse"></div>
          <div className="h-6 w-32 bg-zinc-800 animate-pulse"></div>
          <div className="hidden md:block text-sm h-24 bg-zinc-800 animate-pulse"></div>
          <div className="bg-zinc-800 animate-pulse h-8 md:h-12 w-32 mt-1 md:w-44 font-semibold text-center text-xs md:text-base"></div>
        </div>
      </div>
    </div>
  );
};

export default BackdropSkeleton;
