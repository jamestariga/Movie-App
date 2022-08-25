import axios from 'axios'

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

const { VITE_APP_TMDB_KEY } = import.meta.env

export const getTrendingMovies = async () => {
  const response = await movieApi.get(
    `/movie/popular?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}

export const getUpcomingMovies = async () => {
  const response = await movieApi.get(
    `/movie/upcoming?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  const upcomingMovies = response.data.results.slice(
    0,
    response.data.results.length / 3
  )

  console.log(upcomingMovies)

  return upcomingMovies
}

export const getTopRatedMovies = async () => {
  const response = await movieApi.get(
    `/movie/top_rated?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  const topRatedMovies = response.data.results.slice(
    0,
    response.data.results.length / 4
  )

  console.log(topRatedMovies)

  return topRatedMovies
}

export const getNowPlayingMovies = async () => {
  const response = await movieApi.get(
    `/movie/now_playing?api_key=${VITE_APP_TMDB_KEY}&language=en-US&page=2`
  )

  console.log(response.data.results)

  return response.data.results
}
