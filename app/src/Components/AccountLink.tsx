import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AccountLink = () => {
  const [user, setUser] = useState<string>();

  useEffect(() => {
    if (Cookies.get('token')) {
      const getUsername = async () => {
        const { data } = await axios.post('http://localhost:5001/api/account/auth', {}, { withCredentials: true });
        const { state, user } = data;
        setUser(user);
      }
    }
    
  });

  if (user) {
    return (
      <Link to='/account'>My Account</Link>
    );
  }
  return (
    <Link to='/login'>Login</Link>
  )
}

export default AccountLink;