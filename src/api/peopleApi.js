import axios from 'axios'

const peopleApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/person',
})

const { VITE_APP_TMDB_KEY } = import.meta.env

export const getPersonByID = async (id) => {
  if (id === null) return

  const response = await peopleApi.get(
    `/${id}?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data)

  return response.data
}

export const getAllMoviesByPersonID = async (id) => {
  if (id === null) return

  const response = await peopleApi.get(
    `/${id}/movie_credits?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  const topAppearances = response.data.cast
    .filter((movie) => movie.popularity > 50)
    .reduce((acc, curr) => {
      if (acc.length < 12) {
        acc.push(curr)
      }
      return acc
    }, [])
    .reverse()

  console.log(topAppearances)

  return topAppearances
}
