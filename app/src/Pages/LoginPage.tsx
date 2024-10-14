import LoginForm from '../Components/LoginForm'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h2 className='text-3xl'>Login</h2>
      <LoginForm />
      <div>Need an account? <Link to='/signup'>Sign up here!</Link></div>
    </div>
  )
}

export default LoginPage