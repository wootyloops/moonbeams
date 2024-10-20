import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AccountLink = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const getLoggedinStatus = async () => {
    await axios.post ('http://localhost:5001/api/account/auth', {}, {withCredentials: true})
      .then ((response) => {
        console.log(response.data)
        setLoggedIn(response.data.loggedIn); 
      }); 

  }

    useEffect(() => {getLoggedinStatus()}, [])

  if (loggedIn) {
    return (
      <Link to='/account'>My Account</Link>
    );
  } else {
    return (
      <Link to='/login'>Login</Link>
    )
  }
}

export default AccountLink;