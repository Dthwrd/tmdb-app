"use client";

import MovieList from "@/components/MovieList";
import { usePopularMovies } from "@/hooks/useMovie";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const PopularMovies = () => {
  const [page, setPage] = useState<number>(1);
  const { popular, loadingPopular, errorPopular } = usePopularMovies(page);

  return (
    <div>
      <MovieList
        title="Popular"
        data={popular}
        isLoading={loadingPopular}
        isError={errorPopular}
        type="movie"
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={20}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        className="flex w-full justify-center gap-x-4 md:gap-x-8 text-sm md:text-base pb-16 items-center"
        activeClassName="border px-2 py-1 rounded-md"
      />
    </div>
  );
};

export default PopularMovies;
