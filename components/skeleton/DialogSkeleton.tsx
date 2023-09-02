import React from "react";

const DialogSkeleton = () => {
  return (
    <>
      <div
        className={`fixed w-[90%] xl:w-[650px] z-50 top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex justify-center items-center duration-200`}
      >
        <div className="w-[40rem] bg-zinc-900 animate-pulse rounded-xl overflow-hidden">
          <div className="flex justify-center items-center w-full h-60 md:h-80 overflow-hidden">
            <div className="bg-zinc-800 animate-pulse w-full h-60 md:h-80"></div>
          </div>
          <div className="flex flex-col gap-y-3 py-4 px-4">
            <div className="bg-zinc-800 animate-pulse h-8 w-56"></div>
            <div className="bg-zinc-800 animate-pulse h-4 w-36"></div>
            <div className="bg-zinc-800 animate-pulse h-4 w-36"></div>
            <div className="bg-zinc-800 animate-pulse w-full h-12 rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogSkeleton;
