"use client";

import Image from "next/image";
import { HiArrowLeft } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen px-14 text-center justify-center items-center">
      <Image src="/images/error.svg" alt="error" width={500} height={500} />
      <h1 className="text-4xl font-bold   mt-14">Page could not to be found</h1>
      <button
        onClick={() => {
          location.replace("/");
        }}
        className="py-2 px-6 bg-blue-500 rounded-md mt-4 flex items-center gap-x-2"
      >
        <HiArrowLeft />
        Home
      </button>
    </div>
  );
}
