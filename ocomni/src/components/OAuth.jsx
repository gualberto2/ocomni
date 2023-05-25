import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { toast } from "react-toastify";

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check for users
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with google");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex justify-center items-center w-full bg-[#F4B400] hover:bg-[#A38B00] uppercase text-white px-7 py-3 text-sm font-medium rounded transition duration-150 ease-in-out shadow-md hover:shadow-lg active:shadow-xl"
    >
      <FcGoogle className="bg-white rounded-full mr-2 text-2xl " />
      Continue with Google
    </button>
  );
}
