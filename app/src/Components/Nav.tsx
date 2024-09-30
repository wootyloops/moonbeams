import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className='list-none space-x-4 w-max'>
        <li key='home' className='inline-block lg:p-2'>
          <Link to='/'>Home</Link>
        </li>
        <li key='about' className='inline-block lg:p-2'>
          <Link to='/about'>About Us</Link>
        </li>
        <li key='locations' className='inline-block lg:p-2'>
          <Link to='/locations'>Locations</Link>
        </li>
        <li key='shop' className='inline-block lg:p-2'>
          <Link to='/shop'>Shop</Link>
        </li>
        <li key='login' className='inline-block lg:p-2'>
          <Link to='/login'>Login</Link>
        </li>
        <li key='cart' className='inline-block bg-amber-100 text-sky-950 rounded-md lg:py-2 lg:px-8 sm:px-2'>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav