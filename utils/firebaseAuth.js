import { initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBPyMlQ4JQKNXX8a7yDD3_VzH0wGZcfa9I",
  authDomain: "dream-planner-6233f.firebaseapp.com",
  projectId: "dream-planner-6233f",
  storageBucket: "dream-planner-6233f.appspot.com",
  messagingSenderId: "212798510800",
  appId: "1:212798510800:web:37fc8fab028da2e351f0d5",
  measurementId: "G-B3LKDWEXGJ"
};

let app;

try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  app = getApp();
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
