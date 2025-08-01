import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// 🔹 Register User
export async function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    await setDoc(doc(db, "users", uid), {
      name,
      email,
      role
    });

    alert("✅ Registered successfully!");
    window.location.href = "login.html";
  } catch (error) {
    alert("❌ " + error.message);
  }
}

// 🔹 Login User
export async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    const docSnap = await getDoc(doc(db, "users", uid));
    if (docSnap.exists()) {
      const user = docSnap.data();
      if (user.role === "doctor") {
        window.location.href = "doctor.html";
      } else {
        window.location.href = "receptionist.html";
      }
    } else {
      alert("❌ User role not found.");
    }
  } catch (error) {
    alert("❌ " + error.message);
  }
}
