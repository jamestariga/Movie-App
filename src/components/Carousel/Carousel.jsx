import { useQuery } from '@tanstack/react-query'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import FeaturedCard from '../FeaturedCard'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as Carousels } from 'react-responsive-carousel'

const Carousel = (props) => {
  const { fetchData, isVisible, isNeeded, dataName, media } = props

  const { data, error, isLoading } = useQuery([dataName], fetchData)

  if (isLoading) return <div>Loading...</div>

  const carouselOptions = () => {
    return {
      showThumbs: false,
      showStatus: false,
      showIndicators: false,
      infiniteLoop: false,
      swipeable: true,
      centerMode: true,
      emulateTouch: true,
      autoPlay: isVisible && isNeeded ? true : false,
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
      <Carousels {...carouselOptions()}>
        {data?.map((movie) => (
          <div key={movie.id}>
            <FeaturedCard {...movie} media={media} />
          </div>
        ))}
      </Carousels>
    </>
  )
}

export default Carousel
