import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const fetcher = async (url: string, page?: number) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${url}`,
    params: {language: 'en-US', page: page},
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${API_KEY}`,
    },
  };

  const res = await axios.request(options);

  return res.data;
};
