import React from "react";

const DetailsSkeleton = () => {
  return (
    <div className="relative flex flex-col justify-start xl:justify-center items-center xl:items-start xl:flex-row gap-6 w-full">
      <div className="bg-zinc-800 animate-pulse w-80 xl:w-96 h-[30rem] mt-24 xl:h-[35rem] xl:m-6 xl:mx-0 rounded-xl" />
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
      <div className="absolute bg-zinc-800 animate-pulse w-full h-96 xl:h-full -z-10 object-cover brightness-50" />
    </div>
  );
};

export default DetailsSkeleton;
