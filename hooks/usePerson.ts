import { fetcher } from "@/utils/fetcher";
import { useQuery } from "@tanstack/react-query";

export const usePersonList = (data_id: string, type: string) => {
  const {
    data: persons,
    isLoading: loadingPersons,
    isError: errorPersons,
  } = useQuery({
    queryKey: ["persons", data_id],
    queryFn: async () => {
      if (type === "movie") {
        const moviePersons = await fetcher(`movie/${data_id}/credits`);
        return moviePersons;
      } else {
        const tvPersons = await fetcher(`tv/${data_id}/credits`);
        return tvPersons;
      }
    },
    enabled: data_id != "0",
  });

  return { persons, loadingPersons, errorPersons };
};

export const usePersonDetails = (person_id: string) => {
  const {
    data: person,
    isLoading: loadingPerson,
    isError: errorPerson,
  } = useQuery({
    queryKey: ["person", person_id],
    queryFn: () => fetcher(`person/${person_id}`),
    enabled: person_id !== "0",
  });

  return { person, loadingPerson, errorPerson };
};

export const usePersonCredits = (person_id: string) => {
  const {
    data: personCredits,
    isLoading: loadingPersonCredits,
    isError: errorPersonCredits,
  } = useQuery({
    queryKey: ["person_credits", person_id],
    queryFn: () => fetcher(`person/${person_id}/combined_credits`),
    enabled: person_id !== "0",
  });

  return { personCredits, loadingPersonCredits, errorPersonCredits };
};
