import { BiHomeCircle } from 'react-icons/bi'
import { AiOutlineCompass, AiOutlineCloud } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { RiSearchLine, RiLogoutBoxRLine } from 'react-icons/ri'
import { BsGear } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const SideNavigation = () => {
  return (
    <>
      <div className='flex flex-col justify-center pt-6'>
        <div className='flex flex-col justify-center items-start space-y-6 border-b-[1px] border-b-gray-500 p-4 pb-8'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center border-l-4 border-l-indigo-500 px-4`
                : `text-gray-400 flex items-center px-4`
            }
          >
            <BiHomeCircle className='h-6 w-6' />
            <span className='ml-2'>Home</span>
          </NavLink>
          <NavLink
            to='/discovery'
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center border-l-4 border-l-indigo-500 px-4`
                : `text-gray-400 flex items-center px-4`
            }
          >
            <AiOutlineCompass className='h-6 w-6' />
            <span className='ml-2'>Discovery</span>
          </NavLink>
          <NavLink
            to='/community'
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center border-l-4 border-l-indigo-500 px-4`
                : `text-gray-400 flex items-center px-4`
            }
          >
            <BsPeople className='h-6 w-6' />
            <span className='ml-2'>Community</span>
          </NavLink>
          <NavLink
            to='/search'
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center border-l-4 border-l-indigo-500 px-4`
                : `text-gray-400 flex items-center px-4`
            }
          >
            <RiSearchLine className='h-6 w-6' />
            <span className='ml-2'>Search</span>
          </NavLink>
        </div>
        <div className='flex flex-col justify-center items-start space-y-6 p-4 pt-8'>
          <NavLink
            to='/setting'
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center border-l-4 border-l-indigo-500 px-4`
                : `text-gray-400 flex items-center px-4`
            }
          >
            <BsGear className='h-6 w-6' />
            <span className='ml-2'>Setting</span>
          </NavLink>
          <NavLink
            to='/help'
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center border-l-4 border-l-indigo-500 px-4`
                : `text-gray-400 flex items-center px-4`
            }
          >
            <AiOutlineCloud className='h-6 w-6' />
            <span className='ml-2'>Help</span>
          </NavLink>
          <NavLink
            to='/logout'
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center border-l-4 border-l-indigo-500 px-4`
                : `text-gray-400 flex items-center px-4`
            }
          >
            <RiLogoutBoxRLine className='h-6 w-6' />
            <span className='ml-2'>Exit</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default SideNavigation
