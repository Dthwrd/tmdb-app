import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const createOptions = (url: string, params?: number) => {
  return {
    method: "GET",
    url: `https://api.themoviedb.org/3/trending/${url}`,
    params: { language: "en-US", page: params },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};

export const fetchTrendingData = async (url: string, params?: number) => {
  const options = createOptions(url, params);
  const res = await axios.request(options);

  return res.data;
};
