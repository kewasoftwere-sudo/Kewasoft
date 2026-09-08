import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Login Error:", error.message);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};
