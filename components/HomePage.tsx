"use client";

import React from "react";
import Backdrop from "./Backdrop";
import Carousel from "./carousel/Carousel";
import { useNowPlayingMovies, useUpcomingMovies } from "@/hooks/useMovie";
import { usePopularTv, useTopRatedTv } from "@/hooks/useTv";
import WatchProvider from "./WatchProvider";

const HomePage = () => {
  const { upcoming, loadingUpcoming, errorUpcoming } = useUpcomingMovies();
  const { nowPlaying, loadingNowPlaying, errorNowPlaying } =
    useNowPlayingMovies();
  const { popularTv, loadingPopularTv, errorPopularTv } = usePopularTv();
  const { topRatedTv, loadingTopRatedTv, errorTopRatedTv } = useTopRatedTv();

  return (
    <main className="w-screen md:gap-y-8 xl:gap-y-16">
      <Backdrop />
      <WatchProvider />
      <Carousel
        title="Now Playing"
        data={upcoming}
        isLoading={loadingUpcoming}
        isError={errorUpcoming}
        type="movie"
      />
      <Carousel
        title="Upcoming Movies"
        data={nowPlaying}
        isLoading={loadingNowPlaying}
        isError={errorNowPlaying}
        type="movie"
      />
      <Carousel
        title="Popular"
        data={popularTv}
        isLoading={loadingPopularTv}
        isError={errorPopularTv}
        type="tv"
      />
      <Carousel
        title="Top Rated"
        data={topRatedTv}
        isLoading={loadingTopRatedTv}
        isError={errorTopRatedTv}
        type="tv"
      />
    </main>
  );
};

export default HomePage;
