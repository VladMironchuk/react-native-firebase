// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASpVDHd9ZOSKCKmB8z14_9XQ_vbgn2eu4',
  authDomain: 'react-firebase-auth-3b6b9.firebaseapp.com',
  projectId: 'react-firebase-auth-3b6b9',
  storageBucket: 'react-firebase-auth-3b6b9.appspot.com',
  messagingSenderId: '434044305160',
  appId: '1:434044305160:web:7f9e199a05e725c4e8f6bd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
