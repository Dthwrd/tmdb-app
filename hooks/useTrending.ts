import { fetcher } from "@/utils/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useTrending = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trending"],
    queryFn: () => fetcher("trending/all/day"),
  });

  return { data, isLoading, isError };
};
