import { useQuery, useIsFetching } from '@tanstack/react-query'
import UpcomingCard from '../../components/UpcomingCard'
import { UpcomingCardSkeleton } from '../CardSkeleton/CardSkeleton'

const Upcoming = (props) => {
  const { fetchData, dataName, media } = props
  const { data, error, isLoading } = useQuery([dataName], fetchData)

  const isFetching = useIsFetching()

  return (
    <>
      {isLoading && isFetching && <UpcomingCardSkeleton cards={6} />}
      <div className='grid sm:grid-cols-2 2xl:flex 2xl:flex-col items-start justify-start'>
        {data?.map((upcoming) => (
          <UpcomingCard key={upcoming.id} media={media} {...upcoming} />
        ))}
      </div>
    </>
  )
}

export default Upcoming
