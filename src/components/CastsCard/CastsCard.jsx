import { Link } from 'react-router-dom'

const unknown = new URL('/image/unknown.jpg', import.meta.url)

const CastsCard = (props) => {
  const { name, character, profile_path } = props

  return (
    <>
      <Link to={`/person/${props.id}`}>
        <div className='flex flex-col items-center p-4 space-y-4 lg:space-y-0 max-w-[18rem]'>
          <div className='w-full rounded-2xl overflow-hidden hover:scale-[1.1] transition'>
            <img
              src={
                profile_path !== null
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : unknown
              }
              alt={name}
              className='max-h-[18rem] max-w-[18rem] w-full rounded-2xl'
            />
          </div>
          <h2 className='text-sm sm:text-base text-white lg:pt-8'>
            <strong> {name} </strong> as {character}
          </h2>
        </div>
      </Link>
    </>
  )
}

export default CastsCard
