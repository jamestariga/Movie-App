import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <h1 className='text-3xl text-white font-bold'>404</h1>
        <h1 className='text-3xl text-white font-bold'>Page Not Found</h1>
        <Link to='/'>
          <button className='btn btn-ghost bg-blue-500 text-white font-bold py-2 px-4 rounded mt-10'>
            Visit Our Home Page
          </button>
        </Link>
      </div>
    </>
  )
}

export default Error
