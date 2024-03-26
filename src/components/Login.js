import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { checkValideData } from "../utils/validate";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const handleButtonClick = (e) => {
    // e.preventDefault();
    // validate the form data
    console.log(email, password);
    const message = checkValideData(email, password);
    setErrorMessage(message);

    if(message)return

if(!isSignInForm){
  // sign Up logic
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode +"-"+ errorMessage)
    });
}
else{
  // sign in logic
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
    
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
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black top-0">
        <img className="w-40 ml-4" src={Logo} alt="Logo" />
      </div>
      <div className="absolute top-4 my-4 left-0 right-0 mx-auto flex justify-center items-center">
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
              {/* <Link
                className="text-gray-200"
                to={isSignInForm ? "/login" : "/signup"}
                onClick={toggleSignInForm}
              >
                {isSignInForm ? "Sign up now." : "Sign in."}
              </Link> */}
              <p className="text-gray-200" onClick={toggleSignInForm}>
                {isSignInForm ? "Sign up now." : "Sign in."}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
