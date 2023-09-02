import { fetcher } from "@/utils/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useAiringTv = (page?: number) => {
  const {
    data: airing,
    isLoading: loadingAiring,
    isError: errorAiring,
  } = useQuery({
    queryKey: ["airing", page],
    queryFn: () => fetcher(`tv/airing`, page ?? 1),
  });

  return { airing, loadingAiring, errorAiring };
};

export const useTopRatedTv = (page?: number) => {
  const {
    data: topRatedTv,
    isLoading: loadingTopRatedTv,
    isError: errorTopRatedTv,
  } = useQuery({
    queryKey: ["top_rated_tv", page],
    queryFn: () => fetcher(`tv/top_rated`, page ?? 1),
  });

  return { topRatedTv, loadingTopRatedTv, errorTopRatedTv };
};

export const useTvDetails = (series_id: string) => {
  const {
    data: tvDetails,
    isLoading: loadingTvDetails,
    isError: errorTvDetails,
  } = useQuery({
    queryKey: ["tv_details", series_id],
    queryFn: () => fetcher(`tv/${series_id}`),
    enabled: series_id != "0",
  });

  return { tvDetails, loadingTvDetails, errorTvDetails };
};

export const useRecommendationTv = (series_id: string) => {
  const {
    data: recommendationTv,
    isLoading: loadingRecommendationsTv,
    isError: errorRecommendationsTv,
  } = useQuery({
    queryKey: ["recommendation_tv", series_id],
    queryFn: () => fetcher(`tv/${series_id}/recommendations`),
    enabled: series_id != "0",
  });

  return { recommendationTv, loadingRecommendationsTv, errorRecommendationsTv };
};

export const useSeasonsDetail = (season_id: string, season_number: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["season_details", season_id, season_number],
    queryFn: () => fetcher(`tv/${season_id}/season/${season_number}`),
    enabled: season_id != "0" && season_number != "0",
  });

  return { data, isLoading, isError };
};

export const usePopularTv = (page?: number) => {
  const {
    data: popularTv,
    isLoading: loadingPopularTv,
    isError: errorPopularTv,
  } = useQuery({
    queryKey: ["popular_tv", page],
    queryFn: () => fetcher(`trending/tv/day`, page ?? 1),
  });

  return { popularTv, loadingPopularTv, errorPopularTv };
};
