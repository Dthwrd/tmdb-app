"use client"

import MovieList from "@/components/MovieList";
import { usePopularTv } from "@/hooks/useTv";
import React, { useState } from "react";
import ReactPaginate from "react-paginate"

const PopularTv = () => {
  const [page, setPage] = useState<number>(1);
  const { popularTv, loadingPopularTv, errorPopularTv } = usePopularTv(page);

  return (
    <>
      <MovieList
        title="Popular"
        data={popularTv}
        isLoading={loadingPopularTv}
        isError={errorPopularTv}
        type="tv"
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
    </>
  );
};

export default PopularTv;
