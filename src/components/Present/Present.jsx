import useQueryByID from '../../hooks/useQueryByID'
import { getAllMoviesByPersonID } from '../../api/peopleApi'
import { Link } from 'react-router-dom'

const Present = ({ id }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQueryByID('personMovies', id, getAllMoviesByPersonID)

  return (
    <>
      <div className='grid md:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 py-4 lg:p-8'>
        {movies?.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className='flex flex-col items-center'>
              <div className='px-4 rounded-2xl overflow-hidden hover:scale-[1.1] transition'>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className='w-full rounded-2xl shadow-blue-600 shadow-lg'
                />
                <h1 className='text-white text-center text-base xl:text-xl relative bottom-20'>
                  {movie.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Present
