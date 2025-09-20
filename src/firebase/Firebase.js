import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Only if you plan to use it

const firebaseConfig = {
  apiKey: "AIzaSyCbYAtYgVbDtCzmxEp9aN4pAbTv6VSqkX8",
  authDomain: "real-estate-59e81.firebaseapp.com",
  projectId: "real-estate-59e81",
  storageBucket: "real-estate-59e81.firebasestorage.app",
  messagingSenderId: "276281191060",
  appId: "1:276281191060:web:d5c38a997224a4b4312281",
  measurementId: "G-6K0GLEN0YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth instance
export const auth = getAuth(app);

// ✅ Uncomment if you want Analytics
// export const analytics = getAnalytics(app);
