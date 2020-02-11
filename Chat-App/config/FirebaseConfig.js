import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyALBd_T4OsiaV9cY5_6i79I6cLve3j6LPM",
    authDomain: "chatapp-c1438.firebaseapp.com",
    databaseURL: "https://chatapp-c1438.firebaseio.com",
    projectId: "chatapp-c1438",
    storageBucket: "chatapp-c1438.appspot.com",
    messagingSenderId: "129350784295",
    appId: "1:129350784295:web:7853d543547679ef34c502",
    measurementId: "G-JH3RKNL0E6"
  };
  // Initialize Firebase
export const firebaseApp =  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();