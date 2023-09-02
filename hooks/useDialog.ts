import { fetcher } from "@/utils/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useDialogDetails = (movie_id: string, type: string) => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["details", movie_id],
    queryFn: async () => {
      if (type === "movie") {
        const movieData = await fetcher(`movie/${movie_id}`);
        return movieData;
      } else {
        const tvData = await fetcher(`tv/${movie_id}`);
        return tvData;
      }
    },
    enabled: movie_id != "0",
  });

  return { data, isLoading, isError, status };
};

export const useDialogTrailer = (movie_id: string, type: string) => {
  const {
    data: trailer,
    isLoading: loadTrailer,
    isError: trailerError,
  } = useQuery({
    queryKey: ["trailer", movie_id],
    queryFn: async () => {
      if (type === "movie") {
        const movieData = await fetcher(`movie/${movie_id}/videos`);
        return movieData;
      } else {
        const tvData = await fetcher(`tv/${movie_id}/videos`);
        return tvData;
      }
    },
    enabled: movie_id != "0",
  });

  return { trailer, loadTrailer, trailerError };
};
