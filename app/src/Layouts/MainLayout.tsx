import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className='p-6 bg-white grid place-items-center'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout