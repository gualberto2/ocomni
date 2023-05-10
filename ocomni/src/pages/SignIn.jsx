import React from "react";

export default function SignIn() {
  return (
    <section className="bg-white">
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://media.licdn.com/dms/image/C5603AQHRLF-coUTT8w/profile-displayphoto-shrink_800_800/0/1652663927640?e=2147483647&v=beta&t=OzJ0rkrdnFDWJRjbhgtGfXoT4lcgAw6yiersGVPFlbg"
            alt="arthur fernandez"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="email"
              id="email"
              required
              //   value={email}
              //   onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-2 shadow border-gray-300 rounded transition ease-in-out"
            />

            <div className="relative mb-6">
              <input
                // type={showPassword ? "text" : "password"}
                id="password"
                // value={password}
                // onChange={onChange}
                placeholder="Password"
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white shadow border-2 border-gray-300  rounded transition ease-in-out"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-4 font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Sign In
            </button>
            <div className="flex my-4 before:border-t before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
