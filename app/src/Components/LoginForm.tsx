import React, { useState } from 'react';

const LoginForm = () => {
  const [inputValue, setInputValue] = useState({
    email: '', 
    password: '', 
  }); 
  const { email, password } = inputValue;
  const handleOnChange = (e: any): void => {
    const { name, value } = e.target; 
    setInputValue({
      ...inputValue, 
      [name]: value, 
    }); 
  };

  // move to helpers file?
  const handleError = (err:Error): void => {
    console.log(err); 
  }; 
  const handleSuccess = (msg: String): void => {
    console.log(msg); 
  }; 
  const handleSubmit = async (e: any): Promise<void> => {

  }; 

  return (
    <div>
      <form onClick={ handleSubmit }>
        <div className='block m-1.5'>
          <label htmlFor="email">E-mail</label>
          <input 
            className='p-1.5 rounded-md ring-1 ring-inset ring-sky-950' 
            type='text' 
            id='email'
            name='email' 
            value={email} 
            onChange={handleOnChange} 
          />
        </div>
        <div className='block m-1.5'>
          <label htmlFor="password">Password</label>
          <input
            className='p-1.5 rounded-md ring-1 ring-inset ring-sky-950' 
            type='password' 
            id='password'
            name='password' 
            value={password} 
            onChange={handleOnChange} 
          />
        </div>
        <button 
          className='block bg-sky-950 rounded-md p-2 text-amber-200' 
          type='submit' 
          formMethod='post' 
          name='login'
          id='login'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;