import { useParams } from 'react-router-dom'
import useQueryByID from '../../hooks/useQueryByID'
import { getMovieByID } from '../../api/movieApi'
import Casts from '../../components/Casts/Casts'

const ID = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useQueryByID(
    'movieByID',
    id,
    getMovieByID
  )

  const displayGenre = () => {
    const genre = data?.genres.map((genre) => (
      <div key={genre.id}>
        <div className='flex bg-blurred p-2 hover:bg-blue-500 transition cursor-pointer'>
          <h1 className='text-white text-sm'>{genre.name}</h1>
        </div>
      </div>
    ))

    return genre
  }

  return (
    <>
      <header className='flex flex-col space-y-8'>
        <div className='flex flex-col items-center justify-center w-full space-y-8 lg:pr-10 px-8'>
          <h1 className='text-xl font-bold text-white'>{data?.title}</h1>
          <div className='sm:flex w-1/2 shadow-xl rounded-3xl overflow-hidden'>
            <img
              src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
              alt={data?.title}
            />
          </div>
          <div className='flex flex-wrap gap-4'>{displayGenre()}</div>
          <p className='text-lg text-white'>{data?.overview}</p>
        </div>
        <Casts id={id} />
      </header>
    </>
  )
}

export default ID
