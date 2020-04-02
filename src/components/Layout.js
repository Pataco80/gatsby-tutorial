import React from 'react'
import Nabbar from './Navbar'
import Footer from './Footer'
import '../css/global.css'
const Layout = ({ children }) => {
  return (
    <>
      <Nabbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
