"use client";

import MovieList from "@/components/MovieList";
import { useNowPlayingMovies } from "@/hooks/useMovie";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const NowPlayingMovies = () => {
  const [page, setPage] = useState<number>(1);
  const { nowPlaying, loadingNowPlaying, errorNowPlaying } =
    useNowPlayingMovies(page);

  return (
    <div>
      <MovieList
        title="Now Playing"
        data={nowPlaying}
        isLoading={loadingNowPlaying}
        isError={errorNowPlaying}
        type="movie"
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(nowPlaying?.total_pages)}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        className="flex w-full justify-center gap-x-4 md:gap-x-8 text-sm md:text-base pb-16 items-center"
        activeClassName="border px-2 py-1 rounded-md"
      />
    </div>
  );
};

export default NowPlayingMovies;
