import React, { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Sign up was successful");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="mx-auto my-14 max-w-6xl px-8 h-vh">
      <div className="my-8 max-w-[300px]  mx-auto">
        <div className="flex flex-row items-center ">
          <div className="cursor-pointer border-b border-gray-400 w-full">
            <h3
              className="uppercase font-medium text-xs text-center mb-3 tracking-wider"
              onClick={() => navigate("/login")}
            >
              login
            </h3>
          </div>
          <div className="cursor-pointer border-b-2 border-purple-600 w-full">
            <h3
              onClick={() => navigate("/register")}
              className="uppercase font-bold text-xs text-center mb-3 tracking-wider"
            >
              register
            </h3>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3 py-6">
              <OAuth />
            </div>
            <div className="flex before:border-t before:flex-1 items-center before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
              <p className="text-center text-xs font-medium px-3">OR</p>
            </div>
            <div className="flex flex-col gap-3 my-6">
              <input
                type="email"
                id="email"
                onChange={onChange}
                value={email}
                className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                placeholder="Email"
              />
              <div className="bg-inherit relative">
                <input
                  type={showPassword ? "text" : "password"}
                  s
                  id="password"
                  value={password}
                  onChange={onChange}
                  className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                  placeholder="Your password"
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="absolute right-3 top-3  text-2xl text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-3 text-2xl text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
              <input
                type="text"
                id="name"
                onChange={onChange}
                value={name}
                className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                placeholder="Enter your name"
              />
            </div>
            <button
              type="submit"
              className="w-full  text px-7 py-3 font-medium text-sm  rounded-sm   bg-[#6366F1] text-white hover:text-white overflow-hidden transition ease-in-out duration-150  hover:bg-[#5F56D6] active:bg-[#5B45BB] "
            >
              Continue {" >"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="h-screen">
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://media.licdn.com/dms/image/C5603AQHRLF-coUTT8w/profile-displayphoto-shrink_800_800/0/1652663927640?e=2147483647&v=beta&t=OzJ0rkrdnFDWJRjbhgtGfXoT4lcgAw6yiersGVPFlbg"
            alt="arthur fernandez"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="name"
              id="name"
              required
              value={name}
              onChange={onChange}
              placeholder="Type your full name here"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-2 shadow border-[#BDB5E3] rounded transition ease-in-out"
            />
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-2 shadow border-[#BDB5E3] rounded transition ease-in-out"
            />

            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white shadow border-2 border-[#BDB5E3]  rounded transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3  text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
              {/* <div className="mb-6">
                <p className="text-lg font-semibold">PFP</p>
                <p className="text-gray-600">
                  This will be your profile picture
                </p>
                <input
                  type="file"
                  id="pfp"
                  onChange={onChange}
                  accept=".jpg, .png, .jpeg"
                  required
                  className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
                />
              </div> 
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Already have an account?
                <Link
                  to="/sign-in"
                  className="text-[#F4B400] hover:text-[#A38B00]  transition duration-200 ease-in-out ml-1.5 hover:underline"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className=" text-[#9688D3] hover:text-[#7B6AC8] transition duration-200 ease-in-out  hover:underline"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5B45BB] text-white px-7 py-4 font-medium text-sm uppercase rounded shadow-md hover:bg-[#503DA4] transition duration-150 ease-in-out hover:shadow-lg active:bg-[#413286]"
            >
              Sign Up
            </button>
            <div className="flex my-4 before:border-t before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
              </section> */
}
