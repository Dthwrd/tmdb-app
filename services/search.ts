import axios from 'axios';

export const searchData = async (searchQuery: string) => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/multi',
    params: {query: searchQuery, page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmIxNWIwMzczZmZmODcxZWRiYzlhYTIwZWZhYjNiMSIsInN1YiI6IjY0YjYzMjUyMzc4MDYyMDBhZDE2MWEyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YedbEyviTWng8tz959ZRYomU0PQsItqX08tU6WymeyM'
    }
  };

  const res = await axios.request(options)
  return res.data
}