import Skeleton from 'react-loading-skeleton'

export const FeaturedCardSkeleton = ({ cards }) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div className='pr-8' key={i}>
            <div className='flex justify-start space-x-10 lg:w-auto w-full min-h-[5rem] h-[20rem] rounded-xl md:py-6 md:px-10 py-2 px-6 overflow-hidden cursor-pointer shadow-xl'>
              <div className='hidden sm:flex max-w-xs w-2/5 2xl:2/5 4xl:w-3/12 shadow-xl rounded-3xl overflow-hidden'>
                <Skeleton height={400} width={400} />
              </div>
              <div className='flex flex-col w-4/6 2xl:w-3/5 4xl:w-9/12 space-y-6'>
                <h1 className='text-center'>
                  <Skeleton height={20} width={200} />
                </h1>
                <div className='max-h-40 overflow-hidden'>
                  <Skeleton count={5} height={10} />
                </div>
                <div className='flex flex-wrap gap-4'>
                  <Skeleton height={30} width={100} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export const SmallCardSkeleton = ({ cards }) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div
            className='flex flex-col space-y-6 p-4 h-full overflow-hidden w-full'
            key={i}
          >
            <div className='rounded-2xl overflow-hidden'>
              <Skeleton className='h-[250px] w-[170px] 4xl:h-[400px] 4xl:w-[600px]' />
            </div>
          </div>
        ))}
    </>
  )
}

export const UpcomingCardSkeleton = ({ cards }) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div className='flex flex-col space-y-6 p-4' key={i}>
            <div className='rounded-3xl overflow-hidden'>
              <Skeleton className='h-[200px] w-[300px] sm:h-[300px] sm:w-[500px] 4xl:h-[500px] 4xl:w-[800px]' />
            </div>
            <h1 className=''>
              <Skeleton height={30} width={200} />
            </h1>
            <p className=''>
              <Skeleton count={6} height={10} />
            </p>
          </div>
        ))}
    </>
  )
}
