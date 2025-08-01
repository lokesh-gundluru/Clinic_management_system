import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDrgrw_gvPaAnPJ23IQ4H0JxC7id007Pts",
  authDomain: "clinic-management-system-e9809.firebaseapp.com",
  projectId: "clinic-management-system-e9809",
  storageBucket: "clinic-management-system-e9809.firebasestorage.app",
  messagingSenderId: "251692492426",
  appId: "1:251692492426:web:4837874c1588d3b0feef73",
  measurementId: "G-XJV9LN310E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);