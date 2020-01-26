import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB093gTXBjUEzelHPeWXnc1LhdglUp0BxQ",
  authDomain: "react-spas-baa92.firebaseapp.com",
  databaseURL: "https://react-spas-baa92.firebaseio.com",
  projectId: "react-spas-baa92",
  storageBucket: "react-spas-baa92.appspot.com",
  messagingSenderId: "945876811361",
  appId: "1:945876811361:web:033a4c7a1dda1039c6b420",
  measurementId: "G-GLD828R7JR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;