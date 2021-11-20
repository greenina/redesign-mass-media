import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDFZ0-Lp2Edus3hWkmA9hgCpijE66h7XWM",
  authDomain: "inhwasong-b829e.firebaseapp.com",
  databaseURL: "https://inhwasong-b829e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "inhwasong-b829e",
  storageBucket: "inhwasong-b829e.appspot.com",
  messagingSenderId: "298474839985",
  appId: "1:298474839985:web:e519974e48741ae690a790"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence();
const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  console.log('provider');
  return (
    <button onClick = {signInWithGoogle}>Sign in with google.</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick = {() => auth.signOut()}>Sign Out</button>
  )
}

export {db, firebaseApp, firebase, storage, auth, SignIn, SignOut};

