import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Header />
      <div className="bg-black bg-cover h-screen flex justify-center items-center">
        <form className="w-64">
          <label className="text-3xl font-bold text-gray-100 block mb-6">
            Sign In
          </label>
          <div className="mb-4">
            <input
              className="border border-gray-400 px-4 py-2 rounded-sm bg-stone-900 placeholder-gray-400 w-full block"
              placeholder="Email or Phone Number"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="border border-gray-400 px-4 py-2 rounded-sm bg-stone-900 placeholder-gray-400 w-full block mb-4"
              placeholder="Password"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-sm w-full mb-4">
              Sign In
            </button>
            <div className="flex justify-center">
              <Link
                to="https://www.netflix.com/in/LoginHelp"
                className="text-gray-400 hover:text-white"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex items-center space-x-2 mt-20">
              <input className="w-4 h-4" type="checkbox" />
              <label className="text-gray-200 cursor-pointer">
                Remember me
              </label>
            </div>
            <div className="flex space-x-1 ">
              <label className="text-stone-600">New to NetFlix?</label>
              <Link className="text-gray-200" to="/" >
              Sign up now.
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
