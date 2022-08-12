import React from 'react'

const Card = (props) => {
  const { title, overview, backdrop_path, poster_path } = props

  return (
    <>
      <div>
        <h1>{title}</h1>
        {backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={title}
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        )}
        <p>{overview}</p>
      </div>
    </>
  )
}

export default Card
