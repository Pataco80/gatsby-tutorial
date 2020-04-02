import React from 'react'
import Nabbar from './Navbar'
import Footer from './Footer'
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
