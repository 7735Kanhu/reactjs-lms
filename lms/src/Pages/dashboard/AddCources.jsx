import React, { useState } from "react";
import Layout from "./Layout";

const AddCources = () => {
  const [courseData, setCourseData] = useState({
    course: "",
    instructor: "",
    descraption: "",
    thumbnail: "",
    status: "",
    duration: "",
    schedule: "",
    location: "",
  });

  const getCourseData = (e)=>{
    const { name, value } = e.target;
    setCourseData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      console.log(courseData);
  }

   const handleSubmit = async(e) =>{
    e.preventDefault();
    const {course,instructor,descraption,thumbnail,status,duration,schedule,location,} = courseData
        try {
            const res = await fetch("https://stulms-default-rtdb.firebaseio.com/studentlms.json",{
                method: "POST",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                course,
                instructor,
                descraption,
                thumbnail,
                status,
                duration,
                schedule,
                location,})
            });
        } catch (error) {
         console.log(error);   
        }
   }
  return (
    <Layout>
      <div className="add-wrapper">
        <div className="bread-crum">Dashboard / Add Courses</div>
        <form onSubmit={handleSubmit}>
          <h3>Add Courses</h3>
          <div className="input">
            <div className="add-input">
              <span>Course Name</span>
              <input
                type="text"
                name="course"
                value={courseData.course}
                onChange={getCourseData}
                placeholder="Enter Course Name"
                autoComplete="off"
                required
              />
            </div>
            <div className="add-input">
              <span>Instructor's name</span>
              <input
                type="text"
                name="instructor"
                value={courseData.instructor}
                onChange={getCourseData}
                placeholder="Enter Instructor's name"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="input">
            <div className="add-input">
              <span>Description</span>
              <input
                type="text"
                name="descraption"
                value={courseData.descraption}
                onChange={getCourseData}
                placeholder="Enter Descraption"
                autoComplete="off"
              />
            </div>
            <div className="add-input thumbnail">
              <span>Thumbnail</span>
              <input
                type="text"
                name="thumbnail"
                value={courseData.thumbnail}
                onChange={getCourseData}
                placeholder="Enter image url"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="input">
            <div className="add-input">
              <span>Enrollment status</span>
              <input
                type="text"
                name="status"
                value={courseData.status}
                onChange={getCourseData}
                placeholder="Enter Enrollment status(e.g., 'Open', 'Closed', 'In Progress')"
                autoComplete="off"
                required
              />
            </div>
            <div className="add-input">
              <span>Course duration</span>
              <input
                type="text"
                name="duration"
                value={courseData.duration}
                onChange={getCourseData}
                placeholder="Enter Course duration(e.g., 'weeks', 'months')"
                required
              />
            </div>
          </div>
          <div className="input">
            <div className="add-input">
              <span>Schedule</span>
              <input
                type="text"
                name="schedule"
                value={courseData.schedule}
                onChange={getCourseData}
                placeholder="Enter Course Schedule(e.g., Monday - Friday)"
                required
              />
            </div>
            <div className="add-input">
              <span>Location</span>
              <input
                type="text"
                name="location"
                value={courseData.location}
                onChange={getCourseData}
                placeholder="Enter Course Schedule(e.g., 'online' ,'offline')"
                required
              />
            </div>
          </div>
          <button type="submit">Add Course</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddCources;
