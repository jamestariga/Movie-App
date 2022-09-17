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
      <div className='grid grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 px-8'>
        {movies?.map((movie) => (
          <div
            key={movie.id}
            className='flex flex-col items-center p-4 space-y-4 lg:space-y-0'
          >
            <div className='lg:p-6 xl:p-8 rounded-2xl overflow-hidden hover:scale-[1.1] transition'>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className='w-full rounded-2xl'
              />
            </div>
            <h1 className='text-white text-xl'>{movie.title}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default Present
