import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import MainLayout from './Layouts/MainLayout'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ShopPage from './Pages/ShopPage';
import LocationsPage from './Pages/LocationsPage';
import LoginPage from './Pages/LoginPage';
import AccountPage from './Pages/AccountPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/locations' element={<LocationsPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/account' element={<AccountPage />} />
    </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App