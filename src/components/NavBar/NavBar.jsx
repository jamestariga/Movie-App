import {
  ChevronDownIcon,
  ChevronRightIcon,
  MenuAlt1Icon,
} from '@heroicons/react/Solid'

const NavBar = () => {
  return (
    <>
      <div className='navbar bg-base-100 py-10'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabindex='0' className='btn btn-ghost lg:hidden'>
              <MenuAlt1Icon className='h-6 w-6 text-blue-500' />
            </label>
            <ul
              tabindex='0'
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li tabindex='0'>
                <a>
                  Shows
                  <ChevronRightIcon className='h-5 w-5 text-blue-500' />
                </a>
                <ul className='p-2'>
                  <li>
                    <a>Series</a>
                  </li>
                  <li>
                    <a>Others</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost text-3xl ml-4'>Flixer</a>
        </div>
        <div className='navbar-center hidden lg:flex w-5/6'>
          <ul className='menu menu-horizontal p-0 text-xl'>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
            <li tabindex='0'>
              <a>
                TV Shows
                <ChevronDownIcon className='h-5 w-5 text-blue-500' />
              </a>
              <ul className='p-2'>
                <li>
                  <a>Series</a>
                </li>
                <li>
                  <a>Others</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar
