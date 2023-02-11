import { initializeApp } from "firebase/app";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9TFVmiI38vD-unV08Q62nvvAdcvvf8AU",
  authDomain: "firbase-login-system.firebaseapp.com",
  projectId: "firbase-login-system",
  storageBucket: "firbase-login-system.appspot.com",
  messagingSenderId: "626250886833",
  appId: "1:626250886833:web:b18aa424909ec81f2bbc90",
};

// initialize firebase app
export const app = initializeApp(firebaseConfig);
