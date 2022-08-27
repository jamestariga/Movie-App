import { useParams } from 'react-router-dom'
import useQueryByID from '../../hooks/useQueryByID'
import { getMovieByID, getCastByID } from '../../api/movieApi'

const Casts = ({ id }) => {
  const {
    data: cast,
    isLoading: castLoading,
    isError: castError,
  } = useQueryByID('casts', id, getCastByID)

  return (
    <div className='flex flex-wrap '>
      {cast?.map((cast) => (
        <h3 key={cast.cast_id}>{cast.name}</h3>
      ))}
    </div>
  )
}

export default Casts
