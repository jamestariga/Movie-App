import { useParams } from 'react-router-dom'
import useQueryByID from '../../hooks/useQueryByID'
import { getPersonByID } from '../../api/peopleApi'
import Present from '../../components/Present'

const unknown = new URL('/image/unknown.jpg', import.meta.url)

const Person = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useQueryByID('person', id, getPersonByID)

  return (
    <header className='flex flex-col items-center space-y-8'>
      <div className='flex flex-col items-center justify-center w-full space-y-8 px-8'>
        <div className='flex flex-col gap-4 sm:flex-row justify-center w-full space-y-8 bg-blurred p-8'>
          <div className='flex overflow-hidden w-full md:w-auto'>
            <img
              src={
                data?.profile_path !== null
                  ? `https://image.tmdb.org/t/p/original${data?.profile_path}`
                  : unknown
              }
              alt={data?.name}
              className='w-full max-h-[30rem]'
            />
          </div>
          <div className='flex flex-col w-full md:w-1/2 xl:w-3/4 px-4 space-y-4'>
            <h1 className='text-white font-bold text-2xl'>{data?.name}</h1>
            <p className='text-xs md:text-sm xl:text-base text-white leading-loose md:leading-6'>
              {data?.biography}
            </p>
          </div>
        </div>
      </div>
      <div className='px-8'>
        <h1 className='text-white font-bold text-2xl'>Appeared On:</h1>
        <Present id={id} />
      </div>
    </header>
  )
}

export default Person
