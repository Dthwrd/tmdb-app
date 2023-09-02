import React from "react";

const PersonDetailsSkeleton = () => {
  return (
    <div>
      <div className="px-8 h-full">
        <div className="flex flex-col xl:flex-row gap-x-16 py-16 w-full h-full">
          <div className="overflow-hidden rounded-lg w-[23%] h-[40rem] bg-zinc-800 animate-pulse"></div>
          <div className="flex flex-col gap-y-6 md:gap-y-5 w-full xl:w-[40%] h-full p-6">
            <div className="flex md:justify-start items-center xl:gap-x-6">
              <div className="h-14 w-44 bg-zinc-800 animate-pulse"></div>
            </div>
            <div className="h-4 w-48 bg-zinc-800 animate-pulse"></div>

            <div className="h-6 w-48 bg-zinc-800 animate-pulse"></div>
            <div className="h-24 w-full bg-zinc-800 animate-pulse"></div>

            <div className="grid grid-cols-2 gap-2 text-justify">
              <div className="h-8 w-48 bg-zinc-800 animate-pulse"></div>
              <div className="h-8 w-48 bg-zinc-800 animate-pulse"></div>
              <div className="h-8 w-48 bg-zinc-800 animate-pulse"></div>
              <div className="h-8 w-48 bg-zinc-800 animate-pulse"></div>
            </div>
            <div className="bg-zinc-800 animate-pulse xl:w-44 h-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailsSkeleton;
