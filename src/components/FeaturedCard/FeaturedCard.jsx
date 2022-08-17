import React from 'react'

const FeaturedCard = (props) => {
  const { title, overview, backdrop_path, poster_path } = props

  const poster = `https://image.tmdb.org/t/p/original${poster_path}`
  const backdrop = `https://image.tmdb.org/t/p/original${backdrop_path}`

  return (
    <>
      <div
        className='flex justify-start space-x-10 lg:w-auto w-full min-h-[5rem] h-[20rem] rounded-xl shadow-lg md:py-6 md:px-10 py-2 px-6 overflow-hidden'
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: 'cover',
        }}
      >
        <div className='hidden sm:flex max-w-xs w-2/5 2xl:2/5 4xl:w-3/12 shadow-xl rounded-3xl overflow-hidden'>
          {backdrop_path ? (
            <img src={poster} alt={title} className='w-full' />
          ) : (
            <img src={backdrop} alt={title} className='h-full' />
          )}
        </div>
        <div className='flex flex-col w-4/6 2xl:w-3/5 4xl:w-9/12 space-y-6'>
          <h1 className='text-xl text-gray-100 font-extrabold'>{title}</h1>
          <h1 className='text-sm text-gray-100 text-left'>{overview}</h1>
        </div>
      </div>
    </>
  )
}

export default FeaturedCard
