import Navbar from '../Navbar/Navbar'
import SideNavigation from '../SideNavigation/SideNavigation'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <SideNavigation />
      <Outlet />
    </>
  )
}

export default Layout
