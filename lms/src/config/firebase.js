import firebase from 'firebase/app';
import 'firebase/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCgsQsYJdHthm1pay-MPX5KF82KkvnK-wA",
    authDomain: "tk-survey.firebaseapp.com",
    databaseURL: "https://tk-survey-default-rtdb.firebaseio.com",
    projectId: "tk-survey",
    storageBucket: "tk-survey.appspot.com",
    messagingSenderId: "656760605822",
    appId: "1:656760605822:web:07d3f9cbe57ed923995c2f"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const database = firebase.database();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebase;

