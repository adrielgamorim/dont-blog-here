import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA5wPObRsg-6pGEbTNEeNPpoxnVe0Qg5EY",
  authDomain: "dont-blog-here-f254e.firebaseapp.com",
  projectId: "dont-blog-here-f254e",
  storageBucket: "dont-blog-here-f254e.appspot.com",
  messagingSenderId: "383724983874",
  appId: "1:383724983874:web:8e521e95ddbbc0e33e3fdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();