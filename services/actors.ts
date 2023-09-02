import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const createOptions = (url: string) => {
  return {
    method: "GET",
    url: `https://api.themoviedb.org/3/person/${url}`,
    params: { language: "en-US"},
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};

export const fetchPersonData = async (
  url: string,
) => {
  const options = createOptions(url);
  const res = await axios.request(options);

  return res.data;
};