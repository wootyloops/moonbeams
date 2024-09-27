import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import imgMoon from '../assets/moon.svg'

const Header = () => {
  return (
    <header className='flex mx-auto max-w-7x1 items-center p-6 text-amber-100'>
      <div className='inline-flex w-3/4'>
      <Link to='/'>
        <div className='inline-flex w-20'><img src={imgMoon} alt='The moon!'/></div>
        <div className='inline-flex text-5xl font-russo pl-4'>Moon Beans</div>
      </Link>
      </div>
      <div className='text-lg justify-items-stretch'>
        <Nav />
      </div>
    </header>
  )
}

export default Header