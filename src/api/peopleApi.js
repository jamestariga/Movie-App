import axios from 'axios'

const peopleApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

const { VITE_APP_TMDB_KEY } = import.meta.env

export const getPersonByID = async (id) => {
  if (id === null) return

  const response = await peopleApi.get(
    `/person/${id}?api_key=${VITE_APP_TMDB_KEY}&language=en-US`
  )

  console.log(response.data)

  return response.data
}
