import React, { useEffect } from "react";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { avatar } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import SearchBar from "./SearchBar";

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

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
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
        if (location.pathname.startsWith("/browse/movie/")) {
          navigate(`/browse/movie/${id}`);
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Clean up the subscription on unmount or unsubscribe when component is unmounted
    return unsubscribe;
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="w-full fixed top-0 left-0 px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-28 sm:w-40 ml-2 sm:ml-4" src={Logo} alt="Logo" />
      {user && (
        <div className="flex items-center space-x-2 ml-auto">
          {" "}
          {/* ml-auto to push logout button to the right */}
          <SearchBar />
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-md"
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
