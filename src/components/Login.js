import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Netflix_Logo_PMS.png";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

 const toggleSignInForm = () => {
   setIsSignInForm((prevIsSignInForm) => !prevIsSignInForm);
 };


  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black top-0">
        <img className="w-40  ml-4" src={Logo} alt="Logo" />
      </div>
      <div className="absolute top-4 my-4 left-0 right-0 mx-auto flex justify-center items-center">
        <form className="p-12 bg-black bg-opacity-50 rounded-md ">
          <label className="text-3xl font-bold text-gray-100 block mb-6">
            Sign {isSignInForm ? "In" : "Up"}
          </label>
          {!isSignInForm && (
            <div className="mb-4">
              <input
                className="border border-gray-400 px-4 py-2 rounded-sm bg-stone-900 placeholder-gray-400 w-full block"
                placeholder="Full Name"
              />
            </div>
          )}
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
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-sm w-full mb-4"
              onClick={toggleSignInForm}
            >
              Sign {isSignInForm ? "In" : "Up"}
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
            <div className="flex space-x-1 mt-2">
              <label className="text-stone-600">
                {isSignInForm ? "New to Netflix?" : "Already have an account?"}
              </label>
              <Link
                className="text-gray-200"
                to={isSignInForm ? "/" : "/signup"}
              >
                {isSignInForm ? "Sign up now." : "Sign in."}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
