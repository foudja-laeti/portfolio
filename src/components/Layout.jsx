import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CursorGlow from './CursorGlow'
import ScrollToTop from './ScrollToTop'
import { profil } from '../data'

function Layout() {
  return (
    <>
      <ScrollToTop />
      <CursorGlow />
      <Navbar nom={profil.nom} />
      <main>
        <Outlet />
      </main>
      <Footer profil={profil} />
    </>
  )
}

export default Layout