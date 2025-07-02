import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use}
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf8-qzhliBS38SOXGIWzCviGJ8rY1zrVU",
  authDomain: "user-dashboard-kcr.firebaseapp.com",
  projectId: "user-dashboard-kcr",
  storageBucket: "user-dashboard-kcr.firebasestorage.app",
  messagingSenderId: "71882765027",
  appId: "1:71882765027:web:637c41759aeacf6bec0bd6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

