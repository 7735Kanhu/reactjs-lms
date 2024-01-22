import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Dashboard from './Pages/dashboard/Dashboard'
import HomeDash from './Pages/dashboard/HomeDash'
import AddCources from './Pages/dashboard/AddCources'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/add-courses' element={<AddCources />} />
      <Route path='/Studashbord' element={<HomeDash />} />
      <Route path='/courses' element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
