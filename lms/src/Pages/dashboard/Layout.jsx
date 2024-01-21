import React from 'react'
import Dashboard from './Dashboard'

const Layout = ({children}) => {
  return (
    <div className='dashboard-page'>
    <Dashboard />
    <div>{children}</div>

    </div>
  )
}

export default Layout