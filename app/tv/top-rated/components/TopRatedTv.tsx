"use client";

import MovieList from "@/components/MovieList";
import { useTopRatedTv } from "@/hooks/useTv";
import React, { useState } from "react";
import ReactPaginate from "react-paginate"

const TopRatedTv = () => {
  const [page, setPage] = useState<number>(1);
  const { topRatedTv, loadingTopRatedTv, errorTopRatedTv } = useTopRatedTv(page);

  return (
    <>
      <MovieList
        title="Top Rated"
        data={topRatedTv}
        isLoading={loadingTopRatedTv}
        isError={errorTopRatedTv}
        type="tv"
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(topRatedTv?.total_pages)}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        className="flex w-full justify-center gap-x-4 md:gap-x-8 text-sm md:text-base pb-16 items-center"
        activeClassName="border px-2 py-1 rounded-md"
      />
    </>
  );
};

export default TopRatedTv;
