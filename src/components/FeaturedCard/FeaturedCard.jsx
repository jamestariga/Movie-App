import GenreID from '../../utils/GenreID'
import { Link } from 'react-router-dom'

const FeaturedCard = (props) => {
  const {
    title,
    name,
    overview,
    backdrop_path,
    poster_path,
    genre_ids,
    id,
    media,
  } = props

  const poster = `https://image.tmdb.org/t/p/original${poster_path}`
  const backdrop = `https://image.tmdb.org/t/p/original${backdrop_path}`

  const displayGenre = () => {
    const genre = genre_ids.map((genre) =>
      GenreID.find((g) => g.value === genre)
    )

    return genre.map((g) => (
      <div key={g.value}>
        <div className='flex bg-blurred p-2'>
          <h1 className='text-white text-sm'>{g.title}</h1>
        </div>
      </div>
    ))
  }

  return (
    <>
      <Link to={`/${media}/${id}`}>
        <div className='pr-8'>
          <div
            className='flex justify-start space-x-10 lg:w-auto w-full min-h-[5rem] h-[20rem] rounded-xl shadow-lg md:py-6 md:px-10 py-2 px-6 overflow-hidden cursor-pointer'
            style={{
              backgroundImage: `url(${
                backdrop_path === null ? poster : backdrop
              })`,
              backgroundSize: 'cover',
            }}
          >
            <div className='hidden sm:flex max-w-xs w-2/5 2xl:2/5 4xl:w-3/12 shadow-xl rounded-3xl overflow-hidden'>
              {poster_path ? (
                <img src={poster} alt={title || name} className='w-full' />
              ) : (
                <img src={backdrop} alt={title || name} className='h-full' />
              )}
            </div>
            <div className='flex flex-col w-4/6 2xl:w-3/5 4xl:w-9/12 space-y-6'>
              <h1 className='text-xl text-gray-100 font-extrabold'>
                {title || name}
              </h1>
              <div className='max-h-40 overflow-hidden'>
                <p className='text-gray-100 text-left'>{overview}</p>
              </div>
              <div className='flex flex-wrap gap-4'>{displayGenre()}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default FeaturedCard
