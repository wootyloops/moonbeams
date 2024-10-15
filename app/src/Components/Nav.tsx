import React from 'react';
import { Link } from 'react-router-dom';
import AccountLink from './AccountLink';

const Nav = () => {
  return (
    <nav>
      <ul className='list-none space-x-4 w-max'>
        <li key='home' className='inline-block lg:p-2'>
          <Link to='/'>Home</Link>
        </li>
        <li key='locations' className='inline-block lg:p-2'>
          <Link to='/locations'>Locations</Link>
        </li>
        <li key='shop' className='inline-block lg:p-2'>
          <Link to='/shop'>Shop</Link>
        </li>
        <li key='login' className='inline-block lg:p-2'>
          <AccountLink />
        </li>
        <li key='cart' className='inline-block lg:py-2 sm:px-2'>
          <button className='bg-amber-200 hover:bg-amber-100 text-sky-950 rounded-md px-8 py-2'>Cart</button>
        </li>
      </ul>
    </nav>
  ); 
}

export default Nav; 