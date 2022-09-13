import useQueryByID from '../../hooks/useQueryByID'
import { getAllMoviesByPersonID } from '../../api/peopleApi'

const Present = ({ id }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQueryByID('personMovies', id, getAllMoviesByPersonID)

  return (
    <>
      <div>
        {movies?.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </>
  )
}

export default Present
