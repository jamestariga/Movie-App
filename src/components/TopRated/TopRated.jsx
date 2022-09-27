import { useQuery, useIsFetching } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { SmallCardSkeleton } from '../CardSkeleton/CardSkeleton'

const TopRated = (props) => {
  const { fetchData, dataName, media } = props
  const { data, error, isLoading } = useQuery([dataName], fetchData)

  const isFetching = useIsFetching()

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center lg:items-start'>
        {isLoading && isFetching && <SmallCardSkeleton cards={5} />}
        {data?.map((topRated) => (
          <div
            key={topRated.id}
            className='flex flex-col space-y-6 p-4 h-full overflow-hidden w-full'
          >
            <Link to={`/${media}/${topRated.id}`}>
              <div className='rounded-2xl overflow-hidden hover:scale-[1.1] transition h-full'>
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
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default TopRated
