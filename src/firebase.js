import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDgrIjRGfUwSk1OfYSLWqyOVRnmsW3V59Y",
    authDomain: "whatsapp-clone-b2ee0.firebaseapp.com",
    projectId: "whatsapp-clone-b2ee0",
    storageBucket: "whatsapp-clone-b2ee0.appspot.com",
    messagingSenderId: "400108340407",
    appId: "1:400108340407:web:28840f9628f37b413f7932",
    measurementId: "G-V1RS08D767"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;