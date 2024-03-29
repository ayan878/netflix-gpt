import React, { useEffect, useState } from "react";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { avatar } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearch } from "../utils/gptSlice";
import { FaSearch } from "react-icons/fa";

function Header() {
  const [expanded, setExpanded] = useState(false);
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

    // Clean up the subscription on unmount or unsubscribe when component is unmount
    return unsubscribe;
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleGptSearchClick = () => {
    // Toggle GPT Search Button
    setExpanded(!expanded);
    dispatch(toggleSearch());
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40 ml-4" src={Logo} alt="Logo" />
      {user && (
        <div className="flex items-center justify-center  space-x-2">
          <div
            className={`flex items-center rounded-lg border ${
              expanded ? "flex w-72 justify-between px-4 " : "w-8 border-none"
            } transition-width duration-1000 `}
          >
            {expanded && (
              <input
                type="search"
                className="py-2 text-white bg-transparent focus:outline-none"
                placeholder="Search"
              />
            )}

            <button className="text-white" onClick={handleGptSearchClick}>
              <FaSearch />
            </button>
          </div>

          <img
            className="w-10 h-10 rounded-md"
            src={user?.photoURL || avatar}
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
