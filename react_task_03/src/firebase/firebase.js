import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCf8-qzhliBS38SOXGIWzCviGJ8rY1zrVU",
  authDomain: "user-dashboard-kcr.firebaseapp.com",
  projectId: "user-dashboard-kcr",
  storageBucket: "user-dashboard-kcr.firebasestorage.app",
  messagingSenderId: "71882765027",
  appId: "1:71882765027:web:637c41759aeacf6bec0bd6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

