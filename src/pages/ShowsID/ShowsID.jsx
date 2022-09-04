import { useParams } from 'react-router-dom'
import useQueryByID from '../../hooks/useQueryByID'
import { getShowByID } from '../../api/showsApi'
import ShowCasts from '../../components/ShowCasts'

const ShowsID = () => {
  const { id } = useParams()

  const { data, isLoading, isError } = useQueryByID('showByID', id, getShowByID)

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

  displayGenre()

  return (
    <>
      <header className='flex flex-col space-y-8'>
        <div className='flex flex-col items-center justify-center w-full space-y-8 lg:pr-10 px-8'>
          <h1 className='text-xl font-bold text-white'>{data?.name}</h1>
          <div className='sm:flex w-1/2 shadow-xl rounded-3xl overflow-hidden'>
            <img
              src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
              alt={data?.name}
            />
          </div>
          <div className='flex flex-wrap gap-4'>{displayGenre()}</div>
          <p className='text-lg text-white'>{data?.overview}</p>
        </div>
        <ShowCasts id={id} />
      </header>
    </>
  )
}

export default ShowsID
