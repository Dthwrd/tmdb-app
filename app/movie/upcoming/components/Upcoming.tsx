"use client";

import MovieList from "@/components/MovieList";
import { useUpcomingMovies } from "@/hooks/useMovie";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Upcoming = () => {
  const [page, setPage] = useState<number>(1);
  const { upcoming, loadingUpcoming, errorUpcoming } = useUpcomingMovies(page);

  return (
    <div>
      <MovieList
        title="Upcoming"
        data={upcoming}
        isLoading={loadingUpcoming}
        isError={errorUpcoming}
        type="movie"
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(upcoming?.total_pages)}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        className="flex w-full justify-center gap-x-4 md:gap-x-8 text-sm md:text-base pb-16 items-center"
        activeClassName="border px-2 py-1 rounded-md"
      />
    </div>
  );
};

export default Upcoming;
