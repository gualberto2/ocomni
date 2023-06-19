import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
  const auth = getAuth();
  const params = useParams();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  const [cancelChanges, setCancelChanges] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function onLogout() {
    auth.signOut();
    navigate("/");
    toast.success("Successfully signed out");
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function onCancel() {
    setChangeDetails(false);
    setCancelChanges(true);
    navigate("/profile");
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details successfully upated!");
    } catch (error) {
      toast.error("Could not update details :(");
    }
  }
  useEffect(() => {
    document.body.classList.add("page-animation");

    return () => {
      document.body.classList.remove("page-animation");
    };
  }, []);
  return (
    <>
      <p>Account</p>
      <section className="shadow-lg rounded-xl bg-[#E5E1F4] m-4 p-10 grid grid-col-3 grid-row-2 sm:grid-col-2 sm:grid-row-1 sm:grid-flow-col gap-y-4 sm:gap-0 mx-auto max-w-6xl">
        <div className="col-span-3 sm:col-span-1 flex justify-center items-center">
          <img
            src="https://media.licdn.com/dms/image/C5603AQEpaLYDPronZQ/profile-displayphoto-shrink_800_800/0/1631567146974?e=2147483647&v=beta&t=3J55DW5o9QFqnUsw_UKS_aWJUKg_SVQAx1Ebdu1h2BQ"
            alt=""
            className="rounded-full max-h-[243px] max-w-[243px]"
          />
        </div>
        <div className="col-span-3 sm:col-span-2 ">
          <form action="">
            {/* name input */}
            <div className="flex flex-col">
              <p>Name</p>
              <input
                type="text"
                id="name"
                value={name}
                disabled={!changeDetails}
                onChange={onChange}
                className={`mb-3 rounded-2xl text-gray-300 border-gray-400 ${
                  changeDetails &&
                  "focus:bg-purple-100 bg-slate-200 text-[black] border-green-600 border"
                } `}
              />
              <p>Email</p>
              <input
                type="email"
                id="email"
                value={email}
                className={`mb-3 rounded-2xl text-gray-300 border-gray-400 `}
              />
              <p>Password</p>
              <input
                type="password"
                id="password"
                value="***********"
                disabled
                onChange={onChange}
                className=" rounded-2xl text-gray-300 border-gray-400 "
              />
            </div>
          </form>
          <div className="mt-4 flex flex-row items-center justify-around gap-4">
            <button
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState);
              }}
              className={`cursor-pointer shadow-md bg-[#5B45BB] text-white font-medium w-full text-sm rounded py-2 text-center hover:bg-[#503DA4] transition duration-150 ease-in-out hover:shadow-lg active:bg-[#413286] ${
                changeDetails &&
                "bg-green-400 hover:bg-green-600 active:bg-green-800 "
              }`}
            >
              {changeDetails ? "Apply Changes" : "Edit Profile"}
            </button>
            <button
              className={`cursor-pointer  shadow-md bg-[#F4B400] hover:bg-[#A38B00] text-white font-medium w-full text-sm rounded py-2 text-center transition duration-150 ease-in-out  hover:shadow-lg active:shadow-xl ${
                changeDetails &&
                "hover:bg-red-500 focus:bg-red-700 bg-red-400 text-[black]"
              }`}
              onClick={() => {
                cancelChanges ? onLogout() : onCancel();
              }}
            >
              {changeDetails ? "Cancel Changes" : "Log Out"}
            </button>
          </div>
        </div>
      </section>
      <section className="m-4">
        <p>Websites</p>
        <div className="bg-gray-200 shadow-lg rounded-xl">
          {/* Here will be code for those whom are whitelisted with websites already on their acocunt */}
        </div>
        <div className="bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-xl">
          <div className="">
            {/* Here is the code for those who do not have sites nad are not whitelisted*/}
          </div>

          <div className="flex justify-center items-center flex-col h-screen">
            <p className="text-sm mb-2">
              There's no websites built for you. Lets get you a website made.
              Click below.
            </p>
            <button className="bg-[#7B6AC8] hover:bg-[#5B45BB] shadow-md text-white rounded p-5 transition duration-150 hover:shadow-2xl ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
