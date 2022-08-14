import React from 'react'

const Card = (props) => {
  const { title, overview, backdrop_path, poster_path } = props

  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`
  const backdrop = `https://image.tmdb.org/t/p/original${backdrop_path}`

  return (
    <>
      <div
        className='flex justify-center space-x-6 lg:w-4/6 w-full min-h-[5rem] h-[20rem] rounded-xl shadow-lg md:py-6 md:px-10 py-2 px-6 overflow-hidden'
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: 'cover',
        }}
      >
        <div className='hidden md:flex max-w-xs w-1/2 shadow-xl rounded-3xl overflow-hidden'>
          {backdrop_path ? (
            <img src={backdrop} alt={title} className='h-full' />
          ) : (
            <img src={poster} alt={title} />
          )}
        </div>
        <div className='flex flex-col w-1/2 space-y-6'>
          <h1 className='text-xl text-gray-300 font-extrabold'>{title}</h1>
          <h1 className='text-sm text-gray-300'>{overview}</h1>
        </div>
      </div>
    </>
  )
}

export default Card
