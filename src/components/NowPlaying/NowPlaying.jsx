import { useQuery } from '@tanstack/react-query'
import FeaturedCard from '../FeaturedCard'

const NowPlaying = ({ getNowPlaying }) => {
  const { data, error, isLoading } = useQuery(['nowPlaying'], getNowPlaying)

  return <div>NowPlaying</div>
}

export default NowPlaying
