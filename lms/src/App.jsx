import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HomeDash from './Pages/dashboard/HomeDash'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'
import { CourseModel } from "../src/config/data";

function App() {
  const studentId = 101;
  const courses = [CourseModel]

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Studashbord' element={<HomeDash courses={courses} studentId={studentId}/>} />
      <Route path='/courses' element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
