import Navbar from '../Navbar/Navbar'
import SideNavigation from '../SideNavigation/SideNavigation'
import Footer from '../Footer/'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <SideNavigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
