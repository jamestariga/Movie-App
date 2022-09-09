import useQueryByID from '../../hooks/useQueryByID'
import { getMovieCastByID } from '../../api/movieApi'
import CastsCard from '../CastsCard'

const Casts = ({ id }) => {
  const { data, isLoading, isError } = useQueryByID(
    'movieCasts',
    id,
    getMovieCastByID
  )

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 auto-rows-[1fr]'>
      {data?.map((cast) => (
        <div key={cast.cast_id}>
          <CastsCard {...cast} />
        </div>
      ))}
    </div>
  )
}

export default Casts
