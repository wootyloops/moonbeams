import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <form>
        <div className='block m-1.5'>E-mail: <input className='p-1.5 rounded-md ring-1 ring-inset ring-sky-950' title='email' type='text' id='email' /></div>
        <div className='block m-1.5'>Password: <input className='p-1.5 rounded-md ring-1 ring-inset ring-sky-950' title='password' type='password' id='password' /></div>
        <button className='block bg-sky-950 rounded-md p-2 text-amber-200' type='submit' formMethod='post' id='login'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm