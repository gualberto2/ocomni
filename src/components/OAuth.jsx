import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
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
      navigate("/account");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }
  async function onFacebookClick() {
    try {
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
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
      navigate("/account");
    } catch (error) {
      toast.error("Could not authorize with Facebook");
      console.log(error);
    }
  }
  async function onTwitterClick() {
    try {
      const auth = getAuth();
      const provider = new TwitterAuthProvider();
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
      navigate("/account");
    } catch (error) {
      toast.error("Could not authorize with Twitter");
      console.log(error);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex items-center w-full hover:bg-gray-200 text-inherit pl-2 pr-4 py-3 text-sm font-semibold rounded-sm transition duration-150 border-[1px] border-slate-400 ease-in-out "
      >
        <FcGoogle className="bg-white rounded-full mr-2 text-2xl " />
        Continue with Google
      </button>
      <button
        button
        className="flex items-center w-full hover:bg-gray-100 text-inherit pl-2 pr-4 py-3 text-sm font-semibold rounded-sm transition duration-150 border-[1px] border-slate-400 ease-in-out text-neutral-400"
        // onClick={onFacebookClick}
        type="button"
      >
        <FaFacebook className="bg-white text-blue-300 rounded-full mr-2 text-2xl " />
        Continue with Facebook
      </button>
      <button
        onClick={onTwitterClick}
        type="button"
        className="flex items-center w-full hover:bg-gray-200 text-inherit pl-2 pr-4 py-3 text-sm font-semibold rounded-sm transition duration-150 border-[1px] border-slate-400 ease-in-out "
      >
        <FaTwitter className="bg- text-blue-400 rounded-full mr-2 text-2xl " />
        Continue with Twitter
      </button>
    </>
  );
}

//old facebook styling
// FaFacebook className="bg-white text-blue-600 rounded-full mr-2 text-2xl "
// button className="flex items-center w-full hover:bg-gray-200 text-inherit pl-2 pr-4 py-3 text-sm font-semibold rounded-sm transition duration-150 border-[1px] border-slate-400 ease-in-out "
