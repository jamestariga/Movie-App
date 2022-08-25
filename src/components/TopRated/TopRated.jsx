import { useQuery } from '@tanstack/react-query'

const TopRated = (props) => {
  const { fetchData, dataName } = props
  const { data, error, isLoading } = useQuery([dataName], fetchData)

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center lg:items-center'>
        {data?.map((topRated) => (
          <div key={topRated.id} className='flex flex-col space-y-6 p-4'>
            <div className='rounded-2xl overflow-hidden hover:scale-[1.1] transition'>
              {topRated.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${topRated.poster_path}`}
                  alt={topRated.title}
                  className='w-[500px]'
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original${topRated.backdrop_path}`}
                  alt={topRated.title}
                  className='h-full'
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TopRated
