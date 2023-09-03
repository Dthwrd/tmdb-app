import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const searchData = async (searchQuery: string) => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/multi',
    params: {query: searchQuery, page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };

  const res = await axios.request(options)
  return res.data
}