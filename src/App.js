import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import Body from './components/Body';


const router = createBrowserRouter([
  {path:"/",
element:<Body/>},{
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
