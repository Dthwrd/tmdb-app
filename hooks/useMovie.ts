import { fetcher } from "@/utils/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useUpcomingMovies = (page?: number) => {
  const {
    data: upcoming,
    isLoading: loadingUpcoming,
    isError: errorUpcoming,
  } = useQuery({
    queryKey: ["upcoming", page],
    queryFn: () => fetcher(`movie/upcoming`, page ?? 1),
  });

  return { upcoming, loadingUpcoming, errorUpcoming };
};

export const useNowPlayingMovies = (page?: number) => {
  const {
    data: nowPlaying,
    isLoading: loadingNowPlaying,
    isError: errorNowPlaying,
  } = useQuery({
    queryKey: ["now_playing", page],
    queryFn: () => fetcher(`movie/now_playing`, page ?? 1),
  });

  return { nowPlaying, loadingNowPlaying, errorNowPlaying };
};

export const usePopularMovies = (page: number) => {
  const {
    data: popular,
    isLoading: loadingPopular,
    isError: errorPopular,
  } = useQuery({
    queryKey: ["popular_movies", page],
    queryFn: () => fetcher(`movie/popular`, page ?? 1),
  });

  return { popular, loadingPopular, errorPopular };
};

export const useTopRatedMovies = (page: number) => {
  const {
    data: topMovies,
    isLoading: loadingTopMovies,
    isError: errorTopMovies,
  } = useQuery({
    queryKey: ["top_rated_movies", page],
    queryFn: () => fetcher(`movie/top_rated`, page ?? 1),
  });

  return { topMovies, loadingTopMovies, errorTopMovies };
};

export const useRecommendationMovies = (movie_id: string) => {
  const {
    data: recommendation,
    isLoading: loadingRecommendation,
    isError: errorRecommendation,
  } = useQuery({
    queryKey: ["recommendation_movies", movie_id],
    queryFn: () => fetcher(`movie/${movie_id}/recommendations`),
  });

  return { recommendation, loadingRecommendation, errorRecommendation };
};

export const useMovieDetails = (movie_id: string) => {
  const {
    data: movie,
    isLoading: loadingMovie,
    isError: errorMovie,
  } = useQuery({
    queryKey: ["movie", movie_id],
    queryFn: () => fetcher(`movie/${movie_id}`),
    enabled: movie_id !== "0",
  });

  return { movie, loadingMovie, errorMovie };
};

export const useUpcomingTrailer = (movie_id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie_trailer", movie_id],
    queryFn: () => fetcher(`movie/${movie_id}/videos`),
    enabled: movie_id !== "0",
  });

  return { data, isLoading, isError };
};
