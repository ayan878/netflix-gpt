import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link} from "react-router-dom";
import { checkValideData } from "../utils/validate";
import Header from "./Header";
import { profileURL } from "../utils/constants";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleButtonClick = (e) => {
    // e.preventDefault();
    // validate the form data

    const message = checkValideData(email, password);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // sign Up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          //display name
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              profileURL
          })
            .then(() => {})
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm((prevIsSignInForm) => !prevIsSignInForm);
  };

  return (
    <div className="bg-cover bg-center h-screen md:bg-hero-pattern bg-black">
      <Header />
      <div className="absolute top-10 my-4 left-0 right-0 mx-auto flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-12 bg-black bg-opacity-80 rounded-md"
        >
          <label className="text-3xl font-bold text-gray-100 block mb-6">
            Sign {isSignInForm ? "In" : "Up"}
          </label>
          {!isSignInForm && (
            <div className="mb-4">
              <input
                className="text-white border border-gray-400 px-4 py-2 rounded-sm bg-stone-900 placeholder-gray-400 w-full block"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4">
            <input
              className="text-white border border-gray-400 px-4 py-2 rounded-sm bg-stone-900 placeholder-gray-400 w-full block"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="text-white border border-gray-400 px-4 py-2 rounded-sm bg-stone-900 placeholder-gray-400 w-full block"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-sm pb-4">{errorMessage}</p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md w-full mb-4"
              onClick={handleButtonClick}
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
              <p className="text-gray-200" onClick={toggleSignInForm}>
                {isSignInForm ? "Sign up now." : "Sign in."}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
