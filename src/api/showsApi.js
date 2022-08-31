import axios from 'axios'

const showsApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv',
})

const { VITE_APP_TMDB_KEY } = import.meta.env

export const getPopularShows = async () => {
  const response = await showsApi.get(
    `/popular?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}

export const getTopRatedShows = async () => {
  const response = await showsApi.get(
    `/top_rated?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  const topRatedShows = response.data.results.slice(
    0,
    response.data.results.length / 4
  )

  return topRatedShows
}

export const getCurrentShows = async () => {
  const response = await showsApi.get(
    `/on_the_air?api_key=${VITE_APP_TMDB_KEY}&language=en-US&page=2`
  )

  console.log(response.data.results)

  return response.data.results
}

export const getAiringTodayShows = async () => {
  const response = await showsApi.get(
    `/airing_today?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data.results)

  return response.data.results
}

export const getShowByID = async (id) => {
  const response = await showsApi.get(
    `/${id}?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data)

  return response.data
}

export const getShowCastByID = async (id) => {
  if (id === null) return

  const response = await showsApi.get(
    `/${id}/credits?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  // Reduce the number of casts to a maximum of 10
  const casts = response.data.cast.reduce((acc, curr) => {
    if (acc.length < 12) {
      acc.push(curr)
    }
    return acc
  }, [])

  console.log(casts)

  return casts
}
