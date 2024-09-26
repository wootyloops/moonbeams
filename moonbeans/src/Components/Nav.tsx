import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li key='home'>
          <Link to='/'>Home</Link>
        </li>
        <li key='about'>
          <Link to='/about'>About</Link>
        </li>
        <li key='shop'>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav