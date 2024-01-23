import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../assets/profile.png'


const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <h3>Dashboard</h3>
      <img src={Profile} alt="Profile" />
      <ul>
        <Link to="/Studashbord"><a>Dashboard</a></Link>
    
      </ul>
    </div>
  )
}

export default Dashboard