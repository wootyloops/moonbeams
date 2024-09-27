import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import imgMoon from '../assets/moon.svg'

const Header = () => {
  return (
    <header className='flex mx-auto max-w-7x1 items-center p-6 text-amber-50'>
      <div className='flex w-20'><img src={imgMoon} alt='The moon!'/></div>
      <div className='text-5xl font-russo w-2/3 pl-4'><Link to='/'>Moon Beans</Link></div>
      <div className='flex text-lg justify-items-stretch'>
        <Nav />
      </div>
    </header>
  )
}

export default Header