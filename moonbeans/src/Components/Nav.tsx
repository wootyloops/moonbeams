import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className='list-none'>
        <li key='home' className='inline-block p-2'>
          <Link to='/'>Home</Link>
        </li>
        <li key='about' className='inline-block p-2'>
          <Link to='/about'>About</Link>
        </li>
        <li key='shop' className='inline-block p-2'>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav