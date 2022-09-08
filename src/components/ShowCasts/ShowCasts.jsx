import useQueryByID from '../../hooks/useQueryByID'
import { getShowCastByID } from '../../api/showsApi'
import CastsCard from '../CastsCard'

const ShowCasts = ({ id }) => {
  const { data, isLoading, isError } = useQueryByID(
    'showCasts',
    id,
    getShowCastByID
  )

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 auto-rows-[1fr]'>
      {data?.map((cast) => (
        <div key={cast.id}>
          <CastsCard {...cast} />
        </div>
      ))}
    </div>
  )
}

export default ShowCasts
