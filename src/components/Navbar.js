import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">The index page</Link>
        </li>
        <li>
          <Link to="/blog/">The blog page</Link>
        </li>
        <li>
          <Link to="/products/">The products page</Link>
        </li>
        <li>
          <Link to="/404/">The error page</Link>
        </li>
        <li>
          <Link to="/exemples/">The exemple page</Link>
        </li>
        <li>
          <Link to="/images/">The images page</Link>
        </li>
        <li>
          <a href="https://www.gatsbyjs.org/docs/" target="_blank" rel="noreferrer noopener">Go the gatsby docs</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar