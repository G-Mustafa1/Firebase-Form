import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// import {
//    getFirestore,
//    collection,
//    addDoc,
//    doc,
//    setDoc
// } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
const firebaseConfig = {
   apiKey: "AIzaSyDIFb-in4PXBn_vOzyrkEVBk7f_jWPpz-0",
   authDomain: "loginsingup-72ff1.firebaseapp.com",
   projectId: "loginsingup-72ff1",
   storageBucket: "loginsingup-72ff1.appspot.com",
   messagingSenderId: "670972635617",
   appId: "1:670972635617:web:eaee1b649713b92e60caa0",
   measurementId: "G-XVZJLSP9V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = getFirestore(app);
console.log('hy')
onAuthStateChanged(auth, (user) => {
   if (user) {
    //  console.log(user.uid)
     // User is signed in, see docs for a list of available properties
     // https://firebase.google.com/docs/reference/js/auth.user
     const uid = user.uid;
     console.log('bly bil')
     window.location.href = "/pages/login/index.html"
     // ...
   } else {
      window.location.href = "/pages/signup/index.html"
      console.log('chl nikl')
     // User is signed out
     // ...
   }
 });
 

