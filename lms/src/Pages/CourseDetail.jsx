import { useParams } from 'react-router-dom';
import { CourseModel } from '../config/data';


const CourseDetail = () => {
  const { courseId } = useParams();
  const course = CourseModel.find((c) => c.id === parseInt(courseId, 10));

  if (!course) {
    return <h3>Course not found</h3>;
  }

  return (
    <div className="course-details-wrapper">
      <div className="course-details-card">
        <img src={course.thumbnail} alt="couorse" />
        <div className="course-details">
          <h3>Course Highlights</h3>
          <div className="details-first">
            <span>There are {course.syllabus.length} Topics</span>
            <span>Total number of students are {course.students.length} Enrolled</span> 
            <span>Status of this Course - {course.enrollmentStatus}</span>
          </div>
          <hr />
          <h2>{course.name}</h2>
          <p>Instructor Name - {course.instructor}</p>
          <p>Description - {course.description}</p>
          <p>Course duration - {course.duration}</p>
          <p>course Time - {course.schedule}</p>
          <p>This course will be - {course.location}</p>
          <hr />
          <h3>Before You learn this course You need have some prerequisites :</h3>
          <p>{course.prerequisites.map(i=> i)}</p>
          <hr />
          <h3>Syllabus of the Course are :</h3>
          {course.syllabus.map((i)=>(
            <>
            <h5 key={i}>Week -{i.week}</h5>
            <div><span>Topic</span> : <p>{i.topic}</p></div>
            <div><span>Content</span> : <p>{i.content}</p></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetail