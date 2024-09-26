import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = (children: React.ReactNode) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout