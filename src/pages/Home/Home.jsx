import { useQuery } from '@tanstack/react-query'
import { getTrendingMovies } from '../../api/movieApi'
import SideNavigation from '../../components/SideNavigation/'

const Home = () => {
  const { data, error, isLoading } = useQuery(['trending'], getTrendingMovies)

  return (
    <>
      <header className='flex'>
        <div className='hidden lg:flex grow items-center flex-col w-auto pt-4'>
          <div className='flex w-1/2'>
            <h1 className='text-xl text-gray-400'>Menu</h1>
          </div>
          <div className='px-10'>
            <SideNavigation />
          </div>
        </div>
        <div className='flex grow flex-col justify-start w-3/6 px-10'>
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
      </header>
    </>
  )
}

export default Home
