import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaTwitter } from "react-icons/fa";
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
    <>
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex items-center w-full hover:bg-gray-200 text-inherit pl-2 pr-4 py-3 text-sm font-semibold rounded-sm transition duration-150 border-[1px] border-slate-400 ease-in-out "
      >
        <FcGoogle className="bg-white rounded-full mr-2 text-2xl " />
        Continue with Google
      </button>
    </>
  );
}

// const onTwitterClick = () => {
//   const auth = getAuth();
//   const provider = new TwitterAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((re) => {
//       console.log(re);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// async function onFacebookClick() {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // The signed-in user info.
//       const user = result.user;

//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//       const credential = FacebookAuthProvider.credentialFromResult(result);
//       const accessToken = credential.accessToken;

//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = FacebookAuthProvider.credentialFromError(error);
//     });
// }
{
  /* <button
// onClick={onFacebookClick}
type="button"
className="flex items-center w-full hover:bg-gray-200 text-inherit pl-2 pr-4 py-3 text-sm font-semibold rounded-sm transition duration-150 border-[1px] border-slate-400 ease-in-out "
>
<FaFacebook className="bg-white text-blue-600 rounded-full mr-2 text-2xl " />
Continue with Facebook
</button>
<button
onClick={onTwitterClick}
type="button"
className="flex items-center w-full hover:bg-gray-200 text-inherit pl-2 pr-4 py-3 text-sm font-semibold rounded-sm transition duration-150 border-[1px] border-slate-400 ease-in-out "
>
<FaTwitter className="bg- text-blue-400 rounded-full mr-2 text-2xl " />
Continue with Twitter
</button> */
}
