import Unknown from '../../../public/image/unknown.png'

const CastsCard = (props) => {
  const { name, character, profile_path } = props

  return (
    <>
      <div className='flex flex-col space-y-6 p-4'>
        <div className='w-1/2 rounded-2xl overflow-hidden hover:scale-[1.1] transition'>
          <img
            src={
              profile_path !== null
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : Unknown
            }
            alt={name}
            className='min-h-[14rem] w-full'
          />
        </div>
        <h2>
          <strong> {name} </strong> as {character}
        </h2>
      </div>
    </>
  )
}

export default CastsCard
