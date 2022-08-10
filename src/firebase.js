import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhWPvsrPOKrQBBJdGKwZVKamrVpND24iY",
    authDomain: "linkedin-clone-99dfe.firebaseapp.com",
    projectId: "linkedin-clone-99dfe",
    storageBucket: "linkedin-clone-99dfe.appspot.com",
    messagingSenderId: "802383249533",
    appId: "1:802383249533:web:faa3e409eb4732fc613114",
    measurementId: "G-QZBR2CX6B5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;