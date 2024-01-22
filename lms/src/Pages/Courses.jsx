import React, { useEffect, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';

const Courses = () => {
    const [courses,setCourses] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [courseName, setCourseName] = useState('');
    const [instructor, setInstructor] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();
    // const navigate = Navigate()


    const fetchCourse = async ()=>{
        try {
            const resp = await fetch("https://stulms-default-rtdb.firebaseio.com/studentlms.json");
            const data = await resp.json();
            // console.log(data);
            if(data){
                const coursesArray = Object.values(data);
                setCourses(coursesArray);
                setFilteredCourses(coursesArray)
            }
            // console.log(courses);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
            fetchCourse()
        },[])
        useEffect(() => {
            const filtered = courses.filter((course) =>
              course.course.toLowerCase().includes(courseName.toLowerCase()) &&
              course.instructor.toLowerCase().includes(instructor.toLowerCase()) &&
              course.location.toLowerCase().includes(location.toLowerCase())
            );
            setFilteredCourses(filtered);
          }, [courseName, instructor, location, courses]);

        //   add to details page
          const handleKnowMoreClick = (courseId) => {
            // Redirect to the course details page
            navigate(`/courses/${courseId}`);
          };
  return (
    <div className='course-wrapper'>
        <div className="course-container">
            <div className="filter-bar">
                <h3>Filters</h3>
                <div className="filter-input">
                    <label>By Course Name</label>
                    <input type="text" placeholder='Enter course name' value={courseName} onChange={e => {setCourseName(e.target.value)}} />
                </div>
                <div className="filter-input">
                    <label>By instructor Name</label>
                    <input type="text" placeholder='Enter Instructor name' value={instructor} onChange={e => {setInstructor(e.target.value)}}/>
                </div>
                <div className="filter-input">
                    <label>By Location</label>
                    <input type="text" placeholder="e.g('Open', 'close')" value={location} onChange={e => {setLocation(e.target.value)}}/>
                </div>
            </div>
            <div className="right-bar">
                {
                    courses && courses.length ?  <>
                    {
                       
                        filteredCourses.map((course)=>(
                            <div className="card-body" key={course.id}>
                                <img src={course.thumbnail} alt="course" />
                                <div className="card-content">
                                <p>By <span>{course.instructor}</span></p>
                                <h2>{course.course}</h2>
                                <hr />
                                <div className="status">
                                    <span>{course.duration}</span>
                                    <span>{course.location}</span>
                                </div>
                                {/* <Link to="/" className=''>Know more</Link> */}
                                <button onClick={() => handleKnowMoreClick(course.id)}>Know more</button>
                                </div>
                            </div>
                        ))
                    }</>
                    : (<h3>No Course Found..</h3>)
                }
            </div>
        </div>
    </div>
  )
}

export default Courses