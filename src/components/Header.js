import React, { useEffect } from "react";
import Logo from "../assets/Netflix_Logo_PMS.png";
import ProfileIcon from "../assets/profile-icon.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Clean up the subscription on unmount
    return unsubscribe;
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40 ml-4" src={Logo} alt="Logo" />
      {user && (
        <div className="flex p-2 items-center justify-center space-x-2">
          <img
            className="w-10 h-10 rounded-md"
            src={user?.photoURL || ProfileIcon}
            alt="profile-icon"
          />
          <button className="font-bold text-red-500" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
