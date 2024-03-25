import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';


const router = createBrowserRouter([{
  path:"/login",
  element:<Login/>
},{
  path:"/browse",
  element:<Browse/>
}])
function App() {
  return (
  <RouterProvider router={router}/>
  );
}

export default App;
