import { useState, useEffect, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getTrendingMovies } from '../../api/movieApi'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import FeaturedCard from '../../components/FeaturedCard'
import Upcoming from '../../components/Upcoming'
import TopRated from '../../components/TopRated'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Home = () => {
  const { data, error, isLoading } = useQuery(['trending'], getTrendingMovies)
  const [isVisible, setIsVisible] = useState(true)
  const firstRenderRef = useRef(true)

  useEffect(() => {
    // Will only render once in development mode
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }

    const listener = document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })

    return () => {
      document.removeEventListener('visibilitychange', listener)
    }
  }, [])

  const carouselOptions = () => {
    return {
      showThumbs: false,
      showStatus: false,
      showIndicators: false,
      infiniteLoop: false,
      swipeable: true,
      centerMode: true,
      emulateTouch: true,
      autoPlay: isVisible ? true : false,
      interval: 5000,
      transitionTime: 1000,
      width: '100%',
      showArrows: true,
      renderArrowPrev: (onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type='button'
            onClick={onClickHandler}
            title={label}
            className='bg-blurred absolute left-5 bottom-40 p-2 rounded-full text-white text-sm font-bold z-10'
          >
            <FiChevronLeft className='h-6 w-6' />
          </button>
        ),
      renderArrowNext: (onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type='button'
            onClick={onClickHandler}
            title={label}
            className='bg-blurred absolute right-5 bottom-40 p-2 rounded-full text-white text-sm font-bold z-10'
          >
            <FiChevronRight className='h-6 w-6' />
          </button>
        ),
    }
  }

  return (
    <>
      <header className='flex flex-wrap lg:space-x-10'>
        <div className='flex grow flex-col lg:justify-start lg:items-start justify-center items-center w-full xl:w-full 2xl:w-7/12 px-6 lg:px-10 pb-10'>
          <h1 className='text-3xl text-white font-bold'>Trending Movies🔥</h1>
          <div className='flex flex-col justify-start w-full gap-4 pt-10'>
            <Carousel {...carouselOptions()}>
              {data?.map((movie) => (
                <div key={movie.id} className='pr-8'>
                  <FeaturedCard {...movie} />
                </div>
              ))}
            </Carousel>
          </div>
          <h1 className='text-3xl text-white font-bold pt-10'>
            Top Rated Movies ⭐
          </h1>
          <div className='flex flex-col pt-4'>
            <TopRated />
          </div>
        </div>
        <div className='flex lg:justify-start lg:items-start justify-center items-center flex-col w-full 2xl:w-4/12 2xl:pr-10'>
          <h1 className='text-3xl text-white font-bold'>Upcoming Movies 🍿</h1>
          <div className='pt-10'>
            <Upcoming />
          </div>
        </div>
      </header>
    </>
  )
}

export default Home
