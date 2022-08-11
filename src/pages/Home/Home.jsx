import { useQuery } from '@tanstack/react-query'
import { getTrendingMovies } from '../../api/movieApi'

const Home = () => {
  const { data, error, isLoading } = useQuery(['trending'], getTrendingMovies)

  return (
    <>
      <div className='flex'>
        <div className='flex grow justify-center w-1/6'>Menu</div>
        <div className='flex grow flex-col justify-start w-4/6 px-10'>
          <h1 className='text-3xl text-white font-bold'>Trending Movie🔥</h1>
          <div className='flex flex-col justify-start w-full gap-4 pt-10'>
            {data?.map((movie) => (
              <div key={movie.id}>
                <h2 className='text-xl '>{movie?.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className='flex grow justify-center w-4/12'>Upcoming</div>
      </div>
    </>
  )
}

export default Home
