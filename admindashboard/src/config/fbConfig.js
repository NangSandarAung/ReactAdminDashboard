import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDkTC3rh3vABK1aeBfrqolfc7jGs9NmOFY",
  authDomain: "admindashboard-95799.firebaseapp.com",
  projectId: "admindashboard-95799",
  storageBucket: "admindashboard-95799.appspot.com",
  messagingSenderId: "408594621142",
  appId: "1:408594621142:web:2d41bff511668278f99f77",
  measurementId: "G-P3JY5TPS3T"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });


  export default firebase;