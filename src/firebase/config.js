// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2hSQOjGqrfbz7TgaDvdMpYw2DdeH_eLc",
  authDomain: "recruiter-expert.firebaseapp.com",
  projectId: "recruiter-expert",
  storageBucket: "recruiter-expert.appspot.com",
  messagingSenderId: "453919062744",
  appId: "1:453919062744:web:29018d5b5be7193fa175ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebasestorage = getStorage(app);