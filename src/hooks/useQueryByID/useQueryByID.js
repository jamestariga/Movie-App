import { useQuery } from '@tanstack/react-query'
import { getMovieByID } from '../../api/movieApi'

const useQueryByID = (id) => {
  return useQuery(['movie', id], () => getMovieByID(id), {
    enabled: !!id,
  })
}

export default useQueryByID
