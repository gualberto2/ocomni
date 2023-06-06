import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function onChange(e) {
    setEmail(e.target.value);
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendEmailVerification(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not find your email");
    }
  }

  return (
    <section className="bg-white">
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl ">
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

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
              <p className="mb-6 md:text-center text-sm sm:text-lg">
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-[#F4B400] hover:text-[#A38B00]  transition duration-200 ease-in-out ml-1.5 hover:underline"
                >
                  Register
                </Link>
              </p>
              <p className="mb-6 md:text-center">
                <Link
                  to="/sign-in"
                  className="text-[#9688D3] hover:text-[#7B6AC8] transition duration-200 ease-in-out ml-1.5 hover:underline"
                >
                  Sign In
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
