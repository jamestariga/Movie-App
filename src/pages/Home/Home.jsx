import { useQuery } from '@tanstack/react-query'
import { getTrendingMovies } from '../../api/movieApi'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SideNavigation from '../../components/SideNavigation/'
import Card from '../../components/Card/'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Home = () => {
  const { data, error, isLoading } = useQuery(['trending'], getTrendingMovies)

  return (
    <>
      <header className='flex flex-wrap mb-[500rem]'>
        <div className='hidden lg:flex items-center flex-col w-auto pt-4'>
          <div className='flex w-1/2'>
            <h1 className='text-xl text-gray-400'>Menu</h1>
          </div>
          <div className='px-10'>
            <SideNavigation />
          </div>
        </div>
        <div className='flex grow flex-col lg:justify-start lg:items-start justify-center items-center w-full lg:w-3/6 px-6 lg:px-10'>
          <h1 className='text-3xl text-white font-bold'>Trending Movie🔥</h1>
          <div className='flex flex-col justify-start w-full gap-4 pt-10'>
            <Carousel
              autoPlay
              centerMode
              showArrows={true}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={false}
              transitionTime={1000}
              interval={5000}
              width={'100%'}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type='button'
                    onClick={onClickHandler}
                    title={label}
                    className='bg-blurred absolute left-5 bottom-40 p-2 rounded-full text-white text-sm font-bold z-10'
                  >
                    <FiChevronLeft className='h-6 w-6' />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type='button'
                    onClick={onClickHandler}
                    title={label}
                    className='bg-blurred absolute right-5 bottom-40 p-2 rounded-full text-white text-sm font-bold z-10'
                  >
                    <FiChevronRight className='h-6 w-6' />
                  </button>
                )
              }
            >
              {data?.map((movie) => (
                <div key={movie.id} className='pr-8'>
                  <Card {...movie} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className='flex grow justify-center lg:w-4/12'>Upcoming</div>
      </header>
    </>
  )
}

export default Home
