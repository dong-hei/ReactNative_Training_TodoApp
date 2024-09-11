// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFtqzJY1ccG0EFdD7SI6hNySoQYMdivxA',
  authDomain: 'reactnative-todo-670de.firebaseapp.com',
  projectId: 'reactnative-todo-670de',
  storageBucket: 'reactnative-todo-670de.appspot.com',
  messagingSenderId: '1010066918118',
  appId: '1:1010066918118:web:384c7d8116fdab35428927',
  measurementId: 'G-L0FZNXY0X6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
