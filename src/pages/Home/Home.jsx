import { useState } from 'react'
import {
  getTrendingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
} from '../../api/movieApi'
import {
  getPopularShows,
  getTopRatedShows,
  getCurrentShows,
  getAiringTodayShows,
} from '../../api/showsApi'
import useEventListener from '../../hooks/useEventListener'
import Carousel from '../../components/Carousel'
import Upcoming from '../../components/Upcoming'
import TopRated from '../../components/TopRated'

const Home = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEventListener('visibilitychange', handleVisibilityChange)

  return (
    <>
      <header className='flex flex-wrap lg:space-x-10'>
        <div className='flex grow flex-col lg:justify-start lg:items-start justify-center items-center w-full xl:w-full 2xl:w-7/12 px-6 lg:px-10 pb-10'>
          <h1 className='text-3xl text-white font-bold'>Trending Movies🔥</h1>
          <div className='flex flex-col justify-start w-full pt-10'>
            <Carousel
              isVisible={isVisible}
              isNeeded={true}
              dataName='trendingMovies'
              fetchData={getTrendingMovies}
            />
          </div>
          <h1 className='text-3xl text-white font-bold pt-10'>
            Top Rated Movies ⭐
          </h1>
          <div className='flex flex-col justify-start w-full pt-10'>
            <TopRated dataName='topRatedMovies' fetchData={getTopRatedMovies} />
          </div>
          <h1 className='text-3xl text-white font-bold pt-10'>
            Now Playing 🎬
          </h1>
          <div className='flex flex-col justify-start w-full pt-10'>
            <Carousel
              isVisible={isVisible}
              isNeeded={false}
              dataName='nowPlayingMovies'
              fetchData={getNowPlayingMovies}
            />
          </div>
          <h1 className='text-3xl text-white font-bold pt-10'>
            Popular Shows ⭐
          </h1>
          <div className='flex flex-col justify-start w-full pt-10'>
            <Carousel
              isVisible={isVisible}
              isNeeded={false}
              dataName='trendingShows'
              fetchData={getPopularShows}
            />
          </div>
          <h1 className='text-3xl text-white font-bold pt-10'>
            Top Shows Today 🍿
          </h1>
          <div className='flex flex-col justify-start w-full pt-10'>
            <TopRated dataName='topRatedShows' fetchData={getTopRatedShows} />
          </div>
          <h1 className='text-3xl text-white font-bold pt-10'>
            Airing Shows Today 🍿
          </h1>
          <div className='flex flex-col justify-start w-full pt-10'>
            <Carousel
              isVisible={isVisible}
              isNeeded={false}
              dataName='airingTodayShows'
              fetchData={getAiringTodayShows}
            />
          </div>
          <h1 className='text-3xl text-white font-bold pt-10'>
            Shows For You 📺
          </h1>
          <div className='flex flex-col justify-start w-full pt-10'>
            <Carousel
              isVisible={isVisible}
              isNeeded={false}
              dataName='currentShows'
              fetchData={getCurrentShows}
            />
          </div>
        </div>
        <div className='flex lg:justify-start lg:items-start justify-center items-center flex-col w-full 2xl:w-4/12 2xl:pr-10'>
          <h1 className='text-3xl text-white font-bold'>Upcoming Movies 🍿</h1>
          <div className='pt-10'>
            <Upcoming fetchData={getUpcomingMovies} dataName='upcomingMovies' />
          </div>
        </div>
      </header>
    </>
  )
}

export default Home
