import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is sign in
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid, email, displayName,photoURL }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

    // Clean up the subscription on unmount
    return unsubscribe;
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
