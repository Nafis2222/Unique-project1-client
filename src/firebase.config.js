// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7rxL4ihp92lAsglpEH_1OUhG7zmx8clo",
  authDomain: "unique-project1.firebaseapp.com",
  projectId: "unique-project1",
  storageBucket: "unique-project1.appspot.com",
  messagingSenderId: "286661903216",
  appId: "1:286661903216:web:5e97de6071ef1021ea45b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app