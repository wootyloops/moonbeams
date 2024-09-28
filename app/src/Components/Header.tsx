import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import imgMoon from '../assets/moon.svg'

const Header = () => {
  return (
    <header className='grid grid-cols-3 h-26 items-center items-center py-2 px-8 bg-sky-950 text-amber-100'>
      <Link to='/'>
      <div className='col-star-1 col-end-3 flex justify-between gap-3 w-full text-left my-4'>
        <img className='w-20 hover:animate-moon-spin' src={imgMoon} alt='The moon!'/>
        <h1 className='items-center text-4xl font-russo pl-4 w-full flex-initial'>Moon Beans</h1>
      </div>
      </Link>
      <div className=' col-start-4 col-end-5 text-right text-lg justify-items-stretch flex'>
        <Nav />
      </div>
    </header>
  )
}

export default Header