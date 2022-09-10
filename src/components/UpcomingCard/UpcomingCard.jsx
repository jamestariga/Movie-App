const UpcomingCard = (props) => {
  const { title, overview, backdrop_path, poster_path } = props

  const poster = `https://image.tmdb.org/t/p/original${poster_path}`
  const backdrop = `https://image.tmdb.org/t/p/original${backdrop_path}`

  return (
    <>
      <div className='flex flex-col space-y-6 p-4'>
        <div className='rounded-3xl overflow-hidden'>
          {backdrop_path ? (
            <img src={backdrop} alt={title} className='w-full' />
          ) : (
            <img src={poster} alt={title} className='h-full' />
          )}
        </div>
        <h1 className='text-white lg:text-2xl font-bold'>{title}</h1>
        <p className='text-gray-400 text-sm xl:text-lg'>{overview}</p>
      </div>
    </>
  )
}

export default UpcomingCard
