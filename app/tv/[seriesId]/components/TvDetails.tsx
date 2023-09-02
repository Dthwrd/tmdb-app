"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { useRecommendationTv, useTvDetails } from "@/hooks/useTv";
import { usePersonList } from "@/hooks/usePerson";
import Carousel from "@/components/carousel/Carousel";
import SeasonsCarousel from "@/components/carousel/SeasonsCarousel";
import Details from "@/components/Details";
import PersonCarousel from "@/components/carousel/PersonCarousel";

const TvDetails = ({ series_id }: { series_id: string }) => {
  const pathname = usePathname();
  const type = pathname.split("/")[1];

  const { tvDetails, loadingTvDetails, errorTvDetails } =
    useTvDetails(series_id);

  const { persons, loadingPersons, errorPersons } = usePersonList(
    series_id,
    type
  );

  const { recommendationTv, loadingRecommendationsTv, errorRecommendationsTv } =
    useRecommendationTv(series_id);

  return (
    <div>
      <Details movieId={series_id} type="tv" />
      <PersonCarousel
        title="Actor List"
        data={persons}
        isLoading={loadingPersons}
        isError={errorPersons}
        type="person"
      />
      <Carousel
        data={recommendationTv}
        isLoading={loadingRecommendationsTv}
        isError={errorRecommendationsTv}
        title="Recommendation"
        type="tv"
      />
      <SeasonsCarousel
        title="Seasons"
        type="season"
        data={tvDetails}
        isLoading={loadingTvDetails}
        isError={errorTvDetails}
      />
    </div>
  );
};

export default TvDetails;
