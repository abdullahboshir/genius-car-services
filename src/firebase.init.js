// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyD35taMzrqCLAconxWwaZD2TYiLjxFp-t0",
  authDomain: "genius-car-services-4b11e.firebaseapp.com",
  projectId: "genius-car-services-4b11e",
  storageBucket: "genius-car-services-4b11e.appspot.com",
  messagingSenderId: "522906509332",
  appId: "1:522906509332:web:fba310b13d552941fbc701"

  
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;