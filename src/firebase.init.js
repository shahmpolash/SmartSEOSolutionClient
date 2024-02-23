// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBJPs2VsXG_Wzn-NWLMXOk3uazkDQSTvFM",

  authDomain: "smartseosolution-59e7f.firebaseapp.com",

  projectId: "smartseosolution-59e7f",

  storageBucket: "smartseosolution-59e7f.appspot.com",

  messagingSenderId: "365826364249",

  appId: "1:365826364249:web:6991ec14ea536473283248"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;