import { useQuery } from '@tanstack/react-query'
import { getUpcomingMovies } from '../../api/movieApi'
import UpcomingCard from '../../components/UpcomingCard'

const Upcoming = () => {
  const { data, error, isLoading } = useQuery(['upcoming'], getUpcomingMovies)

  return (
    <>
      <div className='grid sm:grid-cols-2 2xl:flex 2xl:flex-col items-start justify-start'>
        {data?.map((upcoming) => (
          <UpcomingCard key={upcoming.id} {...upcoming} />
        ))}
      </div>
    </>
  )
}

export default Upcoming
