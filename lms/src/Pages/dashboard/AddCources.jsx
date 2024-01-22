import React, { useState } from "react";
import Layout from "./Layout";
import toast from 'react-hot-toast';

const AddCources = () => {
  const [courseData, setCourseData] = useState({
    id: null,
    course: "",
    instructor: "",
    descraption: "",
    thumbnail: "",
    status: "",
    duration: "",
    schedule: "",
    location: "",
    syllabus:[],
    enrolledStudents:[],
  });
  const [studentFormData, setStudentFormData] = useState({
    studentName: "",
    email: "",
  });

  const getCourseData = (e)=>{
    const { name, value } = e.target;
    setCourseData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      console.log(courseData);
  }
  const handleSyllabusChange = (index, e) => {
    const { value } = e.target;
    setCourseData((prevData) => {
      const updatedSyllabus = [...prevData.syllabus];
      updatedSyllabus[index] = value;
      return {
        ...prevData,
        syllabus: updatedSyllabus,
      };
    });
  };

  const addSyllabusInput = () => {
    setCourseData((prevData) => ({
      ...prevData,
      syllabus: [...prevData.syllabus, ""],
    }));
    toast.success("Chapter Add Successful")
  };


  // handle student
  const handleStudentDataChange = (e) => {
    const { name, value } = e.target;
    setStudentFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const enrollStudent = () => {
    setCourseData((prevData) => ({
      ...prevData,
      enrolledStudents: [...prevData.enrolledStudents || [], { ...studentFormData }],
    }));
    toast.success("Student Enrolled Successfully");
    setStudentFormData({
      studentName: "",
      email: "",
    });
  };
  // Generate unique id
  const generateUniqueId = () => {
    // Replace this with your own logic to generate a unique ID
    return new Date().getTime();
  };
   const handleSubmit = async(e) =>{
    e.preventDefault();
    const {course,instructor,descraption,thumbnail,status,duration,schedule,location,syllabus,enrolledStudents} = courseData
        try {
            const id = generateUniqueId();
            const res = await fetch("https://stulms-default-rtdb.firebaseio.com/studentlms.json",{
                method: "POST",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                id,
                course,
                instructor,
                descraption,
                thumbnail,
                status,
                duration,
                schedule,
                location,
                syllabus: courseData.syllabus.filter((chapter) => chapter !== ""),
                enrolledStudents,
              })
            });
    toast.success("Course Submit Successful");
    setCourseData({
      id:null,
      course: "",
      instructor: "",
      descraption: "",
      thumbnail: "",
      status: "",
      duration: "",
      schedule: "",
      location: "",
      syllabus:[],
      enrolledStudents:[],
    })

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
          {/* <hr /> */}
          <h3>Add Syllabus :-</h3>
          <div className="input">
            <div className="add-input">
              {courseData.syllabus.map((chapter, index) => (
                <input
                  key={index}
                  type="text"
                  value={chapter}
                  onChange={(e) => handleSyllabusChange(index, e)}
                  placeholder={`Chapter ${index + 1}`}
                  autoComplete="off"
                />
              ))}
              <button type="button" onClick={addSyllabusInput} className="add-chapter">
                Add Chapter
              </button>
            </div>
          </div>
          <h3>Enroll Students :-</h3>
          <div className="input">
            <div className="add-input">
              <span>Student Name</span>
              <input
                type="text"
                name="studentName"
                value={studentFormData.studentName}
                onChange={handleStudentDataChange}
                placeholder="Enter Student Name"
                autoComplete="off"
              />
            </div>
            <div className="add-input">
              <span>Email</span>
              <input
                type="text"
                name="email"
                value={studentFormData.email}
                onChange={handleStudentDataChange}
                placeholder="Enter Email"
                autoComplete="off"
              />
            </div>
          </div>
          <button type="button" onClick={enrollStudent} className="add-chapter">
            Enroll Student
          </button>
          <button type="submit">Add Course</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddCources;
