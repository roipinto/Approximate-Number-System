// import * as firebase from 'firebase'
import firebase from 'firebase';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCbBCV09e3ZAgYYbNOsH3r2FVgXolZpYtc",
    authDomain: "approximate-number-system.firebaseapp.com",
    projectId: "approximate-number-system",
    storageBucket: "approximate-number-system.appspot.com",
    messagingSenderId: "586558485838",
    appId: "1:586558485838:web:bb45a620bb3025666ada1f",
    measurementId: "G-X32KM1RXT8"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  //const storage = firebase.storage().ref()

  
export default fire;
