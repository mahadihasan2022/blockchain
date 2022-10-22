import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBg9rHQmbhVZnV1IK_3Yct1hf3mE7whw1E",
  authDomain: "block-chain-dab1b.firebaseapp.com",
  projectId: "block-chain-dab1b",
  storageBucket: "block-chain-dab1b.appspot.com",
  messagingSenderId: "431671423503",
  appId: "1:431671423503:web:e7a876696665e900f9697a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;



