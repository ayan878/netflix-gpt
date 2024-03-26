// import React from "react";
// import NetflixBg from "../assets/netflix-bg.jpg";
// import Login from "./Login";

// function Body() {
//   return (
//     <div>
//       <img src={NetflixBg} alt="Netflix Background" />
//       <Login />
//     </div>
//   );
// }

// export default Body;

import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const Body = () => {
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

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;