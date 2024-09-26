import React from 'react'
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/shop' element={<ShopPage />} />
    </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App