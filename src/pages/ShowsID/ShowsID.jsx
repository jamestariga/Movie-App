import { useParams } from 'react-router-dom'
import useQueryByID from '../../hooks/useQueryByID'
import { getShowByID } from '../../api/showsApi'
import ShowCasts from '../../components/ShowCasts'

const ShowsID = () => {
  const { id } = useParams()

  const { data, isLoading, isError } = useQueryByID('showByID', id, getShowByID)

  const displayGenre = () => {
    const genre = data?.genres
      .filter(
        (genre, index, self) =>
          index === self.findIndex((t) => t.label === genre.label)
      )
      .map((genre) => (
        <div key={genre.id}>
          <div className='flex bg-blurred p-2 hover:bg-blue-500 transition cursor-pointer'>
            <h1 className='text-white text-sm'>{genre.name}</h1>
          </div>
        </div>
      ))

    return genre
  }

  const displayYear = () => {
    const year = data?.first_air_date.split('-')[0]
    return year
  }

  return (
    <>
      <header className='flex flex-col'>
        <div className='flex flex-col justify-center items-center px-8 space-y-8'>
          <div className='flex flex-col xl:flex-row justify-center w-full 3xl:w-3/4 space-y-8 bg-blurred'>
            <div className='w-full sm:flex xl:w-8/12 3xl:w-3/4 shadow-xl overflow-hidden'>
              <img
                src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
                alt={data?.name}
                className='w-full'
              />
            </div>
            <div className='flex flex-col w-full xl:w-1/2 3xl:w-3/4 justify-start px-4 sm:p-8 space-y-4'>
              <h1 className='text-xl sm:text-2xl font-bold text-white'>
                {data?.name}
              </h1>
              <h1 className='text-xl font-bold text-white'>{displayYear()}</h1>
              <div className='flex flex-wrap gap-4'>{displayGenre()}</div>
              <p className='text-sm sm:text-base text-white'>
                {data?.overview}
              </p>
            </div>
          </div>
          <div className='px-8'>
            <h1 className='text-2xl font-bold text-white'>Casts:</h1>
            <ShowCasts id={id} />
          </div>
        </div>
      </header>
    </>
  )
}

export default ShowsID
