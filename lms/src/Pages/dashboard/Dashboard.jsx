import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <h3>Dashboard</h3>
      <ul>
        <Link to="/Studashbord"><a>Dashboard</a></Link>
        <Link to="/add-courses"><a>Add Courses</a></Link>
        <Link to="/"><a>Courses</a></Link>
        <Link to="/"><a>Complate Courses</a></Link>
      </ul>
    </div>
  )
}

export default Dashboard