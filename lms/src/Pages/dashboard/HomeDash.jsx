import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { CourseModel } from '../../config/data';

const HomeDash = ({ courses, studentId }) => {
  const [completedCourses, setCompletedCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleMarkComplete = (courseId) => {
    setCompletedCourses([...completedCourses, courseId]);
    // console.log(completedCourses);
  };

  useEffect(() => {
    const studentCourses = CourseModel.filter((course) =>
      course.students.some((student) => student.id === studentId)
    );
    setEnrolledCourses(studentCourses)
  }, [courses, studentId, completedCourses]);

  const calculateCompletionPercentage = () => {
    const totalCourses = enrolledCourses.length;
    const completedCount = completedCourses.length;
    return totalCourses === 0 ? 0 : Math.round((completedCount / totalCourses) * 100);
  };
  return (
    <Layout>
        <div className="dashboard-container">
            <div className="bread-crum">
                Dashboard / Student Dashboard
            </div>
            <h2>Welcome to student Dashboard</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur magnam blanditiis error ut quo fugiat tempore soluta, facilis sint magni.</p>
            <div className="dash-card-container">
              <div className="dash-card">
                <h4>Total Course Enrolled</h4>
                <span>{enrolledCourses.length}</span>
              </div>
              <div className="dash-card">
                <h4>Total Course Completed</h4>
                <span>{calculateCompletionPercentage()}%</span>
              </div>
            </div>
            <h3>Enrolled Courses Listed here -</h3>
           {
            enrolledCourses.map((courses)=>(
              <div className="stu-course-card" key={courses.id}>
                <img src={courses.thumbnail} alt="courses" />
                <div className="stu-course-details">
                  <h2>{courses.name}</h2>
                  <h3>Instrustore Name - <span>{courses.instructor}</span></h3>
                  <h3>Deu Date - <span>{courses.duration}</span></h3>
                  <p>Locations - <span>{courses.location}</span></p>
                  {!completedCourses.includes(courses) ? (
                <button onClick={() => handleMarkComplete(courses)}>Mark Completed</button>
              ) : null}
                </div>
              </div>
            ))
           }
           <h3>Completed Courses are - </h3>
           {
            completedCourses.map((courses)=>(
              <div className="stu-course-card" key={courses.id}>
                <img src={courses.thumbnail} alt="courses" />
                <div className="stu-course-details">
                  <h2>{courses.name}</h2>
                  <h3>Instrustore Name - <span>{courses.instructor}</span></h3>
                  <h3>Deu Date - <span>{courses.duration}</span></h3>
                  <p>Locations - <span>{courses.location}</span></p>
                  <button style={{background:"Green", color:"#fff"}}>Completed</button>
                </div>
              </div>
            ))
           }
        </div>
    </Layout>
  )
}

export default HomeDash