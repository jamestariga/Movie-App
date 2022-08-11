import axios from 'axios'

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

export const getTrendingMovies = async () => {
  const { VITE_APP_TMDB_KEY } = import.meta.env

  const response = await movieApi.get(
    `/movie/upcoming?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}
