import React from 'react'
import Dashboard from './Dashboard'
import { Toaster } from 'react-hot-toast';

const Layout = ({children}) => {
  return (
    <div className='dashboard-page'>
    <Dashboard />
    <div><Toaster />{children}</div>

    </div>
  )
}

export default Layout