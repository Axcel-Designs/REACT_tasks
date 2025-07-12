import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCf8-qzhliBS38SOXGIWzCviGJ8rY1zrVU",
//   authDomain: "user-dashboard-kcr.firebaseapp.com",
//   projectId: "user-dashboard-kcr",
//   storageBucket: "user-dashboard-kcr.firebasestorage.app",
//   messagingSenderId: "71882765027",
//   appId: "1:71882765027:web:637c41759aeacf6bec0bd6",
// };


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export default app



