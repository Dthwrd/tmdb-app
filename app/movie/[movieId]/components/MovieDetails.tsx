"use client"

import React from "react";


import { useRecommendationMovies } from "@/hooks/useMovie";
import { usePathname } from "next/navigation";
import { usePersonList } from "@/hooks/usePerson";
import Carousel from "@/components/carousel/Carousel";
import Details from "@/components/Details";
import PersonCarousel from "@/components/carousel/PersonCarousel";

const MovieDetails = ({ movieId }: { movieId: string }) => {
  const pathname = usePathname();
  const type = pathname.split("/")[1];

  const { persons, loadingPersons, errorPersons } = usePersonList(
    movieId,
    type
  );

  const { recommendation, loadingRecommendation, errorRecommendation } =
    useRecommendationMovies(movieId);

  return (
    <div>
      <Details movieId={movieId} type="movie" />
      <PersonCarousel
        title="Actor List"
        data={persons}
        isLoading={loadingPersons}
        isError={errorPersons}
        type="person"
      />
      {recommendation?.results.length !== 0 ? <Carousel
        data={recommendation}
        isLoading={loadingRecommendation}
        isError={errorRecommendation}
        title="Recommendation"
        type="movie"
      /> : ""}
    </div>
  );
};

export default MovieDetails;
