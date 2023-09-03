"use client";

import React from "react";
import Link from "next/link";
import ListSkeleton from "./skeleton/ListSkeleton";
import Card from "./card/Card";

const MovieList = ({
  title,
  data,
  isLoading,
  isError,
  type
}: {
  title: string,
  data: { results: any; page: number };
  isLoading: boolean;
  isError: boolean;
  type: string;
}) => {

  if(isLoading) return <ListSkeleton />
  if(isError) return <p>Error</p>

  return (
    <div className="px-16 md:px-8 w-full">
      <h1 className="text-xl text-center font-semibold">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-16 py-16 justify-items-center">
        {data.results.map((movie: any) => (
          <Link key={movie.id} href={`/${type}/${movie.id}`}>
            <Card width="full" movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
