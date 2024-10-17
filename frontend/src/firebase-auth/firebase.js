import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Make sure GoogleAuthProvider is imported

const firebaseConfig = {
  apiKey: "AIzaSyD7srpTJtG4qY9eruekFL-exccw3DtAxyg",
  authDomain: "bullatshirt.firebaseapp.com",
  projectId: "bullatshirt",
  storageBucket: "bullatshirt.appspot.com",
  messagingSenderId: "868292934237",
  appId: "1:868292934237:web:e6c676e5c3fac12083abb4",
  measurementId: "G-6E4800MWLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export auth
const auth = getAuth(app);

// Initialize GoogleAuthProvider
const googleProvider = new GoogleAuthProvider(); // Correct declaration

// Export auth and googleProvider as named exports
export { auth, googleProvider };
