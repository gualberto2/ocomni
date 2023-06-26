import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function onChange(e) {
    setEmail(e.target.value);
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
      navigate("/fpec-success");
    } catch (error) {
      toast.error("Could not find your email");
    }
  }

  return (
    <section className="mx-auto my-14 max-w-6xl px-8 h-vh">
      <div className="my-8 max-w-[300px]  mx-auto">
        <div className="flex flex-row items-center ">
          <div className="cursor-pointer border-b-2 border-purple-600 w-full">
            <h3
              className="uppercase font-bold text-xs text-center mb-3 tracking-wider"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password
            </h3>
          </div>
          <div className="cursor-pointer border-b border-gray-400 w-full">
            <h3
              className="uppercase font-medium text-xs text-center mb-3 tracking-wider"
              onClick={() => navigate("/login")}
            >
              login
            </h3>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3 my-6">
              <input
                onChange={onChange}
                type="email"
                className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                placeholder="Email"
                id="email"
                value={email}
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
