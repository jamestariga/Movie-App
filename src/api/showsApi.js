import axios from 'axios'

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

const { VITE_APP_TMDB_KEY } = import.meta.env

export const getPopularShows = async () => {
  const response = await movieApi.get(
    `/shows/popular?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}

export const getTopRatedShows = async () => {
  const response = await movieApi.get(
    `/shows/top_rated?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}

export const getCurrentShows = async () => {
  const response = await movieApi.get(
    `/shows/on_the_air?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}

export const getAiringTodayShows = async () => {
  const response = await movieApi.get(
    `/shows/airing_today?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}
