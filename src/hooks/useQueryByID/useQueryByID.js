import { useQuery } from '@tanstack/react-query'

const useQueryByID = (query, id, callback) => {
  return useQuery([query, id], () => callback(id), {
    enabled: !!id,
  })
}

export default useQueryByID
