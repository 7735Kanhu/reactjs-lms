// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';


// const CourseDetail = () => {
//     const { courseId } = useParams();
//     const [courseDetails, setCourseDetails] = useState(null);

//   const fetchCourseDetails = async () => {
//     try {
//         const db = getFirestore();
//       const docRef = doc(db, 'studentlms', courseId);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setCourseDetails(data);
//         console.log(data);
//       } else {
//         console.log('No such document!');
//       }
//     } catch (error) {
//       console.error('Error fetching course details:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCourseDetails();
//   }, [courseId]);
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    // Initialize Firebase with your configuration
    const firebaseConfig = {
      apiKey: 'your-api-key',
      authDomain: 'your-auth-domain',
      databaseURL: 'https://your-firebase-project-id.firebaseio.com',
      projectId: 'your-firebase-project-id',
      storageBucket: 'your-storage-bucket',
      messagingSenderId: 'your-messaging-sender-id',
      appId: 'your-app-id',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Get a reference to the Firebase Realtime Database
    const database = firebase.database();
    
    // Replace 'studentlms' with the actual path to your data in the database
    const courseRef = database.ref(`studentlms/${courseId}`);

    courseRef.once('value')
      .then(snapshot => {
        const data = snapshot.val();
        setCourseDetails(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [courseId]);
  return (
    <div className="course-details">
      {courseDetails ? (
        <>
          <h2>{courseDetails.course}</h2>
          <p>Instructor: {courseDetails.instructor}</p>
          <p>Duration: {courseDetails.duration}</p>
          <p>Schedule: {courseDetails.schedule}</p>
          {/* Add more details as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default CourseDetail