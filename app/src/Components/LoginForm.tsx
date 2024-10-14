import { useState } from 'react';
import axios from 'axios';
import { handleError, handleSuccess } from '../Functions/FormHelpers';

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

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:5001/api/account/login',
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
      } else {
        handleError(message);
      }
    } catch(error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: '',
      password:''
    });
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
          name='login'
          id='login'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;