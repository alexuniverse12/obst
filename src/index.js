import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./components/Main";
import reportWebVitals from './reportWebVitals';
import "./styles/styles.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABJ5ULBEl7htgaD5c27Xm12JM-LMl6ZNQ",
  authDomain: "obst-dd06b.firebaseapp.com",
  projectId: "obst-dd06b",
  storageBucket: "obst-dd06b.appspot.com",
  messagingSenderId: "819879078506",
  appId: "1:819879078506:web:20ed1d79c3ebae21623813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyABJ5ULBEl7htgaD5c27Xm12JM-LMl6ZNQ",
//     authDomain: "obst-dd06b.firebaseapp.com",
//     projectId: "obst-dd06b",
//     storageBucket: "obst-dd06b.appspot.com",
//     messagingSenderId: "819879078506",
//     appId: "1:819879078506:web:20ed1d79c3ebae21623813"
//   };




// firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
