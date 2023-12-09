import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOq_hZs4wvnL3EuFiT3Wk0LlQpOp-MESM",
  authDomain: "infinite-game-react.firebaseapp.com",
  projectId: "infinite-game-react",
  storageBucket: "infinite-game-react.appspot.com",
  messagingSenderId: "520846917804",
  appId: "1:520846917804:web:5c2953bfc98d0fc5515f09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
