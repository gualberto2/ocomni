import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
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
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentials.user) {
        navigate("/profile");
      }
      toast.success("Sign In Successful.");
    } catch (error) {
      toast.error("Sign In Credentials Invalid");
    }
  }
  return (
    <section className="bg-white">
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
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
                s
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
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-[#F4B400] hover:text-[#A38B00]  transition duration-200 ease-in-out ml-1.5 hover:underline"
                >
                  Register
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
              Sign In
            </button>
            <div className="flex my-4 before:border-t before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
