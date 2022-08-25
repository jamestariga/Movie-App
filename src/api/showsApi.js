import axios from 'axios'

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv',
})

const { VITE_APP_TMDB_KEY } = import.meta.env

export const getPopularShows = async () => {
  const response = await movieApi.get(
    `/popular?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}

export const getTopRatedShows = async () => {
  const response = await movieApi.get(
    `/top_rated?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  const topRatedShows = response.data.results.slice(
    0,
    response.data.results.length / 4
  )

  return topRatedShows
}

export const getCurrentShows = async () => {
  const response = await movieApi.get(
    `/on_the_air?api_key=${VITE_APP_TMDB_KEY}&language=en-US&page=2`
  )

  console.log(response.data.results)

  return response.data.results
}

export const getAiringTodayShows = async () => {
  const response = await movieApi.get(
    `/airing_today?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}
