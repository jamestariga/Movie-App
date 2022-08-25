import { useQuery } from '@tanstack/react-query'
import UpcomingCard from '../../components/UpcomingCard'

const Upcoming = (props) => {
  const { fetchData, dataName } = props
  const { data, error, isLoading } = useQuery([dataName], fetchData)

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
